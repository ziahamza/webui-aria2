require({cache:{
'dijit/form/nls/sv/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "Det angivna värdet är ogiltigt.",
	missingMessage: "Värdet är obligatoriskt.",
	rangeMessage: "Värdet är utanför intervallet."
})
//end v1.x content
);

},
'dijit/_editor/nls/sv/commands':function(){
define(
//begin v1.x content
({
	'bold': 'Fetstil',
	'copy': 'Kopiera',
	'cut': 'Klipp ut',
	'delete': 'Ta bort',
	'indent': 'Indrag',
	'insertHorizontalRule': 'Horisontell linjal',
	'insertOrderedList': 'Numrerad lista',
	'insertUnorderedList': 'Punktlista',
	'italic': 'Kursiv',
	'justifyCenter': 'Centrera',
	'justifyFull': 'Marginaljustera',
	'justifyLeft': 'Vänsterjustera',
	'justifyRight': 'Högerjustera',
	'outdent': 'Utdrag',
	'paste': 'Klistra in',
	'redo': 'Gör om',
	'removeFormat': 'Ta bort format',
	'selectAll': 'Markera allt',
	'strikethrough': 'Genomstruken',
	'subscript': 'Nedsänkt',
	'superscript': 'Upphöjt',
	'underline': 'Understrykning',
	'undo': 'Ångra',
	'unlink': 'Ta bort länk',
	'createLink': 'Skapa länk',
	'toggleDir': 'Växla riktning',
	'insertImage': 'Infoga bild',
	'insertTable': 'Infoga/redigera tabell',
	'toggleTableBorder': 'Aktivera/avaktivera tabellram',
	'deleteTable': 'Ta bort tabell',
	'tableProp': 'Tabellegenskap',
	'htmlToggle': 'HTML-källkod',
	'foreColor': 'Förgrundsfärg',
	'hiliteColor': 'Bakgrundsfärg',
	'plainFormatBlock': 'Styckeformat',
	'formatBlock': 'Styckeformat',
	'fontSize': 'Teckenstorlek',
	'fontName': 'Teckensnittsnamn',
	'tabIndent': 'Tabbindrag',
	"fullScreen": "Växla helskärm",
	"viewSource": "Visa HTML-kod",
	"print": "Skriv ut",
	"newPage": "Ny sida",
	/* Error messages */
	'systemShortcut': 'Åtgärden "${0}" är endast tillgänglig i webbläsaren med hjälp av ett kortkommando. Använd ${1}.',
	'ctrlKey':'Ctrl+${0}',
	'appleKey':'\u2318+${0}' // "command" or open-apple key on Macintosh
})

//end v1.x content
);

},
'dojo/cldr/nls/sv/gregorian':function(){
define(
//begin v1.x content
{
	"months-format-narrow": [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	"quarters-standAlone-narrow": [
		"1",
		"2",
		"3",
		"4"
	],
	"field-weekday": "veckodag",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-yMEd": "EEE, yyyy-MM-dd",
	"dateFormatItem-MMMEd": "E d MMM",
	"eraNarrow": [
		"f.Kr.",
		"e.Kr."
	],
	"dateFormat-long": "d MMMM y",
	"months-format-wide": [
		"januari",
		"februari",
		"mars",
		"april",
		"maj",
		"juni",
		"juli",
		"augusti",
		"september",
		"oktober",
		"november",
		"december"
	],
	"dateFormatItem-EEEd": "EEE d",
	"dayPeriods-format-wide-pm": "em",
	"dateFormat-full": "EEEE'en' 'den' d:'e' MMMM y",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MMMMEEEd": "EEE d MMMM",
	"field-era": "era",
	"dateFormatItem-yM": "yyyy-MM",
	"months-standAlone-wide": [
		"januari",
		"februari",
		"mars",
		"april",
		"maj",
		"juni",
		"juli",
		"augusti",
		"september",
		"oktober",
		"november",
		"december"
	],
	"timeFormat-short": "HH:mm",
	"quarters-format-wide": [
		"1:a kvartalet",
		"2:a kvartalet",
		"3:e kvartalet",
		"4:e kvartalet"
	],
	"timeFormat-long": "HH:mm:ss z",
	"field-year": "år",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yQ": "yyyy Q",
	"field-hour": "timme",
	"dateFormatItem-MMdd": "dd/MM",
	"months-format-abbr": [
		"jan",
		"feb",
		"mar",
		"apr",
		"maj",
		"jun",
		"jul",
		"aug",
		"sep",
		"okt",
		"nov",
		"dec"
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-full": "'kl'. HH:mm:ss zzzz",
	"field-day-relative+0": "i dag",
	"field-day-relative+1": "i morgon",
	"field-day-relative+2": "i övermorgon",
	"field-day-relative+3": "i överövermorgon",
	"months-standAlone-abbr": [
		"jan",
		"feb",
		"mar",
		"apr",
		"maj",
		"jun",
		"jul",
		"aug",
		"sep",
		"okt",
		"nov",
		"dec"
	],
	"quarters-format-abbr": [
		"K1",
		"K2",
		"K3",
		"K4"
	],
	"quarters-standAlone-wide": [
		"1:a kvartalet",
		"2:a kvartalet",
		"3:e kvartalet",
		"4:e kvartalet"
	],
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"söndag",
		"måndag",
		"tisdag",
		"onsdag",
		"torsdag",
		"fredag",
		"lördag"
	],
	"dateFormatItem-yyyyMMM": "MMM y",
	"dateFormatItem-MMMMd": "d:'e' MMMM",
	"dateFormatItem-yyMMM": "MMM -yy",
	"timeFormat-medium": "HH:mm:ss",
	"dateFormatItem-Hm": "HH:mm",
	"quarters-standAlone-abbr": [
		"K1",
		"K2",
		"K3",
		"K4"
	],
	"eraAbbr": [
		"f.Kr.",
		"e.Kr."
	],
	"field-minute": "minut",
	"field-dayperiod": "fm/em",
	"days-standAlone-abbr": [
		"sön",
		"mån",
		"tis",
		"ons",
		"tors",
		"fre",
		"lör"
	],
	"dateFormatItem-d": "d",
	"dateFormatItem-ms": "mm:ss",
	"field-day-relative+-1": "i går",
	"field-day-relative+-2": "i förrgår",
	"field-day-relative+-3": "i förrförrgår",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MEd": "E d/M",
	"field-day": "dag",
	"days-format-wide": [
		"söndag",
		"måndag",
		"tisdag",
		"onsdag",
		"torsdag",
		"fredag",
		"lördag"
	],
	"field-zone": "tidszon",
	"dateFormatItem-yyyyMM": "yyyy-MM",
	"dateFormatItem-y": "y",
	"months-standAlone-narrow": [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	"dateFormatItem-yyMM": "yy-MM",
	"dateFormatItem-hm": "h:mm a",
	"days-format-abbr": [
		"sön",
		"mån",
		"tis",
		"ons",
		"tors",
		"fre",
		"lör"
	],
	"eraNames": [
		"före Kristus",
		"efter Kristus"
	],
	"days-format-narrow": [
		"S",
		"M",
		"T",
		"O",
		"T",
		"F",
		"L"
	],
	"field-month": "månad",
	"days-standAlone-narrow": [
		"S",
		"M",
		"T",
		"O",
		"T",
		"F",
		"L"
	],
	"dateFormatItem-MMM": "LLL",
	"dayPeriods-format-wide-am": "fm",
	"dateFormatItem-MMMMEd": "E d:'e' MMMM",
	"dateFormat-short": "yyyy-MM-dd",
	"dateFormatItem-MMd": "d/M",
	"field-second": "sekund",
	"dateFormatItem-yMMMEd": "EEE d MMM y",
	"field-week": "vecka",
	"dateFormat-medium": "d MMM y",
	"dateFormatItem-yyyyQQQQ": "QQQQ y",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-hms": "h:mm:ss a"
}
//end v1.x content
);
},
'dijit/nls/sv/loading':function(){
define(
//begin v1.x content
({
	loadingState: "Läser in...",
	errorState: "Det uppstod ett fel."
})
//end v1.x content
);

},
'dojo/nls/sv/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "aliceblå",
antiquewhite: "antikvitt",
aqua: "akvamarin",
aquamarine: "akvamarin",
azure: "azurblått",
beige: "beige",
bisque: "biskvi",
black: "svart",
blanchedalmond: "skållad mandel",
blue: "blått",
blueviolet: "blåviolett",
brown: "brunt",
burlywood: "träfärgat",
cadetblue: "kadettblått",
chartreuse: "chartreuse",
chocolate: "choklad",
coral: "korall",
cornflowerblue: "kornblått",
cornsilk: "gulvitt",
crimson: "karmosinrött",
cyan: "cyan",
darkblue: "mörkblått",
darkcyan: "mörkt cyan",
darkgoldenrod: "mörkt gullris",
darkgray: "mörkgrått",
darkgreen: "mörkgrönt",
darkgrey: "mörkgrått", // same as darkgray
darkkhaki: "mörkt kaki",
darkmagenta: "mörk magenta",
darkolivegreen: "mörkt olivgrönt",
darkorange: "mörkorange",
darkorchid: "mörkt orkidé",
darkred: "mörkrött",
darksalmon: "mörkt laxfärgat",
darkseagreen: "mörkt havsgrönt",
darkslateblue: "mörkt skifferblått",
darkslategray: "mörkt skiffergrått",
darkslategrey: "mörkt skiffergrått", // same as darkslategray
darkturquoise: "mörkturkost",
darkviolet: "mörkviolett",
deeppink: "djuprosa",
deepskyblue: "mörkt himmelsblått",
dimgray: "smutsgrått",
dimgrey: "smutsgrått", // same as dimgray
dodgerblue: "dodgerblått",
firebrick: "tegelstensrött",
floralwhite: "blomvitt",
forestgreen: "skogsgrönt",
fuchsia: "fuchsia",
gainsboro: "gainsboro",
ghostwhite: "spökvitt",
gold: "guld",
goldenrod: "gullris",
gray: "grått",
green: "grönt",
greenyellow: "gröngult",
grey: "grått", // same as gray
honeydew: "honungsdagg",
hotpink: "varmrosa",
indianred: "indianrött",
indigo: "indigo",
ivory: "elfenbensvitt",
khaki: "kaki",
lavender: "lavendel",
lavenderblush: "lavendelskimrande",
lawngreen: "gräsmattegrönt",
lemonchiffon: "citronchiffong",
lightblue: "ljusblått",
lightcoral: "ljuskorall",
lightcyan: "ljust cyan",
lightgoldenrodyellow: "ljust gullrisgult",
lightgray: "ljusgrått",
lightgreen: "ljusgrönt",
lightgrey: "ljusgrått", // same as lightgray
lightpink: "ljusrosa",
lightsalmon: "ljust laxfärgat",
lightseagreen: "ljust havsgrönt",
lightskyblue: "ljust himmelsblått",
lightslategray: "ljust skiffergrått",
lightslategrey: "ljust skiffergrått", // same as lightslategray
lightsteelblue: "ljust stålblått",
lightyellow: "ljusgult",
lime: "lime",
limegreen: "limegrönt",
linen: "linne",
magenta: "magenta",
maroon: "rödbrunt",
mediumaquamarine: "mellanakvamarin",
mediumblue: "mellanblått",
mediumorchid: "mellanorkidé",
mediumpurple: "mellanlila",
mediumseagreen: "mellanhavsgrönt",
mediumslateblue: "mellanskifferblått",
mediumspringgreen: "mellanvårgrönt",
mediumturquoise: "mellanturkost",
mediumvioletred: "mellanviolettrött",
midnightblue: "midnattsblått",
mintcream: "mintgrädde",
mistyrose: "dunkelrosa",
moccasin: "mockasin",
navajowhite: "navajovitt",
navy: "marinblått",
oldlace: "spetsvitt",
olive: "olivfärgat",
olivedrab: "olivsmutsgult",
orange: "orange",
orangered: "orangerött",
orchid: "orkidé",
palegoldenrod: "blekt gullris",
palegreen: "blekgrönt",
paleturquoise: "blekturkost",
palevioletred: "blekviolettrött",
papayawhip: "papayaröra",
peachpuff: "persika",
peru: "peru",
pink: "rosa",
plum: "plommon",
powderblue: "pulverblått",
purple: "lila",
red: "rött",
rosybrown: "rosenbrunt",
royalblue: "kungligt blått",
saddlebrown: "sadelbrunt",
salmon: "laxfärgat",
sandybrown: "sandbrunt",
seagreen: "havsgrönt",
seashell: "snäckskal",
sienna: "sienna",
silver: "silver",
skyblue: "himmelsblått",
slateblue: "skifferblått",
slategray: "skiffergrått",
slategrey: "skiffergrått", // same as slategray
snow: "snö",
springgreen: "vårgrönt",
steelblue: "stålblått",
tan: "mellanbrunt",
teal: "blågrönt",
thistle: "tistel",
tomato: "tomatrött",
transparent: "transparent",
turquoise: "turkost",
violet: "violett",
wheat: "vete",
white: "vitt",
whitesmoke: "vit rök",
yellow: "gult",
yellowgreen: "gulgrönt"
})
//end v1.x content
);

},
'dojo/cldr/nls/sv/number':function(){
define(
//begin v1.x content
{
	"group": " ",
	"percentSign": "%",
	"exponential": "×10^",
	"scientificFormat": "#E0",
	"percentFormat": "#,##0 %",
	"list": ";",
	"infinity": "∞",
	"patternDigit": "#",
	"minusSign": "−",
	"decimal": ",",
	"nan": "¤¤¤",
	"nativeZeroDigit": "0",
	"perMille": "‰",
	"decimalFormat": "#,##0.###",
	"currencyFormat": "#,##0.00 ¤",
	"plusSign": "+"
}
//end v1.x content
);
},
'dijit/_editor/nls/sv/FontChoice':function(){
define(
"dijit/_editor/nls/sv/FontChoice", //begin v1.x content
({
	fontSize: "Storlek",
	fontName: "Teckensnitt",
	formatBlock: "Format",

	serif: "serif",
	"sans-serif": "sans-serif",
	monospace: "monospace",
	cursive: "kursivt",
	fantasy: "fantasy",

	noFormat: "Ingen",
	p: "Stycke",
	h1: "Rubrik",
	h2: "Underrubrik",
	h3: "Underunderrubrik",
	pre: "Förformaterat",

	1: "mycket, mycket litet",
	2: "mycket litet",
	3: "litet",
	4: "medelstort",
	5: "stort",
	6: "extra stort",
	7: "extra extra stort"
})
//end v1.x content
);

},
'dojo/cldr/nls/sv/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "Hongkong-dollar",
	"CHF_displayName": "schweizisk franc",
	"CHF_symbol": "CHF",
	"CAD_displayName": "kanadensisk dollar",
	"CNY_displayName": "kinesisk yuan renminbi",
	"AUD_displayName": "australisk dollar",
	"JPY_displayName": "japansk yen",
	"CAD_symbol": "CAD",
	"USD_displayName": "US-dollar",
	"CNY_symbol": "CNY",
	"GBP_displayName": "brittiskt pund sterling",
	"EUR_displayName": "euro"
}
//end v1.x content
);
},
'dijit/form/nls/sv/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "Föregående alternativ",
		nextMessage: "Fler alternativ"
})
//end v1.x content
);

},
'dijit/nls/sv/common':function(){
define(
//begin v1.x content
({
	buttonOk: "OK",
	buttonCancel: "Avbryt",
	buttonSave: "Spara",
	itemClose: "Stäng"
})
//end v1.x content
);

}}});
define("dijit/nls/dijit-all_sv", [], 1);
