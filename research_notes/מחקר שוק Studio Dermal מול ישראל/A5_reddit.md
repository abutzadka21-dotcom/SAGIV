# A5 Reddit research (STEP 6): under-eye bags, puffiness, crepey under-eye skin and instant eye tighteners (as of 2026-10-04)

> READ FIRST: STATUS OF THIS STEP
> - The brief asked for 50+ verbatim Reddit quotes with exact thread URLs. Result: **0 Reddit quotes and 0 Reddit thread URLs.** The search tool cannot see reddit.com at all: it returned an explicit 400 error saying reddit.com is "not accessible to our user agent". The session-wide web search budget then ran out (200 of 200) after this researcher's 12th search. WebFetch is egress-blocked (tested once, as the brief allowed).
> - What this file contains instead: (a) 41 verbatim titles or URL slugs from non-Reddit pages that the search tool returned (forum threads, personal essays, media headlines, marketplace and review-platform listings); (b) 13 paraphrases from the search tool's own summaries, labelled as paraphrase; (c) inferences and general knowledge, labelled as such.
> - **No item in this file may be presented in the report as a Reddit quote.** The report writer should either (1) label STEP 6 "not completed: Reddit inaccessible in this research environment" and use the substitute material below under its true platform names, or (2) wait for a Reddit pass through an access channel the user approves (see section 11).

**Legend**
- [VERIFIED] = exact text (page title or URL slug) that the search tool returned tied to that URL. Title-level only: no page body was read, so the content behind a title is unknown unless stated.
- [PARAPHRASE] = wording from the search tool's own summary of a result set. The claim did appear in the results, but the tool did not tie it to one URL; the likely source set is named. Never quote these as user words.
- [INFERENCE] = my conclusion.
- [GENERAL KNOWLEDGE] = background with no source found in this session; unverified; must not be presented as a Reddit finding or as a quote.

**Counts at a glance**

| Item | Count |
|---|---|
| Verbatim Reddit quotes with thread URL | 0 |
| Reddit URLs of any kind returned by search | 0 |
| Verbatim consumer-voice titles from non-Reddit communities (forum threads, personal essays) | 12 (V01-V12) |
| Verbatim media or informational headlines | 6 (V13-V18) |
| Verbatim marketplace, review-platform and retailer titles | 23 (V19-V41) |
| Search-tool paraphrases | 13 (P01-P13) |
| Subreddits listed (from the brief plus general knowledge, unverified) | 15 core + 3 optional |
| Patterns | 12 inference-level patterns + 12 general-knowledge hypotheses to verify |

---

## 0. Access status and method: could Reddit be researched in this environment?

### Takeaway
No. reddit.com is excluded from the search tool at the provider level, WebFetch is egress-blocked, and the session-wide search budget is exhausted. Nothing in this file comes from Reddit.

### Cited Findings
- [VERIFIED: tool output, 2026-10-04] Three searches restricted to reddit.com via the domain filter all failed with: "API Error: 400 The following domains are not accessible to our user agent: ['reddit.com']." The error pointed to [Anthropic support: does Anthropic crawl data from the web and how can site owners block the crawler](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) (page not opened).
- [VERIFIED: tool output] Six `site:reddit.com` queries in extended mode returned zero reddit.com URLs. The tool's own note on the first one: "the search results did not return any Reddit discussions about Plexaderm."
- [VERIFIED: tool output] Three unfiltered queries that named Reddit or a subreddit also returned zero reddit.com URLs.
- [VERIFIED: tool output] The 13th search call was refused: "Web search was not performed: this session has used its web search budget (200 of 200 WebSearch calls)." Six planned queries could not run (see log).
- [VERIFIED: tool output] The single permitted WebFetch attempt, on https://community.sephora.com/t5/Skincare-Aware/Best-under-eye-treatment-for-bags/m-p/3758263, failed: "Access to community.sephora.com is blocked by the network egress proxy."

#### Query log

| # | Query | Mode / filter | Outcome |
|---|---|---|---|
| 1 | site:reddit.com plexaderm | extended | 0 Reddit URLs; eBay Community, Trustpilot (7 country domains), eBay.de |
| 2 | site:reddit.com "peter thomas roth" firmx eye tightener | extended | 0 Reddit; eBay, eBay.de and Walmart listings |
| 3 | site:reddit.com "instantly ageless" | extended | 0 Reddit; Walmart and eBay listings |
| 4 | site:reddit.com "preparation h" under eyes | extended | 0 Reddit; Wikipedia, eBay, Substack, Goodreads, AOL x2, AnandTech |
| 5 | site:reddit.com "under eye bags" "look tired" | extended | 0 Reddit; Substack x4, HealthUnlocked, AOL, Goodreads, Blind, AnandTech |
| 6 | site:reddit.com "instant eye tightener" | extended | 0 Reddit; 9 Walmart + 1 eBay.de listings (no titles) |
| 7 | plexaderm under eye bags | extended, domain filter reddit.com | 400 error |
| 8 | Peter Thomas Roth Instant FIRMx eye | extended, domain filter reddit.com | 400 error |
| 9 | preparation h under eyes puffiness | extended, domain filter reddit.com | 400 error |
| 10 | plexaderm reddit review scam | standard | 0 Reddit; eBay Community x2, ScamDoc, Trustpilot x4, 2 SEO spam pages |
| 11 | r/SkincareAddiction under eye bags puffy holy grail | standard | 0 Reddit; Sephora Community x6, Bluemercury, L'Oréal Paris UK |
| 12 | reddit users say Preparation H under eyes works | extended | 0 Reddit; eBay x4, AOL x2, Fox News, Goodreads, AnandTech |
| 13-18 | Trustpilot Plexaderm reviews; MakeupAlley PTR FIRMx; RealSelf lower bleph; Mumsnet eye bags; PurseForum Plexaderm; Sephora Community FIRMx | extended | Refused: session budget 200/200 used |
| WebFetch | Sephora Community thread above | n/a | EGRESS_BLOCKED |

#### Evidence register: verbatim items (V) [all VERIFIED at title or slug level]

| ID | Exact text returned | Platform / type | URL | Notes |
|---|---|---|---|---|
| V01 | "bags under eyes and looking ill" | HealthUnlocked, No Smoking Day community (user post title) | https://healthunlocked.com/nosmokingday/posts/132916381/bags-under-eyes-and-looking-ill | Smoking-cessation community (from URL) |
| V02 | "is it a criticism to tell people they look tired" | Blind / teamblind.com (user post title) | https://www.teamblind.com/post/is-it-a-criticism-to-tell-people-they-look-tired-fa8brv14 | Returned title ended with post ID "fa8brv14" |
| V03 | "Are you young with bags under your eyes?" | AnandTech Forums (thread title) | https://forums.anandtech.com/threads/are-you-young-with-bags-under-your-eyes.2102865/post-30399615 | Content not read |
| V04 | "Dark circles under my eyes" | AnandTech Forums (thread title, page 3) | https://forums.anandtech.com/threads/dark-circles-under-my-eyes.1960821/page-3 | Returned for both Preparation H queries |
| V05 | best-product-for-under-eye-puffiness | Sephora Community, Skincare-Aware board (thread slug) | https://community.sephora.com/t5/Skincare-Aware/best-product-for-under-eye-puffiness/m-p/4261426 | User-started thread |
| V06 | Best-under-eye-treatment-for-bags | Sephora Community (thread slug) | https://community.sephora.com/t5/Skincare-Aware/Best-under-eye-treatment-for-bags/m-p/3758263 | User-started thread |
| V07 | Eye-cream | Sephora Community (thread slug; 4 posts returned) | https://community.sephora.com/t5/Skincare-Aware/Eye-cream/m-p/4997503/highlight/true ; https://community.sephora.com/t5/Skincare-Aware/Eye-cream/m-p/4997788/highlight/true ; https://community.sephora.com/t5/Skincare-Aware/Eye-cream/m-p/4998107/highlight/true ; https://community.sephora.com/t5/Skincare-Aware/Eye-cream/m-p/4998241/highlight/true | User-started thread |
| V08 | Fake-Plexaderm | eBay Community, Selling board (thread slug; 2 posts returned) | https://community.ebay.com/t5/Selling/Fake-Plexaderm/m-p/30703222 ; https://community.ebay.com/t5/Selling/Fake-Plexaderm/m-p/29067230 | Seller forum; content not read |
| V09 | "You Look Tired" | Substack (jaimeekosanke) | https://jaimeekosanke.substack.com | Publication homepage title |
| V10 | "My Under-Eye Refresh" | Substack (daniellebernstein) | https://daniellebernstein.substack.com/p/my-under-eye-refresh | Which treatment it describes is unknown |
| V11 | "how to not look tired" | Substack (bytaylor) | https://bytaylor.substack.com/p/how-to-not-look-tired | |
| V12 | "Or: Perhaps you should feel bad about your neck?" (slug: a-collection-of-unsolicited-comments) | Substack (funnygirls), comments page | https://funnygirls.substack.com/p/a-collection-of-unsolicited-comments/comments | Not confirmed to mention eyes; surfaced by the "look tired" query |
| V13 | "What is Preparation H?" | Substack (healthexposed) | https://healthexposed.substack.com/p/what-is-preparation-h | Informational |
| V14 | "Does Preparation H Actually Help Treat Puffy Eyes?" | AOL | https://www.aol.com/news/does-preparation-h-actually-help-120000983.html | Media |
| V15 | "People are applying ‘butt cream’ to replace this expensive beauty treatment" ... "but experts warn it’s dangerous" | AOL | https://www.aol.com/people-applying-butt-cream-replace-001455964.html | Headline split where the original has a dash |
| V16 | "“Gives Uncanny Valley”: Experts Explain Why Stars Are Looking Strangely “Tired” Despite Youthful Skin" | AOL | https://www.aol.com/articles/doctor-reveals-reason-behind-tired-123731078.html | Content not read |
| V17 | "7 safe off-label uses for over-the-counter meds" | Fox News | https://www.foxnews.com/health/7-safe-off-label-uses-for-over-the-counter-meds.amp | Media |
| V18 | "Ask Uncle John Anything: It’s in the Bag" | Goodreads author blog | https://www.goodreads.com/author_blog_posts/7041806-ask-uncle-john-anything-it-s-in-the-bag?tab=author | Low relevance |
| V19 | "1 PREPARATION H CANADIAN 2% LYCD BioDyne Eye Cream Crema Para Ojos 1 bottle 30ml" | eBay listing | https://ebay.com/itm/232061054367 | Seller language |
| V20 | "2 Prep-h Face Cream Special Formula of The Tube Canadian Preparation H" | eBay catalog page | https://www.ebay.com/p/1640438565 | Seller language |
| V21 | "Canadian Preparation H Creme with Bio-Dyne, New made in Canada" | eBay listing | https://ebay.com/itm/121018304610 | Seller language |
| V22 | "Preparation H Cream with Bio Dyne" | eBay catalog page | https://www.ebay.com/p/77873663 | Seller language |
| V23 | "Peter Thomas Roth Instant FIRMx Eye Tightening Treatment - 1oz" | eBay listing | https://www.ebay.com/itm/397371397331 | |
| V24 | "Peter Thomas Roth Instant FIRMx Temporary Eye Tightener OPEN TUBE AMAZON RETOURE-" | eBay.de listing | https://www.ebay.de/itm/276665884316 | "Retoure" = returned item |
| V25 | "Peter Thomas Roth Instant Firmx Temporäre Augenstraffung 1 Oz. mit Pinsel VERSIEGELT LESEN-" | eBay.de listing | https://www.ebay.de/itm/187777668081 | German: "temporary eye tightening, with brush, SEALED, READ" |
| V26 | "Peter Thomas Roth Instant Firmx Auge temporäre Augenstraffung 1 fl. Oz. schneller Versand-" | eBay.de listing | https://www.ebay.de/itm/224613576397 | "schneller Versand" = fast shipping |
| V27 | "Peter Thomas Roth Instant FIRMx Eye Temporary Eye Tightener 1 oz" | eBay listing | https://ebay.com/itm/176431456816 | |
| V28 | "Peter Thomas Roth Instant Firmx Eye Temporary Eye Tightener 1 Fl oz Fast Ship" | eBay listing | https://www.ebay.com/itm/224613576397 | |
| V29 | "Peter Thomas Roth Instant FirmX Eye Temporary Eye Tightener 30 ml" | eBay listing | https://www.ebay.com/itm/356613085314 | |
| V30 | "Instantly Ageless- Anti-Wrinkle Micro-Cream to Visibly Reduce Signs of Aging in Just Two Minutes (25 Vials)" | Walmart listing | https://www.walmart.com/ip/514958855 | |
| V31 | "Instantly Ageless 10 Fläschchen, Facelift, Faltenentferner in Sekunden-" | eBay.de listing | https://www.ebay.de/itm/264796216199 | German: "10 vials, facelift, wrinkle remover in seconds" |
| V32 | "Instantly Ageless Moisture Lift, 1.7 oz" | Walmart listing | https://www.walmart.com/ip/161333082 | |
| V33 | "Authentic Jeunesse Instantly Ageless Face Lift Vials" | Walmart listing | https://www.walmart.com/ip/972864957 | |
| V34 | "Plexaderm® Reviews 644" | Trustpilot, Ireland domain, page 4 | https://ie.trustpilot.com/review/www.plexaderm.com?page=4 | Review count at crawl time |
| V35 | "Plexaderm® Bewertungen 610" | Trustpilot, Switzerland domain | https://ch.trustpilot.com/review/www.plexaderm.com | Different crawl snapshot |
| V36 | "plexadermtrial.com Reviews" | Trustpilot, UK / Canada / New Zealand domains | https://uk.trustpilot.com/review/plexadermtrial.com ; https://ca.trustpilot.com/review/plexadermtrial.com ; https://nz.trustpilot.com/review/plexadermtrial.com | Separate profile for a "trial" domain |
| V37 | "Most seen reports" | ScamDoc | https://www.scamdoc.com/view/752558 | Returned for the Plexaderm scam query; page subject not confirmed |
| V38 | "Considering Plexaderm: Are The Ingredients Harmful?" | eco.suezuni.edu.eg | https://eco.suezuni.edu.eg/sahara-0251/plexaderm-ingredients-harmful.html | Likely spam on a hijacked domain; demand signal only |
| V39 | "A Comprehensive Review Of This Innovative Skincare Solution" | mail.hteknologi.com | https://mail.hteknologi.com/networth/a-comprehensive-review-of-this-innovative-skincare-solution.html | Likely spam; demand signal only |
| V40 | "Eye Creams For Under Eye Bags" | Bluemercury (retailer page) | https://bluemercury.com/pages/shop-eye-creams-for-under-eye-bags | Retailer language |
| V41 | best-creams-to-get-rid-of-baggy-eyes-and-dark-circles | L'Oréal Paris UK (article slug) | https://www.loreal-paris.co.uk/best-creams-to-get-rid-of-baggy-eyes-and-dark-circles | UK brand wording "baggy eyes" |

Untitled listing group G01 (returned for "instant eye tightener", titles not shown): https://www.walmart.com/ip/6006441831 ; https://www.walmart.com/ip/634728573 ; https://www.walmart.com/ip/743781591 ; https://www.walmart.com/ip/18170805596 ; https://www.walmart.com/ip/18438151493 ; https://www.walmart.com/ip/18864852739 ; https://www.walmart.com/ip/18884910212 ; https://www.walmart.com/ip/18426307408 ; https://www.walmart.com/ip/18435416190 ; https://www.ebay.de/itm/177154149613

#### Evidence register: paraphrases (P) [PARAPHRASE: search-tool summary, not user words]

| ID | Paraphrase (search tool's summary, restated without quotation marks) | Likely source set |
|---|---|---|
| P01 | Users recommended the Drunk Elephant eye serum, IT Cosmetics eye cream and The Ordinary caffeine serum for under-eye puffiness. | Sephora Community threads V05, V06, V07 (query 11) |
| P02 | One user found her morning puffiness was allergy-related and used allergy eye drops to reduce redness and puffiness. | Sephora Community threads (query 11) |
| P03 | For fragile under-eye skin: moisturize twice a day, a lighter moisturizer with SPF by day and a richer eye cream at night. | Sephora Community threads (query 11) |
| P04 | Preparation H reports are mixed: some say that after a few weeks they are still puffy but see a definite improvement; others claim their under-eye pouches are gone; others used it several times daily for several weeks with no improvement in their bags. | Query 12 set: eBay Prep H pages V19-V22, AnandTech V04, AOL V14/V15 |
| P05 | Preparation H restricts blood vessels, which can reduce redness; the tool said it contains 1 percent hydrocortisone, an anti-inflammatory that in theory might temporarily reduce puffiness; applied under the eyes it can reduce the puffy signs of too little sleep. | Query 12 set, most likely Fox News V17 and AOL V14 |
| P06 | On social media, women claim Preparation H is a miracle fix for puffy eyes that supposedly tightens skin and mimics the effect of under-eye filler; dermatologists warn against it. | Queries 4 and 12, most likely AOL V15 |
| P07 | Preparation H has ingredients that can cause injury if they get into the eye and extra irritation to sensitive eye-area skin; the maker explicitly cautions against using it for puffy eyes. | Query 4 set, most likely AOL V14 |
| P08 | The look is extremely temporary, a few hours at most, because it does not remove any fat; keeping the look would need regular application, which would result in serious skin conditions. | Query 4 set (Substack V13 or AOL) |
| P09 | Plexaderm has received numerous negative reviews about effectiveness and customer service, particularly concerning returns. | Query 10 set: Trustpilot V34/V36, ScamDoc V37, eBay Community V08, SEO pages V38/V39 |
| P10 | Some people were dissatisfied with Plexaderm's tendency to crack, peel or become crusty after application, especially when trying to use makeup over it; some felt it was not as effective as shown in advertisements; some experienced skin irritation, redness or burning. | Query 10 set |
| P11 | Counterfeit Plexaderm is a concern; the way to tell fake from real is to check the syringe for the lot number and spring coils; to play it safe, order from Plexaderm.com. | Query 10 set (likely eBay Community V08 or an SEO page) |
| P12 | Plexaderm has a TrustScore of 3.5 out of 5 on Trustpilot with mixed experiences; many consumers find it reduces the appearance of under-eye bags and wrinkles, some noting immediate and satisfying results. | Query 10 set, Trustpilot pages; score date unknown |
| P13 | The Walmart and eBay "Instant Eye Tightener" listings are temporary eye creams designed to reduce the appearance of under-eye bags, puffiness, dark circles and fine lines. | Group G01 (query 6) |

### Inferences
- [INFERENCE] The block is at the search-provider level (Reddit does not admit the tool's user agent), so raising the search budget will not by itself yield Reddit material through WebSearch.
- [INFERENCE] This researcher used at most 12 of the 200 session searches, so most of the budget was consumed elsewhere in the session. Any researcher launched after this point will also be unable to search until the user raises CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION, a setting only the user can change.
- [INFERENCE] Non-Reddit communities are visible to the search tool (Sephora Community, AnandTech Forums, HealthUnlocked, Blind, eBay Community, Trustpilot), so a clearly labelled substitute layer is feasible once the budget is restored.
- [INFERENCE] Title-level evidence is weak: it shows what people ask and how they phrase a problem, not what they concluded.

### Gaps
- All Reddit content for every theme in the brief. Section 11 has the consolidated "Could not verify" list and options to close the gap.

---

## 1. Which 10-15 subreddits are relevant, and their links?

### Takeaway
No subreddit could be verified (existence, size, activity, rules) because no reddit.com page is reachable. The list below combines the brief's suggestions with general knowledge. Links follow Reddit's standard URL pattern and are **unverified**.

### Cited Findings
- None. No query returned any reddit.com page (section 0).

### Inferences
[GENERAL KNOWLEDGE, UNVERIFIED: existence confidence is my own estimate]

| # | Subreddit | Expected URL (unverified) | Why relevant to TMP-02 | Exists? (confidence) |
|---|---|---|---|---|
| 1 | r/SkincareAddiction | https://www.reddit.com/r/SkincareAddiction/ | Largest general skincare community; eye cream, caffeine, Preparation H and "do eye creams work" debates | High |
| 2 | r/30PlusSkinCare | https://www.reddit.com/r/30PlusSkinCare/ | Audience first noticing bags, fine lines and crepey texture | High |
| 3 | r/40PlusSkincare | https://www.reddit.com/r/40PlusSkincare/ | Core buyer age for tighteners; crepey skin; filler vs surgery | High |
| 4 | r/AsianBeauty | https://www.reddit.com/r/AsianBeauty/ | Eye patches, K-beauty and J-beauty eye products | High |
| 5 | r/MakeupAddiction | https://www.reddit.com/r/MakeupAddiction/ | Concealer over bags, creasing, product under makeup | High |
| 6 | r/beauty | https://www.reddit.com/r/beauty/ | General beauty questions | High |
| 7 | r/Botox | https://www.reddit.com/r/Botox/ | Injectables crowd; tear trough filler questions | Medium-high |
| 8 | r/PlasticSurgery | https://www.reddit.com/r/PlasticSurgery/ | Lower blepharoplasty results; filler regret | High |
| 9 | r/CosmeticSurgery | https://www.reddit.com/r/CosmeticSurgery/ | Same topics as r/PlasticSurgery | Medium-high |
| 10 | r/tretinoin | https://www.reddit.com/r/tretinoin/ | Retinoids for crepey under-eye skin | High |
| 11 | r/Menopause | https://www.reddit.com/r/Menopause/ | Collagen loss, crepey skin, puffiness narratives | High |
| 12 | r/BeautyGuruChatter | https://www.reddit.com/r/BeautyGuruChatter/ | Critique of ads and influencer claims (relevant to Plexaderm-style ads) | High |
| 13 | r/AskWomenOver30 | https://www.reddit.com/r/AskWomenOver30/ | Ageing and "people say I look tired" threads | High |
| 14 | r/SkincareAddictionUK | https://www.reddit.com/r/SkincareAddictionUK/ | UK source market: UK retailers, prices, product names | Medium |
| 15 | r/blepharoplasty | https://www.reddit.com/r/blepharoplasty/ | Procedure-specific community (named in the brief) | Low-medium |
| opt. | r/antiMLM | https://www.reddit.com/r/antiMLM/ | Jeunesse (Instantly Ageless) is sold through MLM; legitimacy debates | High existence, medium relevance |
| opt. | r/SkincareAddicts | https://www.reddit.com/r/SkincareAddicts/ | Named in the brief | Low (unsure it exists under this name) |
| opt. | r/Wellthatsucks | https://www.reddit.com/r/Wellthatsucks/ | Viral one-off threads only | High existence, low relevance |

### Gaps
- Subscriber counts, activity levels, which subreddits actually host tightener threads, and each subreddit's self-promotion rules (important if the seller plans to engage) could not be checked.

---

## 2. Desires, and what satisfying them would mean emotionally (target in brief: 30+ quotes)

### Takeaway
0 Reddit quotes. Title-level evidence from other communities points to a social rather than cosmetic core desire: not to look or be told you look "tired" or "ill", including among younger people.

### Cited Findings (verbatim, non-Reddit, title level)
1. "bags under eyes and looking ill" | HealthUnlocked, No Smoking Day community | https://healthunlocked.com/nosmokingday/posts/132916381/bags-under-eyes-and-looking-ill [VERIFIED]
2. "is it a criticism to tell people they look tired" | Blind (teamblind.com) | https://www.teamblind.com/post/is-it-a-criticism-to-tell-people-they-look-tired-fa8brv14 [VERIFIED]
3. "Are you young with bags under your eyes?" | AnandTech Forums | https://forums.anandtech.com/threads/are-you-young-with-bags-under-your-eyes.2102865/post-30399615 [VERIFIED]
4. "Dark circles under my eyes" | AnandTech Forums | https://forums.anandtech.com/threads/dark-circles-under-my-eyes.1960821/page-3 [VERIFIED]
5. "You Look Tired" | Substack (jaimeekosanke) | https://jaimeekosanke.substack.com [VERIFIED]
6. "how to not look tired" | Substack (bytaylor) | https://bytaylor.substack.com/p/how-to-not-look-tired [VERIFIED]
7. "My Under-Eye Refresh" | Substack (daniellebernstein) | https://daniellebernstein.substack.com/p/my-under-eye-refresh [VERIFIED]
8. "Or: Perhaps you should feel bad about your neck?" (slug: a-collection-of-unsolicited-comments) | Substack (funnygirls) | https://funnygirls.substack.com/p/a-collection-of-unsolicited-comments/comments [VERIFIED; link to eyes not confirmed]
9. "“Gives Uncanny Valley”: Experts Explain Why Stars Are Looking Strangely “Tired” Despite Youthful Skin" | AOL | https://www.aol.com/articles/doctor-reveals-reason-behind-tired-123731078.html [VERIFIED]
10. best-product-for-under-eye-puffiness (thread slug) | Sephora Community | https://community.sephora.com/t5/Skincare-Aware/best-product-for-under-eye-puffiness/m-p/4261426 [VERIFIED]
11. Best-under-eye-treatment-for-bags (thread slug) | Sephora Community | https://community.sephora.com/t5/Skincare-Aware/Best-under-eye-treatment-for-bags/m-p/3758263 [VERIFIED]

### Inferences
- [INFERENCE] "Tired" is the dominant emotional word across unrelated communities (items 2, 5, 6, 9). The desire it implies is to look as rested as you feel and to stop receiving remarks, which is closer to TMP-02's "temporary" promise (look rested today) than to "anti-aging".
- [INFERENCE] "looking ill" (item 1) raises the stakes beyond vanity: being read as unwell.
- [INFERENCE] Item 3 suggests bags are also a concern for younger people, who may frame them as genetic or premature rather than age-related.
- [INFERENCE] Item 9 shows that "tired" is also used about over-treated faces, so the desire is "rested, but not done".

### Gaps
- 30+ desire quotes from Reddit: none found (blocked).
- [GENERAL KNOWLEDGE, unverified hypotheses for a Reddit pass; do not quote or present as findings] Desire themes commonly voiced in skincare and procedure communities: stop being asked if tired, sick or upset; look good in photos, video calls and overhead lighting; look the age you feel; wear concealer without it settling into lines; avoid needles and surgery; a quick fix before an event (wedding, interview, reunion).

---

## 3. Failed attempts, disappointments, objections and hesitations (target in brief: 20+ failed-attempt quotes)

### Takeaway
0 Reddit quotes. Paraphrase-level evidence says film-forming tighteners (Plexaderm) disappoint when they crack, peel or turn crusty, especially under makeup; when results fall short of the ads; and when they irritate. Return and customer-service friction compounds it. Preparation H results are inconsistent and come with safety warnings.

### Cited Findings
1. [PARAPHRASE, P10] Some people were dissatisfied with Plexaderm's tendency to crack, peel or become crusty after application, especially when using makeup over it; some felt it was not as effective as shown in advertisements; some had irritation, redness or burning. Source set: https://ie.trustpilot.com/review/www.plexaderm.com?page=4 ; https://uk.trustpilot.com/review/plexadermtrial.com ; https://community.ebay.com/t5/Selling/Fake-Plexaderm/m-p/30703222 ; https://www.scamdoc.com/view/752558 ; https://eco.suezuni.edu.eg/sahara-0251/plexaderm-ingredients-harmful.html ; https://mail.hteknologi.com/networth/a-comprehensive-review-of-this-innovative-skincare-solution.html
2. [PARAPHRASE, P09] Plexaderm has received numerous negative reviews about effectiveness and customer service, particularly concerning returns. Same source set as item 1.
3. [PARAPHRASE, P04] Some Preparation H users applied it several times daily for several weeks with no improvement in their bags. Source set: https://www.ebay.com/p/77873663 ; https://www.ebay.com/p/1640438565 ; https://forums.anandtech.com/threads/dark-circles-under-my-eyes.1960821/page-3 ; https://www.aol.com/news/does-preparation-h-actually-help-120000983.html
4. [PARAPHRASE, P07] Preparation H ingredients can cause injury if they get into the eye and extra irritation to sensitive eye-area skin; the maker cautions against using it for puffy eyes. Likely https://www.aol.com/news/does-preparation-h-actually-help-120000983.html
5. [PARAPHRASE, P08] The Preparation H look lasts a few hours at most because it removes no fat; regular use to maintain it would cause serious skin conditions. Likely https://healthexposed.substack.com/p/what-is-preparation-h or AOL.
6. "Peter Thomas Roth Instant FIRMx Temporary Eye Tightener OPEN TUBE AMAZON RETOURE-" | eBay.de | https://www.ebay.de/itm/276665884316 [VERIFIED; a single returned, opened tube resold; weak signal]
7. "People are applying ‘butt cream’ to replace this expensive beauty treatment" ... "but experts warn it’s dangerous" | AOL | https://www.aol.com/people-applying-butt-cream-replace-001455964.html [VERIFIED; a safety objection to the DIY route]

### Inferences
- [INFERENCE] The category's failure modes visible here: (1) the film shows (cracking, peeling, crusting), worst under makeup; (2) the effect is shorter or weaker than promised; (3) ads overpromise; (4) sensitive-skin reactions; (5) return friction that turns disappointment into "scam" talk (section 8).
- [INFERENCE] TMP-02's "lightly tinted, makeup-compatible" claim targets failure mode (1) directly. It will only be believed with proof: a demo under concealer, while smiling, in daylight.
- [INFERENCE] Preparation H objections are about safety near the eye, an opening for a product made for the eye area.

### Gaps
- 20+ failed-attempt quotes from Reddit: none found (blocked).
- [GENERAL KNOWLEDGE, unverified hypotheses; do not quote] Failure stories commonly reported about tighteners and alternatives: white or grey cast, especially on deeper skin tones; having to keep the face still while it dries; fine in photos but visible in person; cracking when smiling; pilling over moisturizer or SPF; stinging; eye creams "doing nothing" for fat-pad bags; filler making bags look worse or puffier (migration, bluish tint known as the Tyndall effect); Preparation H stinging the eyes.

---

## 4. Success stories and holy-grail descriptions

### Takeaway
Very thin and paraphrase-level only: some Plexaderm users report immediate, satisfying results; some Preparation H users report a definite improvement or that their pouches are gone (paraphrase); Sephora Community users name specific products; one user fixed allergy-driven morning puffiness with allergy eye drops.

### Cited Findings
1. [PARAPHRASE, P12] Plexaderm: TrustScore 3.5 out of 5 on Trustpilot with mixed experiences; many consumers find it reduces the appearance of under-eye bags and wrinkles, some noting immediate and satisfying results. Source set: https://ie.trustpilot.com/review/www.plexaderm.com?page=4 ; https://ch.trustpilot.com/review/www.plexaderm.com (score date unknown)
2. [PARAPHRASE, P04] Preparation H: some still puffy after a few weeks but with a definite improvement; others claim their under-eye pouches are gone. Source set: https://www.ebay.com/p/77873663 ; https://www.ebay.com/p/1640438565 ; https://forums.anandtech.com/threads/dark-circles-under-my-eyes.1960821/page-3
3. [PARAPHRASE, P01] Drunk Elephant eye serum, IT Cosmetics eye cream and The Ordinary caffeine serum recommended for under-eye puffiness. Source set: https://community.sephora.com/t5/Skincare-Aware/best-product-for-under-eye-puffiness/m-p/4261426 ; https://community.sephora.com/t5/Skincare-Aware/Best-under-eye-treatment-for-bags/m-p/3758263 ; https://community.sephora.com/t5/Skincare-Aware/Eye-cream/m-p/4997503/highlight/true
4. [PARAPHRASE, P02] Morning puffiness turned out to be allergy-related; allergy eye drops reduced redness and puffiness. Same Sephora Community set.
5. [PARAPHRASE, P03] Routine advice: moisturize twice daily, lighter SPF moisturizer by day, richer eye cream at night. Same Sephora Community set.

### Inferences
- [INFERENCE] Positive language clusters on immediacy (immediate, satisfying results, per paraphrase P12), which is TMP-02's core proof point.
- [INFERENCE] Success depends on matching the fix to the cause: fluid or allergy puffiness responds to drops and caffeine-type products; structural bags need a camouflage product (tightener) or a procedure.

### Gaps
- Holy-grail descriptions on Reddit: none found (blocked).
- [GENERAL KNOWLEDGE, unverified; do not quote] Success language in tightener reviews usually centers on "instant", "for photos or events", "less is more / thin layer" and "apply before makeup and wait". Happy lower-blepharoplasty patients often say they wish they had done it sooner.

---

## 5. DIY approaches (Preparation H, cold spoons, caffeine, tape, concealer tricks)

### Takeaway
Preparation H is the most visible DIY hack in the results. A gray market sells Canadian Preparation H "Bio-Dyne" on eBay labelled as eye or face cream. Caffeine serum and allergy drops appear in Sephora Community. Cold spoons, tape and concealer tricks could not be researched.

### Cited Findings
1. "Does Preparation H Actually Help Treat Puffy Eyes?" | AOL | https://www.aol.com/news/does-preparation-h-actually-help-120000983.html [VERIFIED]
2. "People are applying ‘butt cream’ to replace this expensive beauty treatment" ... "but experts warn it’s dangerous" | AOL | https://www.aol.com/people-applying-butt-cream-replace-001455964.html [VERIFIED]
3. "7 safe off-label uses for over-the-counter meds" | Fox News | https://www.foxnews.com/health/7-safe-off-label-uses-for-over-the-counter-meds.amp [VERIFIED]
4. "What is Preparation H?" | Substack (healthexposed) | https://healthexposed.substack.com/p/what-is-preparation-h [VERIFIED]
5. "1 PREPARATION H CANADIAN 2% LYCD BioDyne Eye Cream Crema Para Ojos 1 bottle 30ml" | eBay | https://ebay.com/itm/232061054367 [VERIFIED]
6. "2 Prep-h Face Cream Special Formula of The Tube Canadian Preparation H" | eBay | https://www.ebay.com/p/1640438565 [VERIFIED]
7. "Canadian Preparation H Creme with Bio-Dyne, New made in Canada" | eBay | https://ebay.com/itm/121018304610 [VERIFIED]
8. "Preparation H Cream with Bio Dyne" | eBay | https://www.ebay.com/p/77873663 [VERIFIED]
9. [PARAPHRASE, P06] On social media, women claim Preparation H is a miracle fix for puffy eyes that supposedly tightens skin and mimics under-eye filler; dermatologists warn against it. Likely https://www.aol.com/people-applying-butt-cream-replace-001455964.html
10. [PARAPHRASE, P05] Preparation H constricts blood vessels (less redness); the tool said it contains 1 percent hydrocortisone, which might temporarily reduce puffiness; it can reduce the puffy signs of too little sleep. Likely https://www.foxnews.com/health/7-safe-off-label-uses-for-over-the-counter-meds.amp and https://www.aol.com/news/does-preparation-h-actually-help-120000983.html
11. [PARAPHRASE, P04, P07, P08] Mixed results; safety warnings; effect lasts a few hours at most (see section 3).
12. [PARAPHRASE, P01] The Ordinary caffeine serum named for puffiness. Sephora Community set (section 4).
13. [PARAPHRASE, P02] Allergy eye drops for allergy-related morning puffiness. Sephora Community set.
14. "Dark circles under my eyes" | AnandTech Forums, page 3 | https://forums.anandtech.com/threads/dark-circles-under-my-eyes.1960821/page-3 [VERIFIED title; surfaced by both Preparation H queries, so the page probably discusses it (INFERENCE, not read)]

### Inferences
- [INFERENCE] The Preparation H hack is explicitly framed as a cheap replacement for an "expensive beauty treatment" (filler, per P06). The DIY segment is price-motivated and already accepts a temporary effect, which is the same job TMP-02 does, with a "made for the eye area" safety story.
- [INFERENCE] eBay sellers labelling Canadian Preparation H as "Eye Cream Crema Para Ojos" (item 5) show that people will pay a premium, and import, for the formula they believe is the genuine tightening one.
- [GENERAL KNOWLEDGE, verify before use] Current US Preparation H formulas no longer contain live yeast cell derivative (LYCD, "Bio-Dyne"); Canadian formulas kept it longer, which is why sellers stress "Canadian". Not all Preparation H products contain hydrocortisone; the classic vasoconstrictor ingredient is phenylephrine.

### Gaps
- Cold spoons, frozen tea bags, ice rollers, facial tape, sleeping elevated, salt and alcohol reduction, concealer techniques: not searched (budget exhausted).
- [GENERAL KNOWLEDGE, unverified hypotheses; do not quote] Commonly discussed DIY: cold spoons, ice rollers and frozen tea bags (help fluid puffiness briefly); caffeine serums; hydrogel eye patches; antihistamines for allergy puffiness; less salt and alcohol; sleeping with the head raised; concealer tips such as brightening the shadow under the bag rather than covering the bag itself, thin layers and light setting to avoid creasing.

---

## 6. Comparisons between solutions (tightener vs filler vs blepharoplasty vs eye cream) and descriptions of an ideal solution

### Takeaway
Only indirect evidence: Preparation H is framed as a stand-in for under-eye filler, and a media headline links filler-heavy faces to looking strangely "tired". No verified tightener vs filler vs blepharoplasty vs eye cream comparisons were found.

### Cited Findings
1. "People are applying ‘butt cream’ to replace this expensive beauty treatment" | AOL | https://www.aol.com/people-applying-butt-cream-replace-001455964.html [VERIFIED], plus [PARAPHRASE, P06]: the tool's summary said Preparation H supposedly mimics the effect of under-eye filler (paraphrase, not a quote).
2. "“Gives Uncanny Valley”: Experts Explain Why Stars Are Looking Strangely “Tired” Despite Youthful Skin" | AOL | https://www.aol.com/articles/doctor-reveals-reason-behind-tired-123731078.html [VERIFIED; content not read]
3. "My Under-Eye Refresh" | Substack | https://daniellebernstein.substack.com/p/my-under-eye-refresh [VERIFIED; treatment unknown]
4. [PARAPHRASE, P13] "Instant Eye Tightener" listings are temporary eye creams for the appearance of bags, puffiness, dark circles and fine lines. Group G01 (section 0).
5. "Eye Creams For Under Eye Bags" | Bluemercury | https://bluemercury.com/pages/shop-eye-creams-for-under-eye-bags [VERIFIED; retailers still sell eye creams against "bags"]
6. best-creams-to-get-rid-of-baggy-eyes-and-dark-circles | L'Oréal Paris UK | https://www.loreal-paris.co.uk/best-creams-to-get-rid-of-baggy-eyes-and-dark-circles [VERIFIED slug]

### Inferences
- [INFERENCE] The media frame of over-filled faces plus the "expensive treatment" frame can position a non-invasive, temporary tightener as the low-risk option for people who fear needles or looking "done".
- [INFERENCE] Brands and retailers (items 5, 6) promise creams that "get rid of" bags, while the DIY and tightener discussion accepts temporary camouflage. That gap between promise and expectation is where an honest tightener message (temporary, visible in minutes) can stand out.

### Gaps
- Reddit comparisons: none found.
- [GENERAL KNOWLEDGE, unverified hypotheses; do not quote] Heuristics common in procedure communities: bags from herniated fat are not fixed by creams or filler; lower blepharoplasty (often transconjunctival, sometimes with fat repositioning) is seen as the definitive fix; tear-trough filler suits hollows rather than bags and can cause puffiness, migration or a bluish tint; festoons and malar bags are hard to treat; tighteners are seen as "makeup for bags". Likely ideal-solution description: instant, invisible under makeup, lasts all day, doesn't crack with expressions, no needles or downtime, works on all skin tones, affordable.

---

## 7. Terminology: novice vs experienced

### Takeaway
Verified vocabulary is consumer and seller level only. Consumers name symptoms (bags, puffy, dark circles, tired, ill); sellers name mechanisms and speed (tightener, lift, facelift, in seconds or minutes). No expert terms (fat pads, tear trough, malar bags, festoons) were verified in any source.

### Cited Findings
Consumer phrasing [all VERIFIED titles or slugs]:
1. "bags under eyes" (V01) | https://healthunlocked.com/nosmokingday/posts/132916381/bags-under-eyes-and-looking-ill
2. "look tired" (V02) | https://www.teamblind.com/post/is-it-a-criticism-to-tell-people-they-look-tired-fa8brv14
3. "bags under your eyes" (V03) | https://forums.anandtech.com/threads/are-you-young-with-bags-under-your-eyes.2102865/post-30399615
4. "Dark circles under my eyes" (V04) | https://forums.anandtech.com/threads/dark-circles-under-my-eyes.1960821/page-3
5. "under-eye-puffiness" (V05 slug) | https://community.sephora.com/t5/Skincare-Aware/best-product-for-under-eye-puffiness/m-p/4261426
6. "under-eye-treatment-for-bags" (V06 slug) | https://community.sephora.com/t5/Skincare-Aware/Best-under-eye-treatment-for-bags/m-p/3758263
7. "Under-Eye Refresh" (V10) | https://daniellebernstein.substack.com/p/my-under-eye-refresh
8. "Puffy Eyes" (V14) | https://www.aol.com/news/does-preparation-h-actually-help-120000983.html
9. "baggy-eyes" (V41 slug, UK brand) | https://www.loreal-paris.co.uk/best-creams-to-get-rid-of-baggy-eyes-and-dark-circles

Seller and category phrasing [all VERIFIED titles]:
10. "Temporary Eye Tightener" (V24, V27, V28, V29) | e.g. https://ebay.com/itm/176431456816
11. "Eye Tightening Treatment" (V23) | https://www.ebay.com/itm/397371397331
12. "temporäre Augenstraffung" (V25, V26; German for temporary eye tightening) | https://www.ebay.de/itm/187777668081
13. "Face Lift Vials" (V33) | https://www.walmart.com/ip/972864957
14. "Facelift, Faltenentferner in Sekunden" (V31; German: facelift, wrinkle remover in seconds) | https://www.ebay.de/itm/264796216199
15. "Anti-Wrinkle Micro-Cream to Visibly Reduce Signs of Aging in Just Two Minutes" (V30) | https://www.walmart.com/ip/514958855
16. "Moisture Lift" (V32) | https://www.walmart.com/ip/161333082
17. "Eye Cream Crema Para Ojos" (V19, for Canadian Preparation H) | https://ebay.com/itm/232061054367

### Inferences
- [INFERENCE] Searchers use symptom words; marketing uses speed and lift words. For Israel, copy and keywords should probably mirror the symptom words people use in Hebrew (the Hebrew equivalents need separate validation).

### Gaps
- [GENERAL KNOWLEDGE glossary, unverified on Reddit; use only as a framework]

| Novice wording | Experienced wording | What it usually means | What communities usually say fixes it |
|---|---|---|---|
| bags, puffy eyes | fat pads, herniated or prolapsed orbital fat | Permanent bulge from fat pushing forward; genetic or age-related | Surgery (lower bleph); camouflage with tightener or makeup |
| morning puffiness | fluid retention, periorbital edema, allergy puffiness | Swelling that comes and goes (salt, alcohol, sleep, allergies) | Cold, caffeine, antihistamines, lifestyle |
| dark circles | tear trough, tear trough deformity, lid-cheek junction, hollows | Shadow from volume loss, or pigment, or visible vessels | Filler (hollows), concealer, pigment treatments |
| bags on the cheekbone | malar bags, malar mounds, malar edema | Swelling or bulge on the upper cheek | Hard to treat; filler can worsen |
| hanging pouches below the bags | festoons | Folds of loose skin and muscle on the cheek | Hard to treat; specialist surgery |
| crinkly, wrinkly under-eye skin | crepey skin, laxity, skin quality | Thin, lax skin with fine texture | Retinoids, lasers, microneedling, skin boosters; tighteners as camouflage |
| eye surgery | lower bleph, transconjunctival blepharoplasty, fat repositioning, skin pinch | Surgical removal or repositioning of fat, sometimes skin | n/a |
| eye filler | tear trough filler, HA filler, Tyndall effect, migration, dissolving | Filler-related terms and complications | n/a |
| instant fix | eye tightener, film former, silicate-based tightener | Temporary film that tightens as it dries | n/a |

---

## 8. Price and value, and whether Plexaderm-type products are a scam

### Takeaway
No prices were verified. Legitimacy concerns are visible at title level: an eBay seller thread with the slug "Fake-Plexaderm", a separate Trustpilot profile for "plexadermtrial.com", a ScamDoc page surfaced for the scam query, and resellers stressing "Authentic" or "VERSIEGELT" (German for sealed). Paraphrased Trustpilot sentiment is mixed (3.5 of 5).

### Cited Findings
1. Fake-Plexaderm (thread slug) | eBay Community, Selling board | https://community.ebay.com/t5/Selling/Fake-Plexaderm/m-p/30703222 ; https://community.ebay.com/t5/Selling/Fake-Plexaderm/m-p/29067230 [VERIFIED]
2. [PARAPHRASE, P11] Counterfeit Plexaderm exists; tell fake from real by the lot number and spring coils on the syringe; buy from Plexaderm.com to be safe. Query 10 source set (section 3, item 1).
3. "plexadermtrial.com Reviews" | Trustpilot UK, CA, NZ | https://uk.trustpilot.com/review/plexadermtrial.com ; https://ca.trustpilot.com/review/plexadermtrial.com ; https://nz.trustpilot.com/review/plexadermtrial.com [VERIFIED]
4. "Plexaderm® Reviews 644" | Trustpilot IE | https://ie.trustpilot.com/review/www.plexaderm.com?page=4 [VERIFIED]; "Plexaderm® Bewertungen 610" | Trustpilot CH | https://ch.trustpilot.com/review/www.plexaderm.com [VERIFIED]. The two counts reflect different crawl dates.
5. [PARAPHRASE, P12] TrustScore 3.5 out of 5, mixed; many say it reduces the appearance of bags and wrinkles. Trustpilot set; date unknown.
6. [PARAPHRASE, P09] Numerous negative reviews about effectiveness and customer service, particularly returns.
7. "Most seen reports" | ScamDoc | https://www.scamdoc.com/view/752558 [VERIFIED; surfaced for "plexaderm reddit review scam"; page subject not confirmed]
8. "Authentic Jeunesse Instantly Ageless Face Lift Vials" | Walmart | https://www.walmart.com/ip/972864957 [VERIFIED]
9. "Peter Thomas Roth Instant Firmx Temporäre Augenstraffung 1 Oz. mit Pinsel VERSIEGELT LESEN-" (VERSIEGELT = sealed) | eBay.de | https://www.ebay.de/itm/187777668081 [VERIFIED]
10. "Considering Plexaderm: Are The Ingredients Harmful?" | https://eco.suezuni.edu.eg/sahara-0251/plexaderm-ingredients-harmful.html [VERIFIED title; likely spam site]
11. "A Comprehensive Review Of This Innovative Skincare Solution" | https://mail.hteknologi.com/networth/a-comprehensive-review-of-this-innovative-skincare-solution.html [VERIFIED title; likely spam site]
12. Pack-size signals, no prices: "(25 Vials)" | https://www.walmart.com/ip/514958855 ; "10 Fläschchen" (10 vials) | https://www.ebay.de/itm/264796216199 ; PTR FIRMx "1oz" / "1 fl. Oz." / "30 ml" | https://www.ebay.com/itm/397371397331 ; https://www.ebay.de/itm/224613576397 ; https://www.ebay.com/itm/356613085314 [VERIFIED]

### Inferences
- [INFERENCE] "Scam" perception in this category has at least three sources: (a) ads seen as exaggerated (P10); (b) trial-style offers (a separate "trial" domain has its own review profile, V36; how that offer works is not verified); (c) counterfeits on marketplaces (V08, P11, V33 "Authentic", V25 "VERSIEGELT"). An Israeli seller can address each: honest demos, no hidden subscription, proof of an authorized channel (lot numbers, sealed packaging).
- [INFERENCE] SEO spam pages about Plexaderm safety and "review" suggest strong search demand for "is it safe / is it legit".
- [INFERENCE] PTR FIRMx resale on eBay.com and eBay.de, including opened returns, shows an active secondary market for the leading competitor.

### Gaps
- Reddit price and value debates (for example whether a few hours of effect justify the price, cost per use, comparison with filler or surgery costs): not found.
- Competitor prices (Plexaderm, PTR FIRMx, Instantly Ageless, Sudden Change): none returned in this session; other researchers' notes may cover them.
- Reddit's verdict on "is Plexaderm a scam": not found.

---

## 9. Questions people ask before purchasing

### Takeaway
Only title-level questions were captured. They cluster around efficacy ("Actually Help", V14), the best option (V05, V06), safety ("Are The Ingredients Harmful?", V38), authenticity ("Fake-Plexaderm", V08) and social meaning ("is it a criticism", V02).

### Cited Findings
1. "Does Preparation H Actually Help Treat Puffy Eyes?" | AOL | https://www.aol.com/news/does-preparation-h-actually-help-120000983.html [VERIFIED]
2. best-product-for-under-eye-puffiness | Sephora Community | https://community.sephora.com/t5/Skincare-Aware/best-product-for-under-eye-puffiness/m-p/4261426 [VERIFIED slug]
3. Best-under-eye-treatment-for-bags | Sephora Community | https://community.sephora.com/t5/Skincare-Aware/Best-under-eye-treatment-for-bags/m-p/3758263 [VERIFIED slug]
4. "Are you young with bags under your eyes?" | AnandTech Forums | https://forums.anandtech.com/threads/are-you-young-with-bags-under-your-eyes.2102865/post-30399615 [VERIFIED]
5. "Considering Plexaderm: Are The Ingredients Harmful?" | spam-like site | https://eco.suezuni.edu.eg/sahara-0251/plexaderm-ingredients-harmful.html [VERIFIED title; demand signal only]
6. Fake-Plexaderm | eBay Community | https://community.ebay.com/t5/Selling/Fake-Plexaderm/m-p/30703222 [VERIFIED slug]
7. "is it a criticism to tell people they look tired" | Blind | https://www.teamblind.com/post/is-it-a-criticism-to-tell-people-they-look-tired-fa8brv14 [VERIFIED]

### Inferences
- [INFERENCE] A TMP-02 FAQ for Israel should answer, up front: does it work on my type of bags; how long it lasts; is it safe near the eye; is it the genuine product; can I wear makeup over it.

### Gaps
- [GENERAL KNOWLEDGE, unverified hypotheses; do not quote] Typical pre-purchase questions in tightener threads: how long it lasts; can makeup go over it; does it work on fat-pad bags or only puffiness; does it leave a white cast on darker skin; does it sting; can it be used with retinol; is it safe for contact-lens wearers or sensitive eyes; Plexaderm vs PTR vs drugstore options; can a subscription be cancelled.

---

## 10. Recurring patterns in success and failure stories, emotional triggers, and how people describe their decision process

### Takeaway
Twelve patterns can be drawn at inference level from the thin non-Reddit evidence, plus twelve general-knowledge hypotheses that a real Reddit pass should test. None is validated against Reddit.

### Cited Findings (evidence behind each pattern; IDs refer to the registers in section 0)
- Immediacy praised: P12 (Trustpilot set, https://ie.trustpilot.com/review/www.plexaderm.com?page=4)
- Short duration and no fat removal: P08 (https://healthexposed.substack.com/p/what-is-preparation-h or AOL)
- Makeup interaction failure: P10 (query 10 set)
- Ads vs reality: P10
- Return and customer-service friction: P09
- Counterfeits: V08 (https://community.ebay.com/t5/Selling/Fake-Plexaderm/m-p/30703222), P11, V33 (https://www.walmart.com/ip/972864957), V25 (https://www.ebay.de/itm/187777668081)
- Irritation and safety: P10, P07 (https://www.aol.com/news/does-preparation-h-actually-help-120000983.html)
- Cost-driven DIY substitution: V15 (https://www.aol.com/people-applying-butt-cream-replace-001455964.html), P06
- Mixed DIY outcomes: P04
- Cause matching: P02 (Sephora Community set)
- Social trigger "tired" or "ill": V01, V02, V09, V11 (URLs in section 2)
- Young sufferers: V03 (https://forums.anandtech.com/threads/are-you-young-with-bags-under-your-eyes.2102865/post-30399615)
- Filler skepticism in media: V16 (https://www.aol.com/articles/doctor-reveals-reason-behind-tired-123731078.html)

### Inferences
**Recurring patterns [INFERENCE from the evidence above; not Reddit-validated]**
1. Instant visible effect is the hook; duration is the catch (P12 vs P08).
2. Makeup interaction decides success or failure for film-formers (P10).
3. The gap between ads and reality drives disappointment (P10).
4. Return and customer-service friction turns disappointment into "scam" talk (P09, V36, V37).
5. Authenticity anxiety on marketplaces: fakes, "Authentic", "VERSIEGELT" (V08, P11, V33, V25).
6. Sensitive-skin reactions near the eye are a recurring objection, for tighteners and DIY alike (P10, P07).
7. DIY hacks are explicitly cost-driven substitutes for procedures (V15, P06).
8. The same hack works for some and not others, so outcomes are framed as personal luck (P04).
9. Cause matters: allergy or fluid puffiness responds to drops and caffeine; structural bags do not (P02, plus general knowledge for the structural part).
10. The primary emotional trigger is social: being seen or told you look "tired" or "ill" (V01, V02, V09, V11).
11. It is not only an ageing issue: younger people seek answers too (V03).
12. Media narratives about over-filled faces feed skepticism of injectables (V16).

**Emotional triggers [INFERENCE]**
- Positive: immediacy (immediate, satisfying results: paraphrase P12); visible improvement after persistence (a definite improvement: paraphrase P04).
- Negative: remarks about looking tired or ill (V01, V02); feeling misled by ads (P10); burning or redness (P10); discovering fakes (V08); return battles (P09); safety scares about hacks (V15, P07).

**Decision process as it appears in the evidence [INFERENCE, assembled from titles; not validated]**
1. Notice the problem, or someone comments on it (V01, V02).
2. Ask a community for "the best product/treatment" (V05, V06).
3. Try cheap or DIY fixes: Preparation H, caffeine, allergy drops (V14, V15, P01, P02).
4. Move to a branded instant tightener (Plexaderm, PTR FIRMx, Instantly Ageless; V23-V33).
5. Check legitimacy before or after buying: Trustpilot, ScamDoc, official site, lot numbers (V34-V37, P11).
6. If temporary fixes disappoint, consider procedures (filler or surgery), where the media "tired" and "uncanny valley" narrative can create hesitation (V16).

**Implications for TMP-02 in Israel [INFERENCE]**
- Lead with "look rested" (the social trigger) rather than generic anti-aging.
- Pre-empt the top failure modes with proof: under concealer, while smiling, in daylight; state honestly how long it lasts.
- Make authenticity visible: authorized seller, sealed packaging, lot numbers.
- Avoid trial or auto-subscription mechanics, which feed scam perception.
- Position against DIY as "made for the eye area" (Preparation H warnings, V15/P07), and against filler or surgery as "no needles, no downtime, no regret".

### Gaps
**General-knowledge hypotheses to test in a real Reddit pass [GENERAL KNOWLEDGE, unverified; do not present as findings]**
- H1. Users often say no cream removes fat-pad bags and that "only surgery fixes bags".
- H2. Tighteners are judged good for photos and events but visible (white cast, cracking) up close or in daylight.
- H3. Technique decides success: thin layer, keep the face still while it dries, apply before makeup, avoid heavy moisturizer underneath.
- H4. White or grey residue complaints are more frequent from people with deeper skin tones.
- H5. Plexaderm-style before-and-after ads are widely suspected of being staged or edited.
- H6. Tear-trough filler regret stories (puffiness, migration, bluish tint, dissolving) are common in procedure subreddits.
- H7. Lower blepharoplasty threads mix "best decision" stories with fear of complications (hollowing, lid changes).
- H8. Genetic bags from the teens or twenties, and repeated "are you tired?" remarks, are recurring emotional posts.
- H9. Cold therapies are seen as helping fluid puffiness only, and briefly.
- H10. Preparation H is debated: short-term effect for some, stinging and irritation warnings for others.
- H11. Concealer advice focuses on brightening the shadow under the bag, not the bag itself, and on thin layers.
- H12. Allergies, salt, alcohol and sleep position are named as root causes of morning puffiness.

---

## 11. What could not be verified, and how to close the gap

### Takeaway
STEP 6 cannot be completed in this environment. Closing it needs a user decision: raise the search budget (helps only for non-Reddit sources) and provide a Reddit access channel the user controls, or accept a clearly labelled non-Reddit substitute.

### Cited Findings
- No new findings; see section 0 for the tool errors that define these limits.

### Inferences
**Options (for the user to decide; I attempted none of them)**
- A. Raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION. This restores searching for non-Reddit communities but does not unlock Reddit (the 400 block is separate from the budget).
- B. Reddit through a channel the user controls: the user exports or pastes threads (URL plus comment text) into the project folder and a researcher codes them by theme; or, if the user enables a browser tool on their own machine (Claude in Chrome or the desktop app's built-in browser), a researcher could read public threads there with the user's consent.
- C. A substitute layer labelled as non-Reddit: Sephora Community, MakeupAlley, RealSelf (procedure reviews with "worth it" ratings), Mumsnet (UK), PurseForum, Trustpilot, Ulta and Walmart reviews, AnandTech and HealthUnlocked. Sephora Community, Trustpilot, AnandTech, HealthUnlocked, Blind and eBay Community already appear in the index; MakeupAlley, RealSelf, Mumsnet and PurseForum were untested because the budget ran out.

**Ready-to-run query plan (once access or budget is restored)**
- Reddit (needs option B): plexaderm; plexaderm scam; plexaderm ad; "instant eye tightener"; "peter thomas roth" firmx; "firmx" white residue; "instantly ageless"; "sudden change" under eye; "preparation h" under eyes; "eye tightener" makeup cracking; "under eye bags" "look tired"; "eye bags" filler regret; "tear trough" filler puffy; "lower bleph" worth it; transconjunctival recovery; festoons; malar bags; "crepey under eye"; tretinoin under eyes; menopause crepey eyes; "cold spoon" puffy eyes; concealer over eye bags; "studio dermal".
- Non-Reddit (option A): makeupalley plexaderm; makeupalley "instant firmx"; makeupalley "sudden change" firming serum; realself "tear trough" filler regret; realself lower blepharoplasty worth it; mumsnet eye bags filler; mumsnet "preparation h" eyes; purseforum eye bags; community.sephora.com eye tightener; trustpilot plexaderm makeup cracking; ulta "instant firmx" review residue; "studio dermal" tmp-02 review.

**Coding frame for the Reddit pass (targets from the brief)**: desires and emotional meaning (30+); failed attempts (20+); success stories; disappointments; holy grails; pre-purchase questions; objections; DIY; comparisons; terminology (novice vs experienced); ideal solution; price and value; scam views. Record per quote: exact text, subreddit, thread URL, date, upvotes if visible, and solution type (tightener, eye cream, DIY, filler, surgery).

### Gaps
**Consolidated "Could not verify" list**
1. Any Reddit thread, comment, username, date or upvote count, for every theme in the brief. Why: reddit.com returns a 400 "not accessible to our user agent" error; `site:reddit.com` queries return 0 Reddit URLs.
2. Existence, size, activity and rules of the subreddits in section 1. Why: same block.
3. Any mention of Studio Dermal or TMP-02. Why: the planned "studio dermal" query never ran (budget exhausted).
4. User experiences with Peter Thomas Roth Instant FIRMx. Why: only marketplace listing titles returned; the MakeupAlley and Sephora queries were refused by the budget.
5. User experiences with Jeunesse Instantly Ageless. Why: only listing titles returned.
6. Sudden Change Under-Eye Firming Serum. Why: not searched (budget).
7. "White residue" or white-cast complaints. Why: not searched (budget).
8. Tear-trough filler regret, "lower bleph worth it", festoons, malar bags. Why: not searched (the RealSelf query was refused).
9. Cold spoons, tea bags, tape and concealer tricks (beyond caffeine serum and allergy drops). Why: not searched.
10. Crepey under-eye skin, tretinoin and menopause threads. Why: not searched.
11. Price and value discussions, and competitor price points. Why: no prices in any result.
12. UK-specific consumer language (Mumsnet, r/SkincareAddictionUK). Why: the Mumsnet query was refused; Reddit is blocked.
13. What the pages behind titles V01-V12 and V14-V17 actually say. Why: page bodies never read; WebFetch is egress-blocked.
14. Source page and date of the Plexaderm TrustScore of 3.5 (P12), and the dates behind the 644 vs 610 review counts (V34, V35).
15. Which treatment "My Under-Eye Refresh" (V10) describes.
16. The subject of the ScamDoc page (V37).
17. Who operates plexadermtrial.com (V36) and how its offer works.
18. The current formula and regulatory status of the Canadian Preparation H "Bio-Dyne" products sold on eBay (V19-V22); only general knowledge.
