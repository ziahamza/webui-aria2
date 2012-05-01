require({cache:{
'dijit/form/nls/ar/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "القيمة التي تم ادخالها غير صحيحة.",
	missingMessage: "يجب ادخال هذه القيمة.",
	rangeMessage: "هذه القيمة ليس بالمدى الصحيح."
})
//end v1.x content
);

},
'dijit/_editor/nls/ar/commands':function(){
define(
//begin v1.x content
({
	'bold': 'عري~ض',
	'copy': 'نسخ',
	'cut': 'قص',
	'delete': 'حذف',
	'indent': 'ازاحة للداخل',
	'insertHorizontalRule': 'مسطرة أفقية',
	'insertOrderedList': '‏كشف مرقم‏',
	'insertUnorderedList': 'كشف نقطي',
	'italic': '~مائل',
	'justifyCenter': 'محاذاة في الوسط',
	'justifyFull': 'ضبط',
	'justifyLeft': 'محاذاة الى اليسار',
	'justifyRight': 'محاذاة الى اليمين',
	'outdent': 'ازاحة للخارج',
	'paste': 'لصق',
	'redo': '‏اعادة‏',
	'removeFormat': 'ازالة النسق',
	'selectAll': '‏اختيار كل‏',
	'strikethrough': 'تشطيب',
	'subscript': 'رمز سفلي',
	'superscript': 'رمز علوي',
	'underline': '~تسطير',
	'undo': 'تراجع',
	'unlink': 'ازالة وصلة',
	'createLink': 'تكوين وصلة',
	'toggleDir': 'تبديل الاتجاه',
	'insertImage': 'ادراج صورة',
	'insertTable': 'ادراج/تحرير جدول',
	'toggleTableBorder': 'تبديل حدود الجدول',
	'deleteTable': 'حذف جدول',
	'tableProp': 'خصائص الجدول',
	'htmlToggle': 'مصدر HTML',
	'foreColor': 'لون الواجهة الأمامية',
	'hiliteColor': '‏لون الخلفية‏',
	'plainFormatBlock': 'نمط الفقرة',
	'formatBlock': 'نمط الفقرة',
	'fontSize': 'حجم طاقم الطباعة',
	'fontName': 'اسم طاقم الطباعة',
	'tabIndent': 'ازاحة علامة الجدولة للداخل',
	"fullScreen": "تبديل  الشاشة الكاملة",
	"viewSource": "مشاهدة مصدر HTML",
	"print": "طباعة",
	"newPage": "صفحة جديدة",
	/* Error messages */
	'systemShortcut': 'يكون التصرف "${0}" متاحا فقط ببرنامج الاستعراض الخاص بك باستخدام المسار المختصر للوحة المفاتيح.  استخدم ${1}.',
	'ctrlKey':'ctrl+${0}',
	'appleKey':'\u2318${0}' // "command" or open-apple key on Macintosh
})

//end v1.x content
);

},
'dojo/cldr/nls/ar/gregorian':function(){
define(
//begin v1.x content
{
	"dateFormatItem-yM": "M‏/yyyy",
	"field-dayperiod": "ص/م",
	"dateFormatItem-yQ": "yyyy Q",
	"dayPeriods-format-wide-pm": "م",
	"field-minute": "الدقائق",
	"eraNames": [
		"قبل الميلاد",
		"ميلادي"
	],
	"dateFormatItem-MMMEd": "E d MMM",
	"field-day-relative+-1": "أمس",
	"field-weekday": "اليوم",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-MMdd": "dd‏/MM",
	"days-standAlone-wide": [
		"الأحد",
		"الإثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	],
	"dateFormatItem-MMM": "LLL",
	"months-standAlone-narrow": [
		"ي",
		"ف",
		"م",
		"أ",
		"و",
		"ن",
		"ل",
		"غ",
		"س",
		"ك",
		"ب",
		"د"
	],
	"field-era": "العصر",
	"field-hour": "الساعات",
	"dayPeriods-format-wide-am": "ص",
	"quarters-standAlone-abbr": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"dateFormatItem-y": "y",
	"timeFormat-full": "zzzz h:mm:ss a",
	"months-standAlone-abbr": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"dateFormatItem-Ed": "E، d",
	"dateFormatItem-yMMM": "MMM y",
	"field-day-relative+0": "اليوم",
	"field-day-relative+1": "غدًا",
	"days-standAlone-narrow": [
		"ح",
		"ن",
		"ث",
		"ر",
		"خ",
		"ج",
		"س"
	],
	"eraAbbr": [
		"ق.م",
		"م"
	],
	"field-day-relative+2": "بعد الغد",
	"dateFormatItem-yyyyMM": "MM‏/yyyy",
	"dateFormatItem-yyyyMMMM": "MMMM، y",
	"dateFormat-long": "d MMMM، y",
	"timeFormat-medium": "h:mm:ss a",
	"field-zone": "التوقيت",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormat-medium": "dd‏/MM‏/yyyy",
	"quarters-standAlone-wide": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"dateFormatItem-yMMMM": "MMMM y",
	"dateFormatItem-ms": "mm:ss",
	"field-year": "السنة",
	"quarters-standAlone-narrow": [
		"١",
		"٢",
		"٣",
		"٤"
	],
	"field-week": "الأسبوع",
	"months-standAlone-wide": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"dateFormatItem-MMMMEd": "E d MMMM",
	"dateFormatItem-MMMd": "d MMM",
	"quarters-format-narrow": [
		"١",
		"٢",
		"٣",
		"٤"
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-long": "z h:mm:ss a",
	"months-format-abbr": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"timeFormat-short": "h:mm a",
	"field-month": "الشهر",
	"dateFormatItem-MMMMd": "d MMMM",
	"quarters-format-abbr": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"days-format-abbr": [
		"أحد",
		"إثنين",
		"ثلاثاء",
		"أربعاء",
		"خميس",
		"جمعة",
		"سبت"
	],
	"dateFormatItem-M": "L",
	"days-format-narrow": [
		"ح",
		"ن",
		"ث",
		"ر",
		"خ",
		"ج",
		"س"
	],
	"field-second": "الثواني",
	"field-day": "يوم",
	"months-format-narrow": [
		"ي",
		"ف",
		"م",
		"أ",
		"و",
		"ن",
		"ل",
		"غ",
		"س",
		"ك",
		"ب",
		"د"
	],
	"days-standAlone-abbr": [
		"أحد",
		"إثنين",
		"ثلاثاء",
		"أربعاء",
		"خميس",
		"جمعة",
		"سبت"
	],
	"dateFormat-short": "d‏/M‏/yyyy",
	"dateFormatItem-yMMMEd": "EEE، d MMMM y",
	"dateFormat-full": "EEEE، d MMMM، y",
	"dateFormatItem-Md": "d/‏M",
	"dateFormatItem-yMEd": "EEE، d/‏M/‏yyyy",
	"months-format-wide": [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	"dateFormatItem-d": "d",
	"quarters-format-wide": [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	],
	"days-format-wide": [
		"الأحد",
		"الإثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	],
	"eraNarrow": [
		"ق.م",
		"م"
	]
}
//end v1.x content
);
},
'dijit/nls/ar/loading':function(){
define(
//begin v1.x content
({
	loadingState: "جاري التحميل...",
	errorState: "عفوا، حدث خطأ"
})
//end v1.x content
);

},
'dojo/nls/ar/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "أزرق فاتح",
antiquewhite: "أبيض عتيق",
aqua: "أزرق مائي",
aquamarine: "أزرق مائل للأخضر (زبرجد)",
azure: "أزرق سماوي",
beige: "بيج",
bisque: "أصفر برتقالي الى رمادي مصفر",
black: "أسود",
blanchedalmond: "أخضر مائل للبياض",
blue: "أزرق",
blueviolet: "أزرق-بنفسجي",
brown: "بني",
burlywood: "خشبي",
cadetblue: "أزرق ملون بالرمادي",
chartreuse: "أخضر مائل للصفرة",
chocolate: "بني غامق",
coral: "مرجاني",
cornflowerblue: "أزرق عنبري",
cornsilk: "حريري",
crimson: "قرمزي",
cyan: "أزرق سماوي",
darkblue: "أزرق داكن",
darkcyan: "أزرق سماوي داكن",
darkgoldenrod: "أصفر ذهبي داكن",
darkgray: "رمادي داكن",
darkgreen: "أخضر داكن",
darkgrey: "رمادي داكن", // same as darkgray
darkkhaki: "كاكي داكن",
darkmagenta: "قرمزي داكن",
darkolivegreen: "أخضر زيتوني داكن",
darkorange: "برتقالي داكن",
darkorchid: "أرجواني داكن",
darkred: "أحمر داكن",
darksalmon: "فضي داكن",
darkseagreen: "أخضر مائل للأزرق داكن",
darkslateblue: "أزرق اردوازي داكن",
darkslategray: "رمادي اردوازي داكن",
darkslategrey: "رمادي اردوازي داكن", // same as darkslategray
darkturquoise: "تركواز داكن",
darkviolet: "بنفسجي داكن",
deeppink: "أحمر وردي غامق",
deepskyblue: "أزرق سماوي غامق",
dimgray: "رمادي شاحب",
dimgrey: "رمادي شاحب", // same as dimgray
dodgerblue: "أزرق عنبري",
firebrick: "أصفر زاهي",
floralwhite: "أبيض زهري",
forestgreen: "أخضر بلون أشجار الغابات",
fuchsia: "فوشيا",
gainsboro: "رمادي مائل للأزرق فاتح",
ghostwhite: "أبيض شفاف",
gold: "ذهبي",
goldenrod: "أصفر ذهبي",
gray: "رمادي",
green: "أخضر",
greenyellow: "أخضر مائل للأصفر",
grey: "رمادي", // same as gray
honeydew: "أبيض مائل للأخضر",
hotpink: "أحمر وردي زاهي",
indianred: "أحمر هندي",
indigo: "نيلي",
ivory: "عاجي",
khaki: "كاكي",
lavender: "أرجواني شاحب",
lavenderblush: "أحمر أرجواني",
lawngreen: "أخضر بلون العشب",
lemonchiffon: "أصفر شفاف",
lightblue: "أزرق فاتح",
lightcoral: "مرجاني فاتح",
lightcyan: "سماوي فاتح",
lightgoldenrodyellow: "أصفر ذهبي فاتح",
lightgray: "رمادي فاتح",
lightgreen: "أخضر فاتح",
lightgrey: "رمادي فاتح", // same as lightgray
lightpink: "وردي فاتح",
lightsalmon: "فضي فاتح",
lightseagreen: "أخضر مائل للأزرق فاتح",
lightskyblue: "أزرق سماوي فاتح",
lightslategray: "رمادي اردوازي فاتح",
lightslategrey: "رمادي اردوازي فاتح", // same as lightslategray
lightsteelblue: "أزرق معدني فاتح",
lightyellow: "أصفر فاتح",
lime: "ليموني",
limegreen: "أخضر ليموني",
linen: "كتاني",
magenta: "أحمر قرمزي",
maroon: "أحمر داكن",
mediumaquamarine: "أزرق مائل للأخضر (زبرجد) متوسط",
mediumblue: "أزرق متوسط",
mediumorchid: "أرجواني متوسط",
mediumpurple: "قرمزي متوسط",
mediumseagreen: "أخضر مائل للأزرق متوسط",
mediumslateblue: "أزرق اردوازي متوسط",
mediumspringgreen: "أخضر ربيعي متوسط",
mediumturquoise: "تركواز متوسط",
mediumvioletred: "أحمر-بنفسجي متوسط",
midnightblue: "أزرق بحري",
mintcream: "أصفر شاحب مائل للأخضر الزرعي",
mistyrose: "وردي",
moccasin: "نحاسي أحمر",
navajowhite: "أبيض ملاحي",
navy: "أزرق داكن",
oldlace: "برتقالي مائل للأصفر شاحب",
olive: "أخضر زيتوني داكن",
olivedrab: "أسود فاتح",
orange: "برتقالي",
orangered: "أحمر مائل للبرتقالي",
orchid: "أرجواني فاتح",
palegoldenrod: "أصفر ذهبي شاحب",
palegreen: "أخضر شاحب",
paleturquoise: "تركواز شاحب",
palevioletred: "أحمر-بنفسجي شاحب",
papayawhip: "خوخي فاتح",
peachpuff: "خوخي مائل للأصفر",
peru: "بني جملي",
pink: "وردي",
plum: "أرجواني داكن",
powderblue: "أزرق مائل للأصفر",
purple: "ارجواني",
red: "أحمر",
rosybrown: "بني وردي",
royalblue: "أزرق ملكي",
saddlebrown: "بني فاتح",
salmon: "برتقالي وردي شاحب",
sandybrown: "بني مائل للصفرة",
seagreen: "أخضر مائل للأزرق",
seashell: "أبيض مائل للأصفر فاتح",
sienna: "بني محروق",
silver: "فضي",
skyblue: "أزرق سماوي",
slateblue: "أزرق اردوازي",
slategray: "رمادي اردوازي",
slategrey: "رمادي اردوازي", // same as slategray
snow: "أبيض ثلجي",
springgreen: "أخضر ربيعي",
steelblue: "أزرق معدني",
tan: "خمري",
teal: "بترولي",
thistle: "ارجواني شاحب",
tomato: "أحمر مائل للأصفر",
turquoise: "تركواز",
violet: "بنفسجي",
wheat: "أخضر قمحي",
white: "أبيض",
whitesmoke: "دخان أبيض",
yellow: "أصفر",
yellowgreen: "أخضر مائل للأصفر"
})
//end v1.x content
);

},
'dojo/cldr/nls/ar/number':function(){
define(
//begin v1.x content
{
	"group": "٬",
	"percentSign": "٪",
	"exponential": "اس",
	"list": "؛",
	"infinity": "∞",
	"minusSign": "-",
	"decimal": "٫",
	"nan": "ليس رقم",
	"perMille": "؉",
	"decimalFormat": "#,##0.###;#,##0.###-",
	"currencyFormat": "¤ #,##0.00;¤ #,##0.00-",
	"plusSign": "+"
}
//end v1.x content
);
},
'dijit/_editor/nls/ar/FontChoice':function(){
define(
"dijit/_editor/nls/ar/FontChoice", //begin v1.x content
({
	fontSize: "الحجم",
	fontName: "طاقم طباعة",
	formatBlock: "النسق",

	serif: "serif",
	"sans-serif": "sans-serif",
	monospace: "أحادي المسافة",
	cursive: "كتابة بحروف متصلة",
	fantasy: "خيالي",

	noFormat: "‏لا شيء‏",
	p: "فقرة",
	h1: "عنوان",
	h2: "عنوان فرعي",
	h3: "فرعي-عنوان فرعي",
	pre: "منسق بصفة مسبقة",

	1: "صغير جدا جدا",
	2: "صغير جدا",
	3: "صغير",
	4: "متوسط",
	5: "كبير",
	6: "كبير جدا",
	7: "كبير جدا جدا"
})
//end v1.x content
);

},
'dojo/cldr/nls/ar/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "دولار هونج كونج",
	"CHF_displayName": "فرنك سويسري",
	"CAD_displayName": "دولار كندي",
	"CNY_displayName": "يوان صيني",
	"AUD_displayName": "دولار أسترالي",
	"JPY_displayName": "ين ياباني",
	"USD_displayName": "دولار أمريكي",
	"CNY_symbol": "ي.ص",
	"GBP_displayName": "جنيه إسترليني",
	"EUR_displayName": "يورو"
}
//end v1.x content
);
},
'dijit/form/nls/ar/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "الاختيارات السابقة",
		nextMessage: "مزيد من الاختيارات"
})
//end v1.x content
);

},
'dijit/nls/ar/common':function(){
define(
//begin v1.x content
({
	buttonOk: "حسنا",
	buttonCancel: "الغاء",
	buttonSave: "حفظ",
	itemClose: "اغلاق"
})
//end v1.x content
);

}}});
define("dijit/nls/dijit-all_ar", [], 1);
