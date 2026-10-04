# העברה למחשב המקומי: מחקר שוק Studio Dermal TMP-02

## מה יש ואיפה

| מה | איפה |
| --- | --- |
| המסמך עצמו (Claude Docs, נשמר ב-claude.ai, לא בענן של הסשן) | https://claude.ai/code/artifact/a8f3ec39-7c07-4669-9005-e3ecebee7808 |
| 19 קבצי ממצאים (A = בריטניה וארה"ב, B = ישראל) | `research_notes/מחקר שוק Studio Dermal מול ישראל/` |
| תקצירים מרוכזים (D1-D4, נכתבים עכשיו) | אותה תיקייה, קבצי `D*_digest_*.md` |
| מדריך הכתיבה: חוקי האמת, סגנון, מילון מונחים, איך כותבים למסמך | `reports/writing_guide.md` |

הכול על ה-branch `claude/adoring-brahmagupta-tahja2` בריפו `abutzadka21-dotcom/SAGIV`.

## התוכנית שסוכמה

1. **בענן (עכשיו):** מסיימים לכתוב את כל הדוח לתוך המסמך. כל העבודה נדחפת ל-GitHub.
2. **על המחשב (אחר כך):** מורידים הכול ומריצים סשן מקומי עם Chrome כדי לסגור את החורים (ראו בסוף הקובץ) ולעשות בדיקת איכות אחרונה.

## מצב העבודה (4 באוקטובר 2026, 13:00 בערך)

- המחקר: הסתיים (2 סבבים, 19 קבצים, ועוד 4 תקצירים D1-D4).
- המסמך: כל 18 הפרקים כתובים בלשונית הראשית. הלשונית הגיעה למגבלת הגודל של Claude Docs (כ-20,000 בלוקים), ולכן שאלות המחקר 32-48 נמצאות בלשונית שנייה, "תשובות לשאלות המחקר: המשך". יש אליה קישור מתוך הפרק "תשובות לשאלות המחקר".
- בקרת איכות: בוצעו שני סבבים: מקפים, תוויות, ערבוב שווקים, עקביות המסקנות והקווים האדומים בקונספטים.
- `reports/section_playbook.md`: מה כל אחד מ-18 הפרקים חייב להכיל, המסקנות המחייבות ומפת הקבצים.
- `reports/sources.md`: 1,603 כתובות ייחודיות, מקובצות לפי נושא.
- שמירה מקומית של המסמך: מתפריט הייצוא של המסמך עצמו (Word, PDF, Markdown או Google Docs), לכל לשונית בנפרד.
- כל תוספת למסמך צריכה להיכנס ללשונית השנייה או ללשונית חדשה, כי הלשונית הראשית מלאה.

## איך ממשיכים על המחשב

1. מורידים את הקבצים:
   ```
   git clone https://github.com/abutzadka21-dotcom/SAGIV.git
   cd SAGIV
   git checkout claude/adoring-brahmagupta-tahja2
   ```
2. פותחים Claude Code בתיקייה: באפליקציית Claude Desktop (לשונית Code, לבחור את התיקייה), או בטרמינל `claude` (או `claude remote-control` כדי לראות אותו גם באפליקציה).
3. מוודאים שמחוברים: Claude in Chrome (התוסף פתוח ב-Chrome) ו-Claude Docs.
4. מדביקים את הפרומפט שלמטה.

## פרומפט מוכן לסשן המקומי

```
Continue a Hebrew market research report that lives in a Claude Doc:
https://claude.ai/code/artifact/a8f3ec39-7c07-4669-9005-e3ecebee7808

Read first, in this order: reports/HANDOFF.md, reports/writing_guide.md (binding rules: Hebrew only,
no em/en dashes, labels [מאומת]/[הסקה]/[ידע כללי], verbatim quotes with links only, never mix
markets, never use GitHub-derived data), then the digests D1-D4 and the notes in
"research_notes/מחקר שוק Studio Dermal מול ישראל/". Paths in the guide that start with
/home/user/SAGIV/ are relative to this repo root.

Then:
1. Read the doc's outline with the Claude Docs connector (both tabs). The main tab is at the
   Claude Docs size limit (about 20,000 blocks): put any new material in the second tab
   ("תשובות לשאלות המחקר: המשך") or in a new tab, and link it from the main tab.
2. Use Claude in Chrome (new tab, my own sign-ins) to close the research gaps listed in the
   "Could not verify" sections of the notes, starting with: Reddit threads (r/SkincareAddiction,
   r/30PlusSkinCare, r/40PlusSkincare) on instant eye tighteners; Amazon reviews of the Studio Dermal
   listings and of Peter Thomas Roth Instant FIRMx; the Meta Ad Library filtered to Israel for
   eye-cream / "מיצוק מיידי" / "שקיות מתחת לעיניים" ads; Hebrew comments under Israeli beauty posts;
   Super-Pharm and Be review texts; the studiodermal.com product page itself. Add only verbatim,
   linked items to the relevant sections, and update the counts.
```

## החורים העיקריים שכדאי לסגור עם Chrome

- 0 ציטוטים מ-Reddit: חסום לגמרי מהענן.
- מעט מאוד טקסט ביקורות מ-Amazon, ושום ביקורת על הליסטינגים של Studio Dermal בארה"ב.
- 0 תגובות בעברית מתחת למודעות ופוסטים, ומעט קופי של מודעות ישראליות.
- ספריית המודעות של Meta (סינון ישראל ובריטניה): לא נפתחה. אין תאריכי ריצה ואין קריאייטיב של Studio Dermal.
- דף המוצר של Studio Dermal עצמו: לא נפתח ישירות, כל הנתונים הגיעו מתקצירי חיפוש.
