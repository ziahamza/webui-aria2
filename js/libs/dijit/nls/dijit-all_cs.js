require({cache:{
'dijit/form/nls/cs/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "Zadaná hodnota není platná.",
	missingMessage: "Tato hodnota je vyžadována.",
	rangeMessage: "Tato hodnota je mimo rozsah."
})
//end v1.x content
);

},
'dijit/_editor/nls/cs/commands':function(){
define(
//begin v1.x content
({
	'bold': 'Tučné',
	'copy': 'Kopírovat',
	'cut': 'Vyjmout',
	'delete': 'Odstranit',
	'indent': 'Odsadit',
	'insertHorizontalRule': 'Vodorovná čára',
	'insertOrderedList': 'Číslovaný seznam',
	'insertUnorderedList': 'Seznam s odrážkami',
	'italic': 'Kurzíva',
	'justifyCenter': 'Zarovnat na střed',
	'justifyFull': 'Do bloku',
	'justifyLeft': 'Zarovnat vlevo',
	'justifyRight': 'Zarovnat vpravo',
	'outdent': 'Předsadit',
	'paste': 'Vložit',
	'redo': 'Opakovat',
	'removeFormat': 'Odebrat formát',
	'selectAll': 'Vybrat vše',
	'strikethrough': 'Přeškrtnutí',
	'subscript': 'Dolní index',
	'superscript': 'Horní index',
	'underline': 'Podtržení',
	'undo': 'Zpět',
	'unlink': 'Odebrat odkaz',
	'createLink': 'Vytvořit odkaz',
	'toggleDir': 'Přepnout směr',
	'insertImage': 'Vložit obrázek',
	'insertTable': 'Vložit/upravit tabulku',
	'toggleTableBorder': 'Přepnout ohraničení tabulky',
	'deleteTable': 'Odstranit tabulku',
	'tableProp': 'Vlastnost tabulky',
	'htmlToggle': 'Zdroj HTML',
	'foreColor': 'Barva popředí',
	'hiliteColor': 'Barva pozadí',
	'plainFormatBlock': 'Styl odstavce',
	'formatBlock': 'Styl odstavce',
	'fontSize': 'Velikost písma',
	'fontName': 'Název písma',
	'tabIndent': 'Odsazení tabulátoru',
	"fullScreen": "Přepnout celou obrazovku",
	"viewSource": "Zobrazit zdroj HTML",
	"print": "Tisk",
	"newPage": "Nová stránka",
	/* Error messages */
	'systemShortcut': 'Akce "${0}" je v prohlížeči dostupná pouze prostřednictvím klávesové zkratky. Použijte klávesovou zkratku ${1}.'
})
//end v1.x content
);

},
'dojo/cldr/nls/cs/gregorian':function(){
define(
//begin v1.x content
{
	"dateFormatItem-yM": "M.y",
	"dateFormatItem-yQ": "Q yyyy",
	"dayPeriods-format-wide-pm": "odp.",
	"eraNames": [
		"př.Kr.",
		"po Kr."
	],
	"dateFormatItem-MMMEd": "E, d. MMM",
	"field-day-relative+-1": "Včera",
	"dateFormatItem-yQQQ": "QQQ y",
	"field-day-relative+-2": "Předevčírem",
	"days-standAlone-wide": [
		"neděle",
		"pondělí",
		"úterý",
		"středa",
		"čtvrtek",
		"pátek",
		"sobota"
	],
	"months-standAlone-narrow": [
		"l",
		"ú",
		"b",
		"d",
		"k",
		"č",
		"č",
		"s",
		"z",
		"ř",
		"l",
		"p"
	],
	"dayPeriods-format-wide-am": "dop.",
	"quarters-standAlone-abbr": [
		"1. čtvrtletí",
		"2. čtvrtletí",
		"3. čtvrtletí",
		"4. čtvrtletí"
	],
	"timeFormat-full": "H:mm:ss zzzz",
	"dateFormatItem-yyyy": "y",
	"months-standAlone-abbr": [
		"1.",
		"2.",
		"3.",
		"4.",
		"5.",
		"6.",
		"7.",
		"8.",
		"9.",
		"10.",
		"11.",
		"12."
	],
	"dateFormatItem-yMMM": "LLL y",
	"field-day-relative+0": "Dnes",
	"field-day-relative+1": "Zítra",
	"days-standAlone-narrow": [
		"N",
		"P",
		"Ú",
		"S",
		"Č",
		"P",
		"S"
	],
	"eraAbbr": [
		"př.Kr.",
		"po Kr."
	],
	"field-day-relative+2": "Pozítří",
	"dateFormatItem-yyyyMMMM": "LLLL y",
	"dateFormat-long": "d. MMMM y",
	"timeFormat-medium": "H:mm:ss",
	"dateFormatItem-EEEd": "EEE, d.",
	"dateFormatItem-Hm": "H:mm",
	"dateFormat-medium": "d.M.yyyy",
	"dateFormatItem-Hms": "H:mm:ss",
	"dateFormatItem-yMd": "d.M.y",
	"quarters-standAlone-wide": [
		"1. čtvrtletí",
		"2. čtvrtletí",
		"3. čtvrtletí",
		"4. čtvrtletí"
	],
	"months-standAlone-wide": [
		"leden",
		"únor",
		"březen",
		"duben",
		"květen",
		"červen",
		"červenec",
		"srpen",
		"září",
		"říjen",
		"listopad",
		"prosinec"
	],
	"dateFormatItem-MMMd": "d. MMM",
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-long": "H:mm:ss z",
	"months-format-abbr": [
		"ledna",
		"února",
		"března",
		"dubna",
		"května",
		"června",
		"července",
		"srpna",
		"září",
		"října",
		"listopadu",
		"prosince"
	],
	"timeFormat-short": "H:mm",
	"dateFormatItem-H": "H",
	"quarters-format-abbr": [
		"1. čtvrtletí",
		"2. čtvrtletí",
		"3. čtvrtletí",
		"4. čtvrtletí"
	],
	"days-format-abbr": [
		"ne",
		"po",
		"út",
		"st",
		"čt",
		"pá",
		"so"
	],
	"days-format-narrow": [
		"N",
		"P",
		"Ú",
		"S",
		"Č",
		"P",
		"S"
	],
	"dateFormatItem-MEd": "E, d.M",
	"months-format-narrow": [
		"l",
		"ú",
		"b",
		"d",
		"k",
		"č",
		"č",
		"s",
		"z",
		"ř",
		"l",
		"p"
	],
	"days-standAlone-abbr": [
		"ne",
		"po",
		"út",
		"st",
		"čt",
		"pá",
		"so"
	],
	"dateFormat-short": "d.M.yy",
	"dateFormatItem-yyyyM": "M.yyyy",
	"dateFormatItem-yMMMEd": "EEE, d. MMM y",
	"dateFormat-full": "EEEE, d. MMMM y",
	"dateFormatItem-Md": "d.M",
	"dateFormatItem-yMEd": "EEE, d.M.y",
	"months-format-wide": [
		"ledna",
		"února",
		"března",
		"dubna",
		"května",
		"června",
		"července",
		"srpna",
		"září",
		"října",
		"listopadu",
		"prosince"
	],
	"dateFormatItem-d": "d.",
	"quarters-format-wide": [
		"1. čtvrtletí",
		"2. čtvrtletí",
		"3. čtvrtletí",
		"4. čtvrtletí"
	],
	"days-format-wide": [
		"neděle",
		"pondělí",
		"úterý",
		"středa",
		"čtvrtek",
		"pátek",
		"sobota"
	],
	"eraNarrow": [
		"př.Kr.",
		"po Kr."
	]
}
//end v1.x content
);
},
'dijit/nls/cs/loading':function(){
define(
//begin v1.x content
({
	loadingState: "Probíhá načítání...",
	errorState: "Omlouváme se, došlo k chybě"
})
//end v1.x content
);

},
'dojo/nls/cs/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "modravá",
antiquewhite: "krémově bílá",
aqua: "azurová",
aquamarine: "akvamarínová",
azure: "bledě azurová",
beige: "bledě béžová",
bisque: "bledě oranžová",
black: "černá",
blanchedalmond: "mandlová",
blue: "modrá",
blueviolet: "modrofialová",
brown: "červenohnědá",
burlywood: "krémová",
cadetblue: "šedomodrá",
chartreuse: "chartreuska",
chocolate: "hnědobéžová",
coral: "korálová červená",
cornflowerblue: "chrpově modrá",
cornsilk: "režná",
crimson: "karmínová",
cyan: "azurová",
darkblue: "tmavě modrá",
darkcyan: "tmavě azurová",
darkgoldenrod: "tmavě béžová",
darkgray: "tmavě šedá",
darkgreen: "tmavě zelená",
darkgrey: "tmavě šedá", // same as darkgray
darkkhaki: "pískově hnědá",
darkmagenta: "tmavě purpurová",
darkolivegreen: "tmavě olivová",
darkorange: "tmavě oranžová",
darkorchid: "tmavě orchidejová",
darkred: "tmavě červená",
darksalmon: "tmavě lososová",
darkseagreen: "tmavá mořská zelená",
darkslateblue: "tmavá břidlicová modrá",
darkslategray: "tmavá břidlicová šedá",
darkslategrey: "tmavá břidlicová šedá", // same as darkslategray
darkturquoise: "tmavě tyrkysová",
darkviolet: "tmavě fialová",
deeppink: "sytě růžová",
deepskyblue: "sytá nebeská modrá",
dimgray: "kouřově šedá",
dimgrey: "kouřově šedá", // same as dimgray
dodgerblue: "jasně modrá",
firebrick: "cihlová",
floralwhite: "květinově bílá",
forestgreen: "lesní zelená",
fuchsia: "fuchsiová",
gainsboro: "bledě šedá",
ghostwhite: "modravě bílá",
gold: "zlatá",
goldenrod: "béžová",
gray: "šedá",
green: "zelená",
greenyellow: "zelenožlutá",
grey: "šedá", // same as gray
honeydew: "nazelenalá",
hotpink: "jasně růžová",
indianred: "indiánská červená",
indigo: "indigově modrá",
ivory: "slonovinová",
khaki: "písková",
lavender: "levandulová",
lavenderblush: "levandulová růžová",
lawngreen: "jasně zelená",
lemonchiffon: "světle citrónová",
lightblue: "světle modrá",
lightcoral: "světle korálová",
lightcyan: "světle azurová",
lightgoldenrodyellow: "světle žlutá",
lightgray: "světle šedá",
lightgreen: "světle zelená",
lightgrey: "světle šedá", // same as lightgray
lightpink: "světle růžová",
lightsalmon: "světle lososová",
lightseagreen: "světlá mořská zelená",
lightskyblue: "světlá nebeská modrá",
lightslategray: "světlá břidlicová šedá",
lightslategrey: "světlá břidlicová šedá", // same as lightslategray
lightsteelblue: "světlá ocelová modrá",
lightyellow: "bledě žlutá",
lime: "limetková",
limegreen: "limetkově zelená",
linen: "bledě šedobéžová",
magenta: "purpurová",
maroon: "kaštanová",
mediumaquamarine: "střední akvamarínová",
mediumblue: "středně modrá",
mediumorchid: "středně orchidejová",
mediumpurple: "středně nachová",
mediumseagreen: "střední mořská zelená",
mediumslateblue: "střední břidlicová modrá",
mediumspringgreen: "střední jarní zelená",
mediumturquoise: "středně tyrkysová",
mediumvioletred: "středně fialovočervená",
midnightblue: "temně modrá",
mintcream: "mentolová",
mistyrose: "růžovobílá",
moccasin: "bledě krémová",
navajowhite: "světle krémová",
navy: "námořnická modrá",
oldlace: "světle béžová",
olive: "olivová",
olivedrab: "khaki",
orange: "oranžová",
orangered: "oranžovočervená",
orchid: "orchidejová",
palegoldenrod: "bledě písková",
palegreen: "bledě zelená",
paleturquoise: "bledě tyrkysová",
palevioletred: "bledě fialovočervená",
papayawhip: "papájová",
peachpuff: "broskvová",
peru: "karamelová",
pink: "růžová",
plum: "švestková",
powderblue: "bledě modrá",
purple: "nachová",
red: "červená",
rosybrown: "růžovohnědá",
royalblue: "královská modrá",
saddlebrown: "hnědá",
salmon: "lososová",
sandybrown: "oranžovohnědá",
seagreen: "mořská zelená",
seashell: "lasturová",
sienna: "siena",
silver: "stříbrná",
skyblue: "nebeská modrá",
slateblue: "břidlicová modrá",
slategray: "břidlicová šedá",
slategrey: "břidlicová šedá", // same as slategray
snow: "sněhobílá",
springgreen: "jarní zelená",
steelblue: "ocelová modrá",
tan: "šedobéžová",
teal: "šedozelená",
thistle: "bodláková",
tomato: "tomatová",
transparent: "průhledná",
turquoise: "tyrkysová",
violet: "fialová",
wheat: "zlatohnědá",
white: "bílá",
whitesmoke: "kouřově bílá",
yellow: "žlutá",
yellowgreen: "žlutozelená"
})
//end v1.x content
);

},
'dojo/cldr/nls/cs/number':function(){
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
	"currencyFormat": "#,##0.00 ¤",
	"plusSign": "+"
}
//end v1.x content
);
},
'dijit/_editor/nls/cs/FontChoice':function(){
define(
"dijit/_editor/nls/cs/FontChoice", //begin v1.x content
({
	fontSize: "Velikost",
	fontName: "Písmo",
	formatBlock: "Formát",

	serif: "serif",
	"sans-serif": "sans-serif",
	monospace: "monospace",
	cursive: "cursive",
	fantasy: "fantasy",

	noFormat: "Žádný",
	p: "Odstavec",
	h1: "Nadpis",
	h2: "Podnadpis",
	h3: "Podnadpis 2",
	pre: "Předformátované",

	1: "extra malé",
	2: "velmi malé",
	3: "malé",
	4: "střední",
	5: "velké",
	6: "velmi velké",
	7: "extra velké"
})
//end v1.x content
);

},
'dojo/cldr/nls/cs/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "Dolar hongkongský",
	"CHF_displayName": "Frank švýcarský",
	"CAD_displayName": "Dolar kanadský",
	"CNY_displayName": "Juan renminbi",
	"AUD_displayName": "Dolar australský",
	"JPY_displayName": "Jen",
	"USD_displayName": "Dolar americký",
	"GBP_displayName": "Libra šterlinků",
	"EUR_displayName": "Euro"
}
//end v1.x content
);
},
'dijit/form/nls/cs/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "Předchozí volby",
		nextMessage: "Další volby"
})
//end v1.x content
);

},
'dijit/nls/cs/common':function(){
define(
//begin v1.x content
({
	buttonOk: "OK",
	buttonCancel: "Storno",
	buttonSave: "Uložit",
	itemClose: "Zavřít"
})
//end v1.x content
);

}}});
define("dijit/nls/dijit-all_cs", [], 1);
