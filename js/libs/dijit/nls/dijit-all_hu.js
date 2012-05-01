require({cache:{
'dijit/form/nls/hu/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "A megadott érték érvénytelen.",
	missingMessage: "Meg kell adni egy értéket.",
	rangeMessage: "Az érték kívül van a megengedett tartományon."
})
//end v1.x content
);

},
'dijit/_editor/nls/hu/commands':function(){
define(
//begin v1.x content
({
	'bold': 'Félkövér',
	'copy': 'Másolás',
	'cut': 'Kivágás',
	'delete': 'Törlés',
	'indent': 'Behúzás',
	'insertHorizontalRule': 'Vízszintes vonalzó',
	'insertOrderedList': 'Számozott lista',
	'insertUnorderedList': 'Felsorolásjeles lista',
	'italic': 'Dőlt',
	'justifyCenter': 'Középre igazítás',
	'justifyFull': 'Sorkizárás',
	'justifyLeft': 'Balra igazítás',
	'justifyRight': 'Jobbra igazítás',
	'outdent': 'Negatív behúzás',
	'paste': 'Beillesztés',
	'redo': 'Újra',
	'removeFormat': 'Formázás eltávolítása',
	'selectAll': 'Összes kijelölése',
	'strikethrough': 'Áthúzott',
	'subscript': 'Alsó index',
	'superscript': 'Felső index',
	'underline': 'Aláhúzott',
	'undo': 'Visszavonás',
	'unlink': 'Hivatkozás eltávolítása',
	'createLink': 'Hivatkozás létrehozása',
	'toggleDir': 'Irány váltókapcsoló',
	'insertImage': 'Kép beszúrása',
	'insertTable': 'Táblázat beszúrása/szerkesztése',
	'toggleTableBorder': 'Táblázatszegély ki-/bekapcsolása',
	'deleteTable': 'Táblázat törlése',
	'tableProp': 'Táblázat tulajdonságai',
	'htmlToggle': 'HTML forrás',
	'foreColor': 'Előtérszín',
	'hiliteColor': 'Háttérszín',
	'plainFormatBlock': 'Bekezdés stílusa',
	'formatBlock': 'Bekezdés stílusa',
	'fontSize': 'Betűméret',
	'fontName': 'Betűtípus',
	'tabIndent': 'Tab behúzás',
	"fullScreen": "Váltás teljes képernyőre",
	"viewSource": "HTML forrás megjelenítése",
	"print": "Nyomtatás",
	"newPage": "Új oldal",
	/* Error messages */
	'systemShortcut': 'A(z) "${0}" művelet a böngészőben csak billentyűparancs használatával érhető el. Használja a következőt: ${1}.'
})
//end v1.x content
);

},
'dojo/cldr/nls/hu/gregorian':function(){
define(
//begin v1.x content
{
	"field-dayperiod": "napszak",
	"dayPeriods-format-wide-pm": "du.",
	"field-minute": "perc",
	"eraNames": [
		"időszámításunk előtt",
		"időszámításunk szerint"
	],
	"dateFormatItem-MMMEd": "MMM d., E",
	"field-day-relative+-1": "tegnap",
	"field-weekday": "hét napja",
	"field-day-relative+-2": "tegnapelőtt",
	"dateFormatItem-MMdd": "MM.dd.",
	"field-day-relative+-3": "három nappal ezelőtt",
	"days-standAlone-wide": [
		"vasárnap",
		"hétfő",
		"kedd",
		"szerda",
		"csütörtök",
		"péntek",
		"szombat"
	],
	"dateFormatItem-MMM": "LLL",
	"months-standAlone-narrow": [
		"J",
		"F",
		"M",
		"Á",
		"M",
		"J",
		"J",
		"A",
		"Sz",
		"O",
		"N",
		"D"
	],
	"field-era": "éra",
	"field-hour": "óra",
	"dayPeriods-format-wide-am": "de.",
	"quarters-standAlone-abbr": [
		"N1",
		"N2",
		"N3",
		"N4"
	],
	"timeFormat-full": "H:mm:ss zzzz",
	"months-standAlone-abbr": [
		"jan.",
		"febr.",
		"márc.",
		"ápr.",
		"máj.",
		"jún.",
		"júl.",
		"aug.",
		"szept.",
		"okt.",
		"nov.",
		"dec."
	],
	"dateFormatItem-Ed": "d., E",
	"field-day-relative+0": "ma",
	"field-day-relative+1": "holnap",
	"days-standAlone-narrow": [
		"V",
		"H",
		"K",
		"Sz",
		"Cs",
		"P",
		"Sz"
	],
	"eraAbbr": [
		"i. e.",
		"i. sz."
	],
	"field-day-relative+2": "holnapután",
	"field-day-relative+3": "három nap múlva",
	"dateFormatItem-yyyyMM": "yyyy.MM",
	"dateFormatItem-yyyyMMMM": "y. MMMM",
	"dateFormat-long": "y. MMMM d.",
	"timeFormat-medium": "H:mm:ss",
	"field-zone": "zóna",
	"dateFormatItem-Hm": "H:mm",
	"dateFormat-medium": "yyyy.MM.dd.",
	"dateFormatItem-Hms": "H:mm:ss",
	"quarters-standAlone-wide": [
		"I. negyedév",
		"II. negyedév",
		"III. negyedév",
		"IV. negyedév"
	],
	"field-year": "év",
	"field-week": "hét",
	"months-standAlone-wide": [
		"január",
		"február",
		"március",
		"április",
		"május",
		"június",
		"július",
		"augusztus",
		"szeptember",
		"október",
		"november",
		"december"
	],
	"dateFormatItem-MMMd": "MMM d.",
	"dateFormatItem-yyQ": "yy/Q",
	"timeFormat-long": "H:mm:ss z",
	"months-format-abbr": [
		"jan.",
		"febr.",
		"márc.",
		"ápr.",
		"máj.",
		"jún.",
		"júl.",
		"aug.",
		"szept.",
		"okt.",
		"nov.",
		"dec."
	],
	"timeFormat-short": "H:mm",
	"dateFormatItem-H": "H",
	"field-month": "hónap",
	"dateFormatItem-MMMMd": "MMMM d.",
	"quarters-format-abbr": [
		"N1",
		"N2",
		"N3",
		"N4"
	],
	"days-format-abbr": [
		"V",
		"H",
		"K",
		"Sze",
		"Cs",
		"P",
		"Szo"
	],
	"dateFormatItem-mmss": "mm:ss",
	"dateFormatItem-M": "L",
	"days-format-narrow": [
		"V",
		"H",
		"K",
		"Sz",
		"Cs",
		"P",
		"Sz"
	],
	"field-second": "másodperc",
	"field-day": "nap",
	"dateFormatItem-MEd": "M. d., E",
	"months-format-narrow": [
		"J",
		"F",
		"M",
		"Á",
		"M",
		"J",
		"J",
		"A",
		"Sz",
		"O",
		"N",
		"D"
	],
	"days-standAlone-abbr": [
		"V",
		"H",
		"K",
		"Sze",
		"Cs",
		"P",
		"Szo"
	],
	"dateFormat-short": "yyyy.MM.dd.",
	"dateFormatItem-yMMMEd": "y. MMM d., E",
	"dateFormat-full": "y. MMMM d., EEEE",
	"dateFormatItem-Md": "M. d.",
	"dateFormatItem-yMEd": "yyyy.MM.dd., E",
	"months-format-wide": [
		"január",
		"február",
		"március",
		"április",
		"május",
		"június",
		"július",
		"augusztus",
		"szeptember",
		"október",
		"november",
		"december"
	],
	"dateFormatItem-d": "d",
	"quarters-format-wide": [
		"I. negyedév",
		"II. negyedév",
		"III. negyedév",
		"IV. negyedév"
	],
	"days-format-wide": [
		"vasárnap",
		"hétfő",
		"kedd",
		"szerda",
		"csütörtök",
		"péntek",
		"szombat"
	],
	"eraNarrow": [
		"i. e.",
		"i. sz."
	]
}
//end v1.x content
);
},
'dijit/nls/hu/loading':function(){
define(
//begin v1.x content
({
	loadingState: "Betöltés...",
	errorState: "Sajnálom, hiba történt"
})
//end v1.x content
);

},
'dojo/nls/hu/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "Alice kék",
antiquewhite: "antik fehér",
aqua: "vízszín",
aquamarine: "akvamarin",
azure: "azúrkék",
beige: "bézs",
bisque: "porcelán",
black: "fekete",
blanchedalmond: "hámozott mandula",
blue: "kék",
blueviolet: "ibolyakék",
brown: "barna",
burlywood: "nyersfa",
cadetblue: "kadétkék",
chartreuse: "chartreuse",
chocolate: "csokoládé",
coral: "korall",
cornflowerblue: "búzavirágkék",
cornsilk: "kukoricahaj",
crimson: "karmazsinvörös",
cyan: "ciánkék",
darkblue: "sötétkék",
darkcyan: "sötét ciánkék",
darkgoldenrod: "sötét aranyvessző",
darkgray: "sötétszürke",
darkgreen: "sötétzöld",
darkgrey: "sötétszürke", // same as darkgray
darkkhaki: "sötét khakiszín",
darkmagenta: "sötétbíbor",
darkolivegreen: "sötét olajzöld",
darkorange: "sötét narancssárga",
darkorchid: "sötét orchidea",
darkred: "sötétvörös",
darksalmon: "sötét lazacszín",
darkseagreen: "sötét tengerzöld",
darkslateblue: "sötét palakék",
darkslategray: "sötét palaszürke",
darkslategrey: "sötét palaszürke", // same as darkslategray
darkturquoise: "sötét türkizkék",
darkviolet: "sötét ibolyaszín",
deeppink: "sötétrózsaszín",
deepskyblue: "sötét égszínkék",
dimgray: "halványszürke",
dimgrey: "halványszürke", // same as dimgray
dodgerblue: "dodger kék",
firebrick: "téglavörös",
floralwhite: "virágfehér",
forestgreen: "erdőzöld",
fuchsia: "fukszia",
gainsboro: "gainsboro",
ghostwhite: "szellemfehér",
gold: "arany",
goldenrod: "aranyvessző",
gray: "szürke",
green: "zöld",
greenyellow: "zöldessárga",
grey: "szürke", // same as gray
honeydew: "mézharmat",
hotpink: "meleg rózsaszín",
indianred: "indiánvörös",
indigo: "indigó",
ivory: "elefántcsont",
khaki: "khakiszín",
lavender: "levendula",
lavenderblush: "pirosas levendula",
lawngreen: "fűzöld",
lemonchiffon: "sárga műselyem",
lightblue: "világoskék",
lightcoral: "világos korall",
lightcyan: "világos ciánkék",
lightgoldenrodyellow: "világos aranyvessző sárga",
lightgray: "világosszürke",
lightgreen: "világoszöld",
lightgrey: "világosszürke", // same as lightgray
lightpink: "világos rózsaszín",
lightsalmon: "világos lazacszín",
lightseagreen: "világos tengerzöld",
lightskyblue: "világos égszínkék",
lightslategray: "világos palaszürke",
lightslategrey: "világos palaszürke", // same as lightslategray
lightsteelblue: "világos acélkék",
lightyellow: "világossárga",
lime: "lime",
limegreen: "limezöld",
linen: "vászonfehér",
magenta: "bíbor",
maroon: "gesztenyebarna",
mediumaquamarine: "közepes akvamarin",
mediumblue: "közepes kék",
mediumorchid: "közepes orchidea",
mediumpurple: "közepes lila",
mediumseagreen: "közepes tengerzöld",
mediumslateblue: "közepes palakék",
mediumspringgreen: "közepes tavaszzöld",
mediumturquoise: "közepes türkizkék",
mediumvioletred: "közepes ibolyavörös",
midnightblue: "éjkék",
mintcream: "mentaszósz",
mistyrose: "halvány rózsaszín",
moccasin: "mokkaszín",
navajowhite: "navajo fehér",
navy: "tengerészkék",
oldlace: "régi csipke",
olive: "olajzöld",
olivedrab: "olajzöld drapp",
orange: "narancssárga",
orangered: "narancsvörös",
orchid: "orchidea",
palegoldenrod: "halvány aranyvessző",
palegreen: "halványzöld",
paleturquoise: "halvány türkizkék",
palevioletred: "halvány ibolyavörös",
papayawhip: "papayahab",
peachpuff: "barackszín",
peru: "peru",
pink: "rózsaszín",
plum: "szilvakék",
powderblue: "púderkék",
purple: "lila",
red: "vörös",
rosybrown: "barnásrózsaszín",
royalblue: "királykék",
saddlebrown: "nyeregbarna",
salmon: "lazacszín",
sandybrown: "homokbarna",
seagreen: "tengerzöld",
seashell: "kagyló",
sienna: "vörösesbarna",
silver: "ezüst",
skyblue: "égszínkék",
slateblue: "palakék",
slategray: "palaszürke",
slategrey: "palaszürke", // same as slategray
snow: "hó",
springgreen: "tavaszzöld",
steelblue: "acélkék",
tan: "rozsdabarna",
teal: "pávakék",
thistle: "bogáncs",
tomato: "paradicsom",
transparent: "átlátszó",
turquoise: "türkizkék",
violet: "ibolyaszín",
wheat: "búza",
white: "fehér",
whitesmoke: "fehér füst",
yellow: "sárga",
yellowgreen: "sárgászöld"
})
//end v1.x content
);

},
'dojo/cldr/nls/hu/number':function(){
define(
//begin v1.x content
{
	"group": " ",
	"percentSign": "%",
	"exponential": "E",
	"scientificFormat": "#E0",
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
'dijit/_editor/nls/hu/FontChoice':function(){
define(
"dijit/_editor/nls/hu/FontChoice", //begin v1.x content
({
	fontSize: "Méret",
	fontName: "Betűtípus",
	formatBlock: "Formátum",

	serif: "talpas",
	"sans-serif": "talpatlan",
	monospace: "rögzített szélességű",
	cursive: "kurzív",
	fantasy: "fantázia",

	noFormat: "Nincs",
	p: "Bekezdés",
	h1: "Címsor",
	h2: "Alcím",
	h3: "Al-alcím",
	pre: "Előformázott",

	1: "xx-kicsi",
	2: "x-kicsi",
	3: "kicsi",
	4: "közepes",
	5: "nagy",
	6: "x-nagy",
	7: "xx-nagy"
})
//end v1.x content
);

},
'dojo/cldr/nls/hu/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "Hongkongi dollár",
	"CHF_displayName": "Svájci frank",
	"JPY_symbol": "¥",
	"CAD_displayName": "Kanadai dollár",
	"CNY_displayName": "Kínai jüan renminbi",
	"USD_symbol": "$",
	"AUD_displayName": "Ausztrál dollár",
	"JPY_displayName": "Japán jen",
	"USD_displayName": "USA dollár",
	"GBP_displayName": "Brit font sterling",
	"EUR_displayName": "Euro"
}
//end v1.x content
);
},
'dijit/form/nls/hu/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "Előző menüpontok",
		nextMessage: "További menüpontok"
})
//end v1.x content
);

},
'dijit/nls/hu/common':function(){
define(
//begin v1.x content
({
	buttonOk: "OK",
	buttonCancel: "Mégse",
	buttonSave: "Mentés",
	itemClose: "Bezárás"
})
//end v1.x content
);

}}});
define("dijit/nls/dijit-all_hu", [], 1);
