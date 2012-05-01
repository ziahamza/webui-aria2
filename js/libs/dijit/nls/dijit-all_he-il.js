require({cache:{
'dijit/form/nls/he/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "הערך שצוין אינו חוקי.",
	missingMessage: "זהו ערך דרוש.",
	rangeMessage: "הערך מחוץ לטווח."
})
//end v1.x content
);

},
'dijit/form/nls/he-il/validate':function(){
define('dijit/form/nls/he-il/validate',{});
},
'dijit/_editor/nls/he/commands':function(){
define(
//begin v1.x content
({
	'bold': 'מודגש',
	'copy': 'עותק',
	'cut': 'גזירה',
	'delete': 'מחיקה',
	'indent': 'הגדלת כניסה',
	'insertHorizontalRule': 'קו אופקי',
	'insertOrderedList': 'רשימה ממוספרת',
	'insertUnorderedList': 'רשימה עם תבליטים',
	'italic': 'נטוי',
	'justifyCenter': 'יישור למרכז',
	'justifyFull': 'יישור דו-צדדי',
	'justifyLeft': 'יישור לשמאל',
	'justifyRight': 'יישור לימין',
	'outdent': 'הקטנת כניסה',
	'paste': 'הדבקה',
	'redo': 'שחזור פעולה',
	'removeFormat': 'סילוק עיצוב',
	'selectAll': 'בחירת הכל',
	'strikethrough': 'קו חוצה',
	'subscript': 'כתב תחתי',
	'superscript': 'כתב עילי',
	'underline': 'קו תחתי',
	'undo': 'ביטול פעולה',
	'unlink': 'סילוק הקישור',
	'createLink': 'יצירת קישור',
	'toggleDir': 'מיתוג כיוון',
	'insertImage': 'הוספת תמונה',
	'insertTable': 'הוספת/עריכת טבלה',
	'toggleTableBorder': 'מיתוג גבול טבלה',
	'deleteTable': 'מחיקת טבלה',
	'tableProp': 'תכונת טבלה',
	'htmlToggle': 'מקור HTML',
	'foreColor': 'צבע חזית',
	'hiliteColor': 'צבע רקע',
	'plainFormatBlock': 'סגנון פיסקה',
	'formatBlock': 'סגנון פיסקה',
	'fontSize': 'גופן יחסי',
	'fontName': 'שם גופן',
	'tabIndent': 'כניסת טאב',
	"fullScreen": "מיתוג מסך מלא",
	"viewSource": "הצגת מקור HTML",
	"print": "הדפסה",
	"newPage": "דף חדש",
	/* Error messages */
	'systemShortcut': 'הפעולה "${0}" זמינה בדפדפן רק באמצעות קיצור דרך במקלדת. השתמשו בקיצור ${1}.',
	'ctrlKey':'ctrl+${0}‎',
	'appleKey':'\u2318${0}‎' // "command" or open-apple key on Macintosh
})
//end v1.x content
);

},
'dijit/_editor/nls/he-il/commands':function(){
define('dijit/_editor/nls/he-il/commands',{});
},
'dojo/cldr/nls/he/gregorian':function(){
define(
//begin v1.x content
{
	"field-weekday": "יום בשבוע",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-yMEd": "EEE, d.M.yyyy",
	"dateFormatItem-MMMEd": "E, d בMMM",
	"eraNarrow": [
		"לפנה״ס",
		"לסה״נ"
	],
	"dateFormat-long": "d בMMMM y",
	"months-format-wide": [
		"ינואר",
		"פברואר",
		"מרס",
		"אפריל",
		"מאי",
		"יוני",
		"יולי",
		"אוגוסט",
		"ספטמבר",
		"אוקטובר",
		"נובמבר",
		"דצמבר"
	],
	"dateFormatItem-EEEd": "EEE ה-d",
	"dayPeriods-format-wide-pm": "אחה״צ",
	"dateFormat-full": "EEEE, d בMMMM y",
	"dateFormatItem-Md": "d/M",
	"field-era": "תקופה",
	"dateFormatItem-yM": "M.yyyy",
	"months-standAlone-wide": [
		"ינואר",
		"פברואר",
		"מרס",
		"אפריל",
		"מאי",
		"יוני",
		"יולי",
		"אוגוסט",
		"ספטמבר",
		"אוקטובר",
		"נובמבר",
		"דצמבר"
	],
	"timeFormat-short": "HH:mm",
	"quarters-format-wide": [
		"רבעון 1",
		"רבעון 2",
		"רבעון 3",
		"רבעון 4"
	],
	"timeFormat-long": "HH:mm:ss z",
	"field-year": "שנה",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yQ": "yyyy Q",
	"dateFormatItem-yyyyMMMM": "MMMM y",
	"field-hour": "שעה",
	"dateFormatItem-MMdd": "dd/MM",
	"months-format-abbr": [
		"ינו",
		"פבר",
		"מרס",
		"אפר",
		"מאי",
		"יונ",
		"יול",
		"אוג",
		"ספט",
		"אוק",
		"נוב",
		"דצמ"
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-full": "HH:mm:ss zzzz",
	"field-day-relative+0": "היום",
	"field-day-relative+1": "מחר",
	"field-day-relative+2": "מחרתיים",
	"dateFormatItem-H": "HH",
	"field-day-relative+3": "בעוד שלושה ימים",
	"months-standAlone-abbr": [
		"ינו׳",
		"פבר׳",
		"מרס",
		"אפר׳",
		"מאי",
		"יונ׳",
		"יול׳",
		"אוג׳",
		"ספט׳",
		"אוק׳",
		"נוב׳",
		"דצמ׳"
	],
	"quarters-format-abbr": [
		"רבעון 1",
		"רבעון 2",
		"רבעון 3",
		"רבעון 4"
	],
	"quarters-standAlone-wide": [
		"רבעון 1",
		"רבעון 2",
		"רבעון 3",
		"רבעון 4"
	],
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"יום ראשון",
		"יום שני",
		"יום שלישי",
		"יום רביעי",
		"יום חמישי",
		"יום שישי",
		"יום שבת"
	],
	"dateFormatItem-MMMMd": "d בMMMM",
	"dateFormatItem-yyMMM": "MMM yyyy",
	"timeFormat-medium": "HH:mm:ss",
	"dateFormatItem-Hm": "HH:mm",
	"quarters-standAlone-abbr": [
		"רבעון 1",
		"רבעון 2",
		"רבעון 3",
		"רבעון 4"
	],
	"eraAbbr": [
		"לפנה״ס",
		"לסה״נ"
	],
	"field-minute": "דקה",
	"field-dayperiod": "לפה״צ/אחה״צ",
	"days-standAlone-abbr": [
		"יום א׳",
		"יום ב׳",
		"יום ג׳",
		"יום ד׳",
		"יום ה׳",
		"יום ו׳",
		"שבת"
	],
	"dateFormatItem-d": "d",
	"dateFormatItem-ms": "mm:ss",
	"field-day-relative+-1": "אתמול",
	"field-day-relative+-2": "שלשום",
	"field-day-relative+-3": "לפני שלושה ימים",
	"dateFormatItem-MMMd": "d בMMM",
	"dateFormatItem-MEd": "E, M-d",
	"dateFormatItem-yMMMM": "MMMM y",
	"field-day": "יום",
	"days-format-wide": [
		"יום ראשון",
		"יום שני",
		"יום שלישי",
		"יום רביעי",
		"יום חמישי",
		"יום שישי",
		"יום שבת"
	],
	"field-zone": "אזור",
	"dateFormatItem-yyyyMM": "MM/yyyy",
	"dateFormatItem-y": "y",
	"dateFormatItem-yyMM": "MM/yy",
	"dateFormatItem-hm": "h:mm a",
	"days-format-abbr": [
		"יום א׳",
		"יום ב׳",
		"יום ג׳",
		"יום ד׳",
		"יום ה׳",
		"יום ו׳",
		"שבת"
	],
	"eraNames": [
		"לפני הספירה",
		"לספירה"
	],
	"days-format-narrow": [
		"א",
		"ב",
		"ג",
		"ד",
		"ה",
		"ו",
		"ש"
	],
	"field-month": "חודש",
	"days-standAlone-narrow": [
		"א",
		"ב",
		"ג",
		"ד",
		"ה",
		"ו",
		"ש"
	],
	"dateFormatItem-MMM": "LLL",
	"dayPeriods-format-wide-am": "לפנה״צ",
	"dateFormatItem-MMMMEd": "E, d בMMMM",
	"dateFormat-short": "dd/MM/yy",
	"field-second": "שנייה",
	"dateFormatItem-yMMMEd": "EEE, d בMMM y",
	"dateFormatItem-Ed": "E ה-d",
	"field-week": "שבוע",
	"dateFormat-medium": "d בMMM yyyy",
	"dateFormatItem-mmss": "mm:ss",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-hms": "h:mm:ss a",
	"dateFormatItem-yyyy": "y"
}
//end v1.x content
);
},
'dojo/cldr/nls/he-il/gregorian':function(){
define('dojo/cldr/nls/he-il/gregorian',{});
},
'dijit/nls/he/loading':function(){
define(
//begin v1.x content
({
	loadingState: "טעינה...‏",
	errorState: "אירעה שגיאה"
})
//end v1.x content
);

},
'dijit/nls/he-il/loading':function(){
define('dijit/nls/he-il/loading',{});
},
'dojo/nls/he/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "כחול פלדה",
antiquewhite: "לבן עתיק",
aqua: "אקווה",
aquamarine: "אקוומארין",
azure: "תכלת עז",
beige: "בז'",
bisque: "לבן שקד",
black: "שחור",
blanchedalmond: "שקד",
blue: "כחול",
blueviolet: "כחול-סגול",
brown: "חום",
burlywood: "חום דהוי",
cadetblue: "כחול ים",
chartreuse: "ירוק-צהוב",
chocolate: "שוקולד",
coral: "אלמוג",
cornflowerblue: "כחול דרדר",
cornsilk: "צהבהב",
crimson: "ארגמן",
cyan: "טורקיז",
darkblue: "כחול כהה",
darkcyan: "טורקיז כהה",
darkgoldenrod: "זהוב כהה",
darkgray: "אפור כהה",
darkgreen: "ירוק כהה",
darkgrey: "אפור כהה", // same as darkgray
darkkhaki: "חאקי כהה",
darkmagenta: "בורדו כהה",
darkolivegreen: "ירוק זית כהה",
darkorange: "כתום כהה",
darkorchid: "סחלב כהה",
darkred: "אדום כהה",
darksalmon: "סלמון כהה",
darkseagreen: "ירוק ים כהה",
darkslateblue: "כחול צפחה כהה",
darkslategray: "אפור צפחה כהה",
darkslategrey: "אפור צפחה כהה", // same as darkslategray
darkturquoise: "טורקיז כהה",
darkviolet: "סגול כהה",
deeppink: "ורוד עמוק",
deepskyblue: "כחול שמיים עמוק",
dimgray: "אפור עמום",
dimgrey: "אפור עמום", // same as dimgray
dodgerblue: "כחול",
firebrick: "לבנה שרופה",
floralwhite: "לבן פרחוני",
forestgreen: "ירוק יער",
fuchsia: "ורוד בהיר",
gainsboro: "גיינסבורו",
ghostwhite: "לבן רפאים",
gold: "זהב",
goldenrod: "זהוב",
gray: "אפור",
green: "ירוק",
greenyellow: "ירוק-צהוב",
grey: "אפור", // same as gray
honeydew: "ירקרק",
hotpink: "ורוד לוהט",
indianred: "אדום דהוי",
indigo: "אינדיגו",
ivory: "שנהב",
khaki: "חאקי",
lavender: "לבנדר",
lavenderblush: "סומק לבנדר",
lawngreen: "ירוק דשא",
lemonchiffon: "ירוק לימון",
lightblue: "תכלת",
lightcoral: "אלמוג בהיר",
lightcyan: "טורקיז בהיר",
lightgoldenrodyellow: "צהוב בהיר",
lightgray: "אפור בהיר",
lightgreen: "ירוק בהיר",
lightgrey: "אפור בהיר", // same as lightgray
lightpink: "ורוד בהיר",
lightsalmon: "סלמון בהיר",
lightseagreen: "ירוק ים בהיר",
lightskyblue: "כחול שמיים בהיר",
lightslategray: "אפור צפחה בהיר",
lightslategrey: "אפור צפחה בהיר", // same as lightslategray
lightsteelblue: "כחול פלדה בהיר",
lightyellow: "צהוב בהיר",
lime: "לימון",
limegreen: "ירוק לימוני",
linen: "פשתן",
magenta: "בורדו",
maroon: "חום אדמדם",
mediumaquamarine: "כחול בינוני",
mediumblue: "תכלת בינוני",
mediumorchid: "סחלב בינוני",
mediumpurple: "סגול בינוני",
mediumseagreen: "ירוק ים בינוני",
mediumslateblue: "כחול צפחה בינוני",
mediumspringgreen: "ירוק אביב בינוני",
mediumturquoise: "טורקיז בינוני",
mediumvioletred: "סגול-אדום בינוני",
midnightblue: "כחול כהה",
mintcream: "קרם מנטה",
mistyrose: "ורוד מעורפל",
moccasin: "מוקסין",
navajowhite: "לבן נוואחו",
navy: "כחול כהה",
oldlace: "תחרה עתיקה",
olive: "זית",
olivedrab: "זית עמום",
orange: "כתום",
orangered: "כתום אדום",
orchid: "סחלב",
palegoldenrod: "זהוב בהיר",
palegreen: "ירוק בהיר",
paleturquoise: "טורקיז בהיר",
palevioletred: "סגול-אדום בהיר",
papayawhip: "פפאיה",
peachpuff: "קציפת אפרסק",
peru: "פרו",
pink: "ורוד",
plum: "שזיף",
powderblue: "כחול חיוור",
purple: "סגול",
red: "אדום",
rosybrown: "חום ורדרד",
royalblue: "כחול מלכותי",
saddlebrown: "חום דהוי",
salmon: "סלמון",
sandybrown: "חום חולי",
seagreen: "ירוק ים",
seashell: "צדף",
sienna: "סיינה",
silver: "כסף",
skyblue: "כחול שמיים",
slateblue: "כחול צפחה",
slategray: "אפור צפחה",
slategrey: "אפור צפחה", // same as slategray
snow: "שלג",
springgreen: "ירוק אביב",
steelblue: "כחול פלדה",
tan: "חום אדמדם",
teal: "כחול-ירוק כהה",
thistle: "דרדר",
tomato: "עגבניה",
turquoise: "טורקיז",
violet: "סגול",
wheat: "חיוט",
white: "לבן",
whitesmoke: "עשן לבן",
yellow: "צהוב",
yellowgreen: "ירוק צהוב"
})
//end v1.x content
);

},
'dojo/nls/he-il/colors':function(){
define('dojo/nls/he-il/colors',{});
},
'dojo/cldr/nls/he/number':function(){
define(
//begin v1.x content
{
	"group": ",",
	"percentSign": "%",
	"exponential": "E",
	"scientificFormat": "#E0",
	"percentFormat": "#,##0%",
	"list": ";",
	"infinity": "∞",
	"patternDigit": "#",
	"minusSign": "-",
	"decimal": ".",
	"nan": "NaN",
	"nativeZeroDigit": "0",
	"perMille": "‰",
	"decimalFormat": "#,##0.###",
	"currencyFormat": "#,##0.00 ¤",
	"plusSign": "+"
}
//end v1.x content
);
},
'dojo/cldr/nls/he-il/number':function(){
define('dojo/cldr/nls/he-il/number',{});
},
'dijit/_editor/nls/he/FontChoice':function(){
define(
"dijit/_editor/nls/he/FontChoice", //begin v1.x content
({
	fontSize: "גודל",
	fontName: "גופן",
	formatBlock: "עיצוב",

	serif: "serif",
	"sans-serif": "sans-serif",
	monospace: "monospace",
	cursive: "cursive",
	fantasy: "fantasy",

	noFormat: "ללא ",
	p: "פיסקה",
	h1: "כותרת",
	h2: "תת-כותרת",
	h3: "תת-תת-כותרת",
	pre: "מעוצב מראש",

	1: "קטן ביות",
	2: "קטן מאוד",
	3: "קטן",
	4: "בינוני",
	5: "גדול",
	6: "גדול מאוד",
	7: "גדול ביותר"
})
//end v1.x content
);

},
'dijit/_editor/nls/he-il/FontChoice':function(){
define('dijit/_editor/nls/he-il/FontChoice',{});
},
'dojo/cldr/nls/he/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "דולר הונג קונגי",
	"CHF_displayName": "פרנק שוויצרי",
	"CAD_displayName": "דולר קנדי",
	"CNY_displayName": "יואן רנמינבי סיני",
	"AUD_displayName": "דולר אוסטרלי",
	"JPY_displayName": "ין יפני",
	"USD_displayName": "דולר אמריקאי",
	"GBP_displayName": "לירה שטרלינג",
	"EUR_displayName": "אירו"
}
//end v1.x content
);
},
'dojo/cldr/nls/he-il/currency':function(){
define('dojo/cldr/nls/he-il/currency',{});
},
'dijit/form/nls/he/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "האפשרויות הקודמות",
		nextMessage: "אפשרויות נוספות"
})
//end v1.x content
);

},
'dijit/form/nls/he-il/ComboBox':function(){
define('dijit/form/nls/he-il/ComboBox',{});
},
'dijit/nls/he/common':function(){
define(
//begin v1.x content
({
	buttonOk: "אישור",
	buttonCancel: "ביטול",
	buttonSave: "שמירה",
	itemClose: "סגירה"
})
//end v1.x content
);

},
'dijit/nls/he-il/common':function(){
define('dijit/nls/he-il/common',{});
}}});
define("dijit/nls/dijit-all_he-il", [], 1);
