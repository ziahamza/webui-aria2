require({cache:{
'dijit/form/nls/nb/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "Den angitte verdien er ikke gyldig.",
	missingMessage: "Denne verdien er obligatorisk.",
	rangeMessage: "Denne verdien er utenfor gyldig område."
})
//end v1.x content
);

},
'dijit/_editor/nls/nb/commands':function(){
define(
//begin v1.x content
({
	'bold': 'Fet',
	'copy': 'Kopier',
	'cut': 'Klipp ut',
	'delete': 'Slett',
	'indent': 'Innrykk',
	'insertHorizontalRule': 'Vannrett strek',
	'insertOrderedList': 'Nummerert liste',
	'insertUnorderedList': 'Punktliste',
	'italic': 'Kursiv',
	'justifyCenter': 'Midtstill',
	'justifyFull': 'Juster',
	'justifyLeft': 'Venstrejuster',
	'justifyRight': 'Høyrejuster',
	'outdent': 'Fjern innrykk',
	'paste': 'Lim inn',
	'redo': 'Gjør om',
	'removeFormat': 'Fjern format',
	'selectAll': 'Velg alle',
	'strikethrough': 'Gjennomstreking',
	'subscript': 'Senket skrift',
	'superscript': 'Hevet skrift',
	'underline': 'Understreking',
	'undo': 'Angre',
	'unlink': 'Fjern kobling',
	'createLink': 'Opprett kobling',
	'toggleDir': 'Bytt retning',
	'insertImage': 'Sett inn bilde',
	'insertTable': 'Sett inn/rediger tabell',
	'toggleTableBorder': 'Bytt tabellkant',
	'deleteTable': 'Slett tabell',
	'tableProp': 'Tabellegenskap',
	'htmlToggle': 'HTML-kilde',
	'foreColor': 'Forgrunnsfarge',
	'hiliteColor': 'Bakgrunnsfarge',
	'plainFormatBlock': 'Avsnittsstil',
	'formatBlock': 'Avsnittsstil',
	'fontSize': 'Skriftstørrelse',
	'fontName': 'Skriftnavn',
	'tabIndent': 'Tabulatorinnrykk',
	"fullScreen": "Slå på/av full skjerm",
	"viewSource": "Vis HTML-kilde",
	"print": "Skriv ut",
	"newPage": "Ny side",
	/* Error messages */
	'systemShortcut': 'Handlingen "${0}" er bare tilgjengelig i nettleseren ved hjelp av en tastatursnarvei. Bruk ${1}.',
	'ctrlKey':'ctrl+${0}',
	'appleKey':'\u2318${0}' // "command" or open-apple key on Macintosh
})
//end v1.x content
);

},
'dojo/cldr/nls/nb/gregorian':function(){
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
	"field-weekday": "ukedag",
	"dateFormatItem-yyQQQQ": "QQQQ yy",
	"dateFormatItem-yQQQ": "QQQ y",
	"dateFormatItem-yMEd": "EEE d.M.yyyy",
	"dateFormatItem-MMMEd": "E d. MMM",
	"eraNarrow": [
		"f.Kr.",
		"e.Kr."
	],
	"dateFormat-long": "d. MMMM y",
	"months-format-wide": [
		"januar",
		"februar",
		"mars",
		"april",
		"mai",
		"juni",
		"juli",
		"august",
		"september",
		"oktober",
		"november",
		"desember"
	],
	"dateFormatItem-EEEd": "EEE d.",
	"dayPeriods-format-wide-pm": "PM",
	"dateFormat-full": "EEEE d. MMMM y",
	"dateFormatItem-Md": "d.M.",
	"field-era": "tidsalder",
	"dateFormatItem-yM": "M y",
	"months-standAlone-wide": [
		"januar",
		"februar",
		"mars",
		"april",
		"mai",
		"juni",
		"juli",
		"august",
		"september",
		"oktober",
		"november",
		"desember"
	],
	"timeFormat-short": "HH:mm",
	"quarters-format-wide": [
		"1. kvartal",
		"2. kvartal",
		"3. kvartal",
		"4. kvartal"
	],
	"timeFormat-long": "HH:mm:ss z",
	"field-year": "år",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yQ": "Q yyyy",
	"dateFormatItem-yyyyMMMM": "MMMM y",
	"field-hour": "time",
	"dateFormatItem-MMdd": "dd.MM",
	"months-format-abbr": [
		"jan.",
		"feb.",
		"mars",
		"apr.",
		"mai",
		"juni",
		"juli",
		"aug.",
		"sep.",
		"okt.",
		"nov.",
		"des."
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-full": "'kl'. HH:mm:ss zzzz",
	"field-day-relative+0": "i dag",
	"field-day-relative+1": "i morgen",
	"field-day-relative+2": "i overmorgen",
	"field-day-relative+3": "i overovermorgen",
	"months-standAlone-abbr": [
		"jan.",
		"feb.",
		"mars",
		"apr.",
		"mai",
		"juni",
		"juli",
		"aug.",
		"sep.",
		"okt.",
		"nov.",
		"des."
	],
	"quarters-format-abbr": [
		"K1",
		"K2",
		"K3",
		"K4"
	],
	"quarters-standAlone-wide": [
		"1. kvartal",
		"2. kvartal",
		"3. kvartal",
		"4. kvartal"
	],
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"søndag",
		"mandag",
		"tirsdag",
		"onsdag",
		"torsdag",
		"fredag",
		"lørdag"
	],
	"dateFormatItem-yyMMM": "MMM yy",
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
	"field-minute": "minutt",
	"field-dayperiod": "AM/PM",
	"days-standAlone-abbr": [
		"søn.",
		"man.",
		"tir.",
		"ons.",
		"tor.",
		"fre.",
		"lør."
	],
	"dateFormatItem-d": "d.",
	"dateFormatItem-ms": "mm.ss",
	"field-day-relative+-1": "i går",
	"field-day-relative+-2": "i forgårs",
	"field-day-relative+-3": "i forforgårs",
	"dateFormatItem-MMMd": "d. MMM",
	"dateFormatItem-MEd": "E d.M",
	"field-day": "dag",
	"days-format-wide": [
		"søndag",
		"mandag",
		"tirsdag",
		"onsdag",
		"torsdag",
		"fredag",
		"lørdag"
	],
	"field-zone": "sone",
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
	"dateFormatItem-yyMM": "MM.yy",
	"dateFormatItem-hm": "h:mm a",
	"days-format-abbr": [
		"søn.",
		"man.",
		"tir.",
		"ons.",
		"tor.",
		"fre.",
		"lør."
	],
	"eraNames": [
		"f.Kr.",
		"e.Kr."
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
	"field-month": "måned",
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
	"dayPeriods-format-wide-am": "AM",
	"dateFormat-short": "dd.MM.yy",
	"field-second": "sekund",
	"dateFormatItem-yMMMEd": "EEE d. MMM y",
	"field-week": "uke",
	"dateFormat-medium": "d. MMM y",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-hms": "h:mm:ss a"
}
//end v1.x content
);
},
'dijit/nls/nb/loading':function(){
define(
//begin v1.x content
({
	loadingState: "Laster inn...",
	errorState: "Det oppsto en feil"
})
//end v1.x content
);

},
'dojo/nls/nb/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "blåhvit",
antiquewhite: "antikk hvit",
aqua: "akva",
aquamarine: "akvamarin",
azure: "asur",
beige: "beige",
bisque: "gulrosa",
black: "svart",
blanchedalmond: "lys mandel",
blue: "blå",
blueviolet: "blåfiolett",
brown: "brun",
burlywood: "matt mellombrun",
cadetblue: "mørk grønnblå",
chartreuse: "løvgrønn",
chocolate: "sjokolade",
coral: "korall",
cornflowerblue: "kornblå",
cornsilk: "cornsilk",
crimson: "karmosinrødt",
cyan: "cyan",
darkblue: "mørk blå",
darkcyan: "mørk cyan",
darkgoldenrod: "mørk gyldenris",
darkgray: "mørk grå",
darkgreen: "mørk grønn",
darkgrey: "mørk grå", // same as darkgray
darkkhaki: "mørk khaki",
darkmagenta: "mørk magenta",
darkolivegreen: "mørk olivengrønn",
darkorange: "mørk oransje",
darkorchid: "mørk orkide",
darkred: "mørk rød",
darksalmon: "mørk lakserosa",
darkseagreen: "mørk sjøgrønn",
darkslateblue: "mørk skiferblå",
darkslategray: "mørk skifergrå",
darkslategrey: "mørk skifergrå", // same as darkslategray
darkturquoise: "mørk turkis",
darkviolet: "mørk fiolett",
deeppink: "dyp rosa",
deepskyblue: "dyp himmelblå",
dimgray: "mørk mørkegrå",
dimgrey: "mørk mørkegrå", // same as dimgray
dodgerblue: "lys havblå",
firebrick: "mursteinsrød",
floralwhite: "blomsterhvit",
forestgreen: "skoggrønn",
fuchsia: "fuksia",
gainsboro: "lys lys grå",
ghostwhite: "egghvit",
gold: "gull",
goldenrod: "gyldenris",
gray: "grå",
green: "grønn",
greenyellow: "gulgrønn",
grey: "grå", // same as gray
honeydew: "grønnhvit",
hotpink: "halvmørk rosa",
indianred: "rustrød",
indigo: "indigo",
ivory: "elfenbenshvit",
khaki: "khaki",
lavender: "lavendel",
lavenderblush: "lillahvit",
lawngreen: "plengrønn",
lemonchiffon: "ferskenfarget",
lightblue: "lys blå",
lightcoral: "lys korall",
lightcyan: "lys cyan",
lightgoldenrodyellow: "lys gyldenrisgul",
lightgray: "lys grå",
lightgreen: "lys grønn",
lightgrey: "lys grå", // same as lightgray
lightpink: "lys rosa",
lightsalmon: "lys lakserosa",
lightseagreen: "lys sjøgrønn",
lightskyblue: "lys himmelblå",
lightslategray: "lys skifergrå",
lightslategrey: "lys skifergrå", // same as lightslategray
lightsteelblue: "lys stålblå",
lightyellow: "lys gul",
lime: "lime",
limegreen: "limegrønn",
linen: "lin",
magenta: "magenta",
maroon: "rødbrun",
mediumaquamarine: "middels akvamarin",
mediumblue: "mellomblå",
mediumorchid: "middels orkide",
mediumpurple: "middels purpur",
mediumseagreen: "middels sjøgrønn",
mediumslateblue: "middels skiferblå",
mediumspringgreen: "middels vårgrønn",
mediumturquoise: "middels turkis",
mediumvioletred: "middels fiolettrød",
midnightblue: "midnattsblå",
mintcream: "mintkrem",
mistyrose: "lys rosenrød",
moccasin: "lys gulbrun",
navajowhite: "gulbrun",
navy: "marineblå",
oldlace: "kniplingshvit",
olive: "oliven",
olivedrab: "middels olivengrønn",
orange: "oransje",
orangered: "rødoransje",
orchid: "orkide",
palegoldenrod: "svak gyldenris",
palegreen: "svak grønn",
paleturquoise: "svak turkis",
palevioletred: "svak fiolettrød",
papayawhip: "lys papaya",
peachpuff: "brunrosa",
peru: "lys nøttebrun",
pink: "rosa",
plum: "plommefarget",
powderblue: "lys grønnblå",
purple: "purpur",
red: "rød",
rosybrown: "brunlilla",
royalblue: "kongeblå",
saddlebrown: "mørk nøttebrun",
salmon: "lakserosa",
sandybrown: "sandbrun",
seagreen: "sjøgrønn",
seashell: "skjellhvit",
sienna: "nøttebrun",
silver: "sølvfarget",
skyblue: "himmelblå",
slateblue: "skiferblå",
slategray: "skifergrå",
slategrey: "skifergrå", // same as slategray
snow: "snøhvit",
springgreen: "vårgrønn",
steelblue: "stålblå",
tan: "matt mellombrun",
teal: "mørk grønnblå",
thistle: "lys grålilla",
tomato: "tomatrød",
transparent: "gjennomsiktig",
turquoise: "turkis",
violet: "fiolett",
wheat: "varm sienna",
white: "hvit",
whitesmoke: "røykhvit",
yellow: "gul",
yellowgreen: "gulgrønn"
})
//end v1.x content
);

},
'dojo/cldr/nls/nb/number':function(){
define(
//begin v1.x content
{
	"group": " ",
	"percentSign": "%",
	"exponential": "E",
	"scientificFormat": "#E0",
	"percentFormat": "#,##0 %",
	"list": ";",
	"infinity": "∞",
	"patternDigit": "#",
	"minusSign": "-",
	"decimal": ",",
	"nan": "NaN",
	"nativeZeroDigit": "0",
	"perMille": "‰",
	"decimalFormat": "#,##0.###",
	"currencyFormat": "¤ #,##0.00",
	"plusSign": "+"
}
//end v1.x content
);
},
'dijit/_editor/nls/nb/FontChoice':function(){
define(
"dijit/_editor/nls/nb/FontChoice", //begin v1.x content
({
	fontSize: "Størrelse",
	fontName: "Skrift",
	formatBlock: "Format",

	serif: "serif",
	"sans-serif": "sans-serif",
	monospace: "monospace",
	cursive: "kursiv",
	fantasy: "fantasi",

	noFormat: "Ingen",
	p: "Avsnitt",
	h1: "Overskrift",
	h2: "Undertittel",
	h3: "Under-undertittel",
	pre: "Forhåndsformatert",

	1: "xx-liten",
	2: "x-liten",
	3: "liten",
	4: "middels",
	5: "stor",
	6: "x-stor",
	7: "xx-stor"
})
//end v1.x content
);

},
'dojo/cldr/nls/nb/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "Hongkong-dollar",
	"CHF_displayName": "sveitsiske franc",
	"CHF_symbol": "CHF",
	"JPY_symbol": "JPY",
	"CAD_displayName": "kanadiske dollar",
	"CNY_displayName": "kinesiske yuan renminbi",
	"USD_symbol": "USD",
	"AUD_displayName": "australske dollar",
	"JPY_displayName": "japanske yen",
	"CAD_symbol": "CAD",
	"USD_displayName": "amerikanske dollar",
	"EUR_symbol": "EUR",
	"CNY_symbol": "CNY",
	"GBP_displayName": "britiske pund sterling",
	"GBP_symbol": "GBP",
	"AUD_symbol": "AUD",
	"EUR_displayName": "euro"
}
//end v1.x content
);
},
'dijit/form/nls/nb/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "Tidligere valg",
		nextMessage: "Flere valg"
})
//end v1.x content
);

},
'dijit/nls/nb/common':function(){
define(
//begin v1.x content
({
	buttonOk: "OK",
	buttonCancel: "Avbryt",
	buttonSave: "Lagre",
	itemClose: "Lukk"
})
//end v1.x content
);

}}});
define("dijit/nls/dijit-all_nb", [], 1);
