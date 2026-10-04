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

## מצב העבודה (4 באוקטובר 2026, 11:05 בערך)

- המחקר: הסתיים (2 סבבים, 19 קבצים, ועוד 4 תקצירים D1-D4).
- שלבים 1-10 במסמך: 5 סוכנים כותבים אותם עכשיו בסשן הענן.
- אחריהם: סיכומי רוחב, תשובות לשאלות המחקר, קונספטים לשוק המקור וניתוח אסטרטגי, ניתוח השוואתי, מסקנות לקהל הישראלי, סיכום מנהלים, "מה לא הצלחתי לבדוק", מקורות.
- `reports/section_playbook.md`: מה כל אחד מ-18 הפרקים חייב להכיל, המסקנות המחייבות ומפת הקבצים. אם צריך לחדש את הכתיבה במחשב, זה הקובץ שממנו ממשיכים.
- אם עוצרים את סשן הענן באמצע, פרקים שבכתיבה יישארו חלקיים: יופיעו במסמך כבלוקים "ממתינים" (pending).

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
1. Read the doc's outline with the Claude Docs connector and fill every remaining pending block,
   following the guide's sub-pending method, one section per call.
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
