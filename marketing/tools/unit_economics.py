"""Unit economics for the Israeli launch: break-even CPA per bundle and for the order mix.

Reads marketing/config/economics.json. Run from the repo root:
    python3 marketing/tools/unit_economics.py
"""
import json
from pathlib import Path

CONFIG = Path(__file__).resolve().parents[1] / "config" / "economics.json"
UNITS = {"single": 1, "double": 2, "triple": 3}


def bundle_economics(cfg, bundle):
    vat = cfg["vat_rate"]
    costs = cfg["costs_placeholder"]
    customer_price = cfg["prices_incl_vat"][bundle] + cfg["shipping_charged_to_customer_incl_vat"][bundle]
    net_revenue = customer_price / (1 + vat)
    cost = (
        costs["product_cost_per_unit"] * UNITS[bundle]
        + costs["shipping_paid_by_seller_per_order"]
        + costs["packaging_per_order"][bundle]
        + costs["payment_fee_rate_of_customer_price"] * customer_price
        + costs["cancellation_rate_of_net_revenue"] * net_revenue
    )
    gross_profit = net_revenue - cost
    return customer_price, net_revenue, gross_profit


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8"))
    mix = cfg["order_mix_assumption"]
    target_share = cfg["kpi_working_targets_inference"]["cpa_target_share_of_breakeven"]

    print(f"{'bundle':<8} {'price incl VAT':>15} {'net revenue':>12} {'break-even CPA':>15} {'margin':>7}")
    aov_incl = aov_net = breakeven_mix = 0.0
    for bundle in UNITS:
        price, net, profit = bundle_economics(cfg, bundle)
        print(f"{bundle:<8} {price:>15.1f} {net:>12.1f} {profit:>15.1f} {profit / net:>7.0%}")
        aov_incl += mix[bundle] * price
        aov_net += mix[bundle] * net
        breakeven_mix += mix[bundle] * profit

    margin = breakeven_mix / aov_net
    print()
    print(f"order mix {mix}")
    print(f"AOV incl VAT:            {aov_incl:.1f} ILS")
    print(f"break-even CPA (mix):    {breakeven_mix:.1f} ILS")
    print(f"target CPA ({target_share:.0%}):       {breakeven_mix * target_share:.1f} ILS")
    print(f"break-even ROAS (net):   {1 / margin:.2f}")
    print("Costs are placeholders until economics.json holds real numbers.")


if __name__ == "__main__":
    main()
