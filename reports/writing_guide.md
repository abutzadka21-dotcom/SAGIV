# Writing guide: Studio Dermal TMP-02 market research doc (read fully before writing)

## 0. What you are producing

You write one or more sections of a Hebrew market research document that lives in Claude Docs. The reader is an Israeli e-commerce seller who wants to sell an instant under-eye tightener (like Studio Dermal "Temporary Eye Tightener", TMP-02) in Israel, in Hebrew. Every research step has two tracks:

- מסלול א: שוק המקור (בריטניה וארה"ב)
- מסלול ב: ישראל

You write directly into the doc with the Claude Docs connector (section 4). Do NOT search the web and do NOT open web pages: use only the research notes. The doc is open on the user's screen while you write.

## 1. Inputs

Notes folder: `/home/user/SAGIV/research_notes/מחקר שוק Studio Dermal מול ישראל/`

Source market (UK + US):
- A1_brand_product.md: Studio Dermal brand, product, funnel, Trustpilot, Amazon listings
- A2_direct_competitors.md + A9_competitors_ads_round2.md: direct competitors, prices, hooks, ads
- A3_indirect_and_market.md: indirect alternatives, market size, trends
- A4_amazon_reviews.md + A8_customer_voice_round2.md: reviews and customer quotes
- A5_reddit.md: Reddit was unreachable (0 Reddit quotes); non-Reddit forum titles, patterns
- A6_social_and_ads.md: hooks, visuals, creators, structures, CTAs, ad styles
- A7_sophistication_and_regulation.md + A10_regulation_round2.md: claim history, sophistication, regulation, platform ad policies
- A11_identity_round2.md: identity markers of the audience

Israel:
- B1_israel_competitors_pricing.md + B8_israel_competitors_round2.md: Israeli competitors, ILS prices, AliExpress/Temu
- B2_israel_customer_voice.md + B5_israel_voice_round2.md: Hebrew customer quotes
- B3_israel_social_identity_ads.md + B6_israel_social_round2.md: Israeli creators, hooks, comments, segments, ad style
- B4_israel_rules_and_market.md + B7_israel_rules_round2.md: regulation, VAT/import, e-commerce habits, seasonality

Consistency anchor: `00_strategy_brief.md` in the same folder. Its verdicts (sophistication levels, awareness levels, positioning, avatars, key numbers, conflicts resolved) override anything else. Never contradict it. If a file you were told to read does not exist, skip it and say nothing about it.

User-provided data: the Trendtrack screenshot the user attached (early October 2026). Cite it as "נתוני Trendtrack מצילום המסך שסיפקת" and label it [מאומת]. Its numbers: store created Nov 2025 (Shopify, theme Shrine Pro, currency GBP); 210K monthly visits (+9,130%), traffic near zero until mid-2026 then a spike in the latest month; 322 live Meta ads from the page "Janets Beauty" (from about 50 in April to a peak near 380); 7 Google ads; 17 marketing emails; Trustpilot 2.3 from 84 reviews; ad targeting 56% UK / 37% US; visitors 85% US / 15% UK; pixels: Meta, Google Ads, Google Analytics, AppLovin, Taboola; 6 products.

## 2. Hard rules (the user's truth rules; breaking any of them ruins the report)

1. Hebrew everywhere. Brand and product names stay in their original spelling. A professional marketing term appears the first time in plain Hebrew with the English term in parentheses, e.g. "רמת התחכום של השוק (Market Sophistication)". Use the glossary in section 3.
2. Never use the em dash or the en dash characters anywhere, including inside quotes and tables. Use "-" or ":" instead. If a source quote contains one, replace it with "-". Before every write, check your text for these two characters.
3. Every substantive insight carries one label: [מאומת] (has a source link), [הסקה] (our conclusion from the research), [ידע כללי] (background with no specific source). In a quote list or table where every row has its link, put [מאומת] once in the line that introduces it.
4. Quotes are verbatim from the notes, with the link given there. Never invent, improve, merge or shorten a quote in a way that changes it; never invent a customer name, a "verified buyer", a number or a URL. Items the notes mark as paraphrase, near-verbatim or summary are never shown in quotation marks: present them as a paraphrase ("לפי תקציר החיפוש, ..."). A page title or headline may be quoted as a title ("כותרת השרשור:").
5. A foreign-language quote: the original text first, then on the next line "תרגום:" and a Hebrew translation. A translated quote is always marked as a translation.
6. Links as markdown `[תיאור קצר](URL)`, using the exact, deepest URL from the notes. Never a homepage when the notes have a deeper URL.
7. Excluded sources: do not use anything the notes say came from GitHub (code search, public datasets hosted on GitHub, Keepa exports found on GitHub). It is outside this session's allowed sources. Also drop sources the notes flag as LOW, spam or lookalike.
8. Never mix markets. US or UK data is never presented as Israeli. In the Israeli track, if something has no Israeli source, say so; do not fill the gap with foreign data. A foreign data point may appear in the Israeli track only as an explicit comparison ("בשוק המקור, לשם השוואה: ...").
9. The Israeli track of every step starts with the line: `מקורות ישראליים שנמצאו בשלב זה: N` (count the distinct Israeli URLs the notes give for that step). If the minimum quantities of the brief are not reached in Israel, state how many were found and why (for example: קבוצות פייסבוק סגורות, טוקבקים שלא נחשפו בחיפוש).
10. Minimum quantities: the section requirements in your prompt list minimums (for example 40 quotes). Meet them where the notes allow. If the notes fall short, write what exists and say the honest count. Never pad.
11. Avatars and personas get descriptive labels (e.g. "האמא העייפה לפני האירוע, 45-55"), not invented personal names.
12. Method note: all web content was read through the search engine's extraction of the pages, because direct page access was blocked in this environment; Reddit was unreachable. This is stated once in the "מה לא הצלחתי לבדוק" section. Do not repeat it in every section; in a section where it matters (for example Reddit), one sentence is enough.
13. No legal advice language: the regulatory map is "מפת סיכונים, לא ייעוץ משפטי".

## 3. Style

- The first sentence of each section and each track is its point, with a number when possible. Never "בפרק זה נסקור".
- Sentences under 25 words, paragraphs of at most 3 sentences, plain words, no emoji, no hype, no exclamation marks.
- Pipe tables for items x attributes (competitors, prices, rules). Numbered lists for quotes and hooks. `####` subheadings inside a track. Sub-points indented 4 spaces.
- Quote list format:
  `1. "ציטוט מילה במילה" - [סוג המקור, שם המוצר](URL)`
  For a foreign quote add an indented line: `    תרגום: "..."`
- Numbers: use digits; currency signs ₪, $, £; dates as "אוקטובר 2026".
- Glossary (use these Hebrew terms consistently):
  - Temporary eye tightener: "מהדק עיניים זמני" (first time: "מהדק עיניים זמני (Temporary Eye Tightener)")
  - Film-forming: "יוצר שכבה (Film-forming)"; silicate: "סיליקט"
  - Market sophistication: "רמת התחכום של השוק (Market Sophistication)"
  - Market awareness: "רמת המודעות של הקהל (Market Awareness)"; the five stages: לא מודע, מודע לבעיה, מודע לפתרונות, מודע למוצר, מודע לגמרי
  - Hook: "הוק (Hook)"; CTA: "קריאה לפעולה (CTA)"; UGC: "תוכן משתמשים (UGC)"
  - Advertorial: "כתבה שיווקית (Advertorial)"; Listicle: "רשימה שיווקית (Listicle)"
  - Social proof: "הוכחה חברתית (Social Proof)"; mechanism: "מנגנון (Mechanism)"; unique mechanism: "מנגנון ייחודי (Unique Mechanism)"
  - Compare-at price: "מחיר לפני הנחה (Compare-at)"; dropshipping: "דרופשיפינג"
  - Positioning: "מיצוב (Positioning)"; avatar: "אווטאר (Avatar)"; objection: "התנגדות"
  - Before/after: "לפני ואחרי"; half-face demo: "הדגמת חצי פנים"

## 4. How to write into the doc (exact calls)

The doc:
- container: `{"kind":"project","id":"a8f3ec39-7c07-4669-9005-e3ecebee7808"}`
- body node: `{"object":"node","id":"b62de656-781d"}`, engine `"prose"`

Tools: `mcp__Claude_Docs__update` (and `mcp__Claude_Docs__guide` only if a call is refused). If a tool is not directly callable, load it with ToolSearch: `select:mcp__Claude_Docs__update,mcp__Claude_Docs__guide`.

Each of your sections has a pending placeholder block with a full id like `mpm5ztq2q00.352` (given in your prompt). Fill it in steps, so the reader watches it fill and no single call is too large (keep each call under about 2,500 Hebrew words):

Step A: replace your section's pending block with its heading, its lead, and new pending blocks for its parts:

```
mcp__Claude_Docs__update(
  ref = {"object":"node","id":"b62de656-781d"},
  engine = "prose",
  container = {"kind":"project","id":"a8f3ec39-7c07-4669-9005-e3ecebee7808"},
  payload = {"ops":[{"op":"replace",
     "target":{"kind":"blocks","ids":["mpm5ztq2q00.352"]},
     "with":{"as":"markdown",
             "blocks":{"pa":{"type":"pending","intent":"מסלול א: שוק המקור, ..."},
                       "pb":{"type":"pending","intent":"מסלול ב: ישראל, ..."}},
             "from":{"kind":"inline","content":"## שלב 1: ניתוח המותג והמוצר\n\nמשפט הפתיחה עם הנקודה המרכזית.\n\n<?claude block pa?>\n\n<?claude block pb?>"}}}]})
```

The ack returns `"session":"<S>"` and `"keys":{"pa":[<n1>],"pb":[<n2>]}`. The full id of each new pending block is `<S>.<n>` (for example `kq2b7w3m9pa.105`).

Step B: replace each new pending block with its content, one call per part:

```
payload = {"ops":[{"op":"replace",
   "target":{"kind":"blocks","ids":["<S>.<n1>"]},
   "with":{"as":"markdown","from":{"kind":"inline","content":"### מסלול א: שוק המקור (בריטניה וארה\"ב)\n\n..."}}}]}
```

If one part is still too long, plant more pending blocks inside it the same way (replace it with a subheading plus 2-3 new pending blocks) and fill them one by one.

Rules for the doc:
- Touch only your own placeholders and the blocks you created. Never delete, move or rewrite other sections. Never use "force".
- Ids are always in full form `<session>.<number>`. Never a short id like `.105`.
- A refused call changes nothing: read the refusal `code`, fix and resend the whole corrected call; if unclear, call `mcp__Claude_Docs__guide(items=["refusal.<code>"])`.
- Markdown supported: headings, paragraphs, bullet and numbered lists (sub-points indented 4 spaces), pipe tables, links, bold. No HTML, no images, no code blocks for prose.
- Before your final message, make sure no pending block of yours is left unfilled.

## 5. Final message back to the coordinator

At most 6 lines: which sections you filled, approximate word count, the counts against the minimums, and anything you could not support from the notes. Do not paste the section text.
