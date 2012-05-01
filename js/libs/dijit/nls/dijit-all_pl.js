require({cache:{
'dijit/form/nls/pl/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "Wprowadzona wartość jest niepoprawna.",
	missingMessage: "Ta wartość jest wymagana.",
	rangeMessage: "Ta wartość jest spoza zakresu."
})
//end v1.x content
);

},
'dijit/_editor/nls/pl/commands':function(){
define(
//begin v1.x content
({
	'bold': 'Pogrubienie',
	'copy': 'Kopiuj',
	'cut': 'Wytnij',
	'delete': 'Usuń',
	'indent': 'Wcięcie',
	'insertHorizontalRule': 'Linia pozioma',
	'insertOrderedList': 'Lista numerowana',
	'insertUnorderedList': 'Lista wypunktowana',
	'italic': 'Kursywa',
	'justifyCenter': 'Wyrównaj do środka',
	'justifyFull': 'Wyrównaj do lewej i prawej',
	'justifyLeft': 'Wyrównaj do lewej',
	'justifyRight': 'Wyrównaj do prawej',
	'outdent': 'Usuń wcięcie',
	'paste': 'Wklej',
	'redo': 'Ponów',
	'removeFormat': 'Usuń formatowanie',
	'selectAll': 'Wybierz wszystko',
	'strikethrough': 'Przekreślenie',
	'subscript': 'Indeks dolny',
	'superscript': 'Indeks górny',
	'underline': 'Podkreślenie',
	'undo': 'Cofnij',
	'unlink': 'Usuń odsyłacz',
	'createLink': 'Utwórz odsyłacz',
	'toggleDir': 'Przełącz kierunek',
	'insertImage': 'Wstaw obraz',
	'insertTable': 'Wstaw/edytuj tabelę',
	'toggleTableBorder': 'Przełącz ramkę tabeli',
	'deleteTable': 'Usuń tabelę',
	'tableProp': 'Właściwość tabeli',
	'htmlToggle': 'Kod źródłowy HTML',
	'foreColor': 'Kolor pierwszego planu',
	'hiliteColor': 'Kolor tła',
	'plainFormatBlock': 'Styl akapitu',
	'formatBlock': 'Styl akapitu',
	'fontSize': 'Wielkość czcionki',
	'fontName': 'Nazwa czcionki',
	'tabIndent': 'Wcięcie o tabulator',
	"fullScreen": "Przełącz pełny ekran",
	"viewSource": "Wyświetl kod źródłowy HTML",
	"print": "Drukuj",
	"newPage": "Nowa strona",
	/* Error messages */
	'systemShortcut': 'Działanie ${0} jest dostępne w tej przeglądarce wyłącznie przy użyciu skrótu klawiaturowego. Należy użyć klawiszy ${1}.',
	'ctrlKey':'Ctrl+${0}'
})

//end v1.x content
);

},
'dojo/cldr/nls/pl/gregorian':function(){
define(
//begin v1.x content
{
	"months-format-narrow": [
		"s",
		"l",
		"m",
		"k",
		"m",
		"c",
		"l",
		"s",
		"w",
		"p",
		"l",
		"g"
	],
	"field-weekday": "Dzień tygodnia",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-yMEd": "EEE, d.MM.yyyy",
	"dateFormatItem-MMMEd": "E, d MMM",
	"eraNarrow": [
		"p.n.e.",
		"n.e."
	],
	"dayPeriods-format-wide-earlyMorning": "nad ranem",
	"dayPeriods-format-wide-morning": "rano",
	"dateFormat-long": "d MMMM y",
	"months-format-wide": [
		"stycznia",
		"lutego",
		"marca",
		"kwietnia",
		"maja",
		"czerwca",
		"lipca",
		"sierpnia",
		"września",
		"października",
		"listopada",
		"grudnia"
	],
	"dayPeriods-format-wide-evening": "wieczorem",
	"dayPeriods-format-wide-pm": "PM",
	"dateFormat-full": "EEEE, d MMMM y",
	"dateFormatItem-Md": "d.MM",
	"dayPeriods-format-wide-noon": "w południe",
	"field-era": "Era",
	"dateFormatItem-yM": "MM.yyyy",
	"months-standAlone-wide": [
		"styczeń",
		"luty",
		"marzec",
		"kwiecień",
		"maj",
		"czerwiec",
		"lipiec",
		"sierpień",
		"wrzesień",
		"październik",
		"listopad",
		"grudzień"
	],
	"timeFormat-short": "HH:mm",
	"quarters-format-wide": [
		"I kwartał",
		"II kwartał",
		"III kwartał",
		"IV kwartał"
	],
	"timeFormat-long": "HH:mm:ss z",
	"field-year": "Rok",
	"dateFormatItem-yQ": "yyyy Q",
	"dateFormatItem-yyyyMMMM": "LLLL y",
	"field-hour": "Godzina",
	"dateFormatItem-MMdd": "d.MM",
	"months-format-abbr": [
		"sty",
		"lut",
		"mar",
		"kwi",
		"maj",
		"cze",
		"lip",
		"sie",
		"wrz",
		"paź",
		"lis",
		"gru"
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-full": "HH:mm:ss zzzz",
	"field-day-relative+0": "Dzisiaj",
	"field-day-relative+1": "Jutro",
	"field-day-relative+2": "Pojutrze",
	"field-day-relative+3": "Za trzy dni",
	"months-standAlone-abbr": [
		"sty",
		"lut",
		"mar",
		"kwi",
		"maj",
		"cze",
		"lip",
		"sie",
		"wrz",
		"paź",
		"lis",
		"gru"
	],
	"quarters-format-abbr": [
		"K1",
		"K2",
		"K3",
		"K4"
	],
	"quarters-standAlone-wide": [
		"I kwartał",
		"II kwartał",
		"III kwartał",
		"IV kwartał"
	],
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"niedziela",
		"poniedziałek",
		"wtorek",
		"środa",
		"czwartek",
		"piątek",
		"sobota"
	],
	"dateFormatItem-MMMMd": "d MMMM",
	"dateFormatItem-yyMMM": "MMM yy",
	"timeFormat-medium": "HH:mm:ss",
	"dateFormatItem-Hm": "HH:mm",
	"quarters-standAlone-abbr": [
		"1 kw.",
		"2 kw.",
		"3 kw.",
		"4 kw."
	],
	"eraAbbr": [
		"p.n.e.",
		"n.e."
	],
	"field-minute": "Minuta",
	"field-dayperiod": "Dayperiod",
	"days-standAlone-abbr": [
		"niedz.",
		"pon.",
		"wt.",
		"śr.",
		"czw.",
		"pt.",
		"sob."
	],
	"dayPeriods-format-wide-night": "w nocy",
	"dateFormatItem-d": "d",
	"dateFormatItem-ms": "mm:ss",
	"field-day-relative+-1": "Wczoraj",
	"dateFormatItem-h": "hh a",
	"field-day-relative+-2": "Przedwczoraj",
	"field-day-relative+-3": "Trzy dni temu",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MEd": "E, d.MM",
	"dayPeriods-format-wide-lateMorning": "przed południem",
	"dateFormatItem-yMMMM": "LLLL y",
	"field-day": "Dzień",
	"days-format-wide": [
		"niedziela",
		"poniedziałek",
		"wtorek",
		"środa",
		"czwartek",
		"piątek",
		"sobota"
	],
	"field-zone": "Strefa",
	"dateFormatItem-yyyyMM": "MM.yyyy",
	"dateFormatItem-y": "y",
	"months-standAlone-narrow": [
		"s",
		"l",
		"m",
		"k",
		"m",
		"c",
		"l",
		"s",
		"w",
		"p",
		"l",
		"g"
	],
	"dateFormatItem-hm": "hh:mm a",
	"days-format-abbr": [
		"niedz.",
		"pon.",
		"wt.",
		"śr.",
		"czw.",
		"pt.",
		"sob."
	],
	"eraNames": [
		"p.n.e.",
		"n.e."
	],
	"days-format-narrow": [
		"N",
		"P",
		"W",
		"Ś",
		"C",
		"P",
		"S"
	],
	"field-month": "Miesiąc",
	"days-standAlone-narrow": [
		"N",
		"P",
		"W",
		"Ś",
		"C",
		"P",
		"S"
	],
	"dateFormatItem-MMM": "LLL",
	"dayPeriods-format-wide-am": "AM",
	"dateFormat-short": "dd.MM.yyyy",
	"dayPeriods-format-wide-afternoon": "po południu",
	"field-second": "Sekunda",
	"dateFormatItem-yMMMEd": "EEE, d MMM y",
	"dateFormatItem-Ed": "E, d",
	"field-week": "Tydzień",
	"dateFormat-medium": "d MMM y",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-hms": "hh:mm:ss a"
}
//end v1.x content
);
},
'dijit/nls/pl/loading':function(){
define(
//begin v1.x content
({
	loadingState: "Ładowanie...",
	errorState: "Niestety, wystąpił błąd"
})
//end v1.x content
);

},
'dojo/nls/pl/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "bladoniebieski",
antiquewhite: "biel antyczna",
aqua: "morski",
aquamarine: "akwamaryna",
azure: "lazurowy",
beige: "beżowy",
bisque: "biszkoptowy",
black: "czarny",
blanchedalmond: "migdałowy",
blue: "niebieski",
blueviolet: "błękitnofiołkowy",
brown: "brązowy",
burlywood: "kolor drewna",
cadetblue: "niebieskoszary",
chartreuse: "żółtooliwkowy",
chocolate: "czekoladowy",
coral: "koralowy",
cornflowerblue: "chabrowy",
cornsilk: "kukurydziany",
crimson: "karmazynowy",
cyan: "niebieskozielony",
darkblue: "ciemnoniebieski",
darkcyan: "ciemnoniebieskozielony",
darkgoldenrod: "ciemne stare złoto",
darkgray: "ciemnoszary",
darkgreen: "ciemnozielony",
darkgrey: "ciemnoszary", // same as darkgray
darkkhaki: "ciemny khaki",
darkmagenta: "ciemnoamarantowy",
darkolivegreen: "ciemnooliwkowy",
darkorange: "ciemnopomarańczowy",
darkorchid: "ciemna orchidea",
darkred: "ciemnoczerwony",
darksalmon: "ciemnołososiowy",
darkseagreen: "ciemna zieleń morska",
darkslateblue: "ciemny gołębi",
darkslategray: "ciemny mysi",
darkslategrey: "ciemny mysi", // same as darkslategray
darkturquoise: "mlecznoturkusowy",
darkviolet: "ciemnofiołkowy",
deeppink: "głęboki różowy",
deepskyblue: "intensywny błękit nieba",
dimgray: "przyciemniony szary",
dimgrey: "przyciemniony szary", // same as dimgray
dodgerblue: "błękit Dodgers",
firebrick: "ceglasty",
floralwhite: "kwiatowa biel",
forestgreen: "leśna zieleń",
fuchsia: "fuksjowy",
gainsboro: "bladoszary",
ghostwhite: "bladobiały",
gold: "złoty",
goldenrod: "stare złoto",
gray: "szary",
green: "zielony",
greenyellow: "zielonożółty",
grey: "szary", // same as gray
honeydew: "miodowy",
hotpink: "odblaskoworóżowy",
indianred: "kasztanowy",
indigo: "indygo",
ivory: "kość słoniowa",
khaki: "khaki",
lavender: "lawendowy",
lavenderblush: "lawendowocielisty",
lawngreen: "trawiasty",
lemonchiffon: "cytrynowy",
lightblue: "jasnoniebieski",
lightcoral: "jasnokoralowy",
lightcyan: "jasnoniebieskozielony",
lightgoldenrodyellow: "jasnożółte stare złoto",
lightgray: "jasnoszary",
lightgreen: "jasnozielony",
lightgrey: "jasnoszary", // same as lightgray
lightpink: "jasnoróżowy",
lightsalmon: "jasnołososiowy",
lightseagreen: "jasna zieleń morska",
lightskyblue: "jasny błękit nieba",
lightslategray: "jasny mysi",
lightslategrey: "jasny mysi", // same as lightslategray
lightsteelblue: "jasnostalowoniebieski",
lightyellow: "jasnożółty",
lime: "limonkowy",
limegreen: "zielony limonkowy",
linen: "lniany",
magenta: "amarantowy",
maroon: "kasztanowy",
mediumaquamarine: "średnia akwamaryna",
mediumblue: "ciemnochabrowy",
mediumorchid: "średnia orchidea",
mediumpurple: "średni fioletowy",
mediumseagreen: "średnia zieleń morska",
mediumslateblue: "średni gołębi",
mediumspringgreen: "średnia wiosenna zieleń",
mediumturquoise: "średni turkusowy",
mediumvioletred: "średni fiołkowowoczerwony",
midnightblue: "granatowoczarny",
mintcream: "jasnomiętowy",
mistyrose: "bladoróżany",
moccasin: "mokasynowy",
navajowhite: "piaskowy",
navy: "granatowy",
oldlace: "bladopomarańczowy",
olive: "oliwkowy",
olivedrab: "oliwkowa zieleń",
orange: "pomarańczowy",
orangered: "pomarańczowoczerwony",
orchid: "orchidea",
palegoldenrod: "blade stare złoto",
palegreen: "bladozielony",
paleturquoise: "bladoturkusowy",
palevioletred: "blady fiołkowoczerwony",
papayawhip: "papaja",
peachpuff: "brzoskwiniowy",
peru: "jasnobrązowy",
pink: "różowy",
plum: "śliwkowy",
powderblue: "jasnobladobłękitny",
purple: "fioletowy",
red: "czerwony",
rosybrown: "różowobrązowy",
royalblue: "królewski błękit",
saddlebrown: "brąz skórzany",
salmon: "łososiowy",
sandybrown: "piaskowy brąz",
seagreen: "zieleń morska",
seashell: "matowoliliowy",
sienna: "siena",
silver: "srebrny",
skyblue: "błękit nieba",
slateblue: "gołębi",
slategray: "mysi",
slategrey: "mysi", // same as slategray
snow: "śnieżny",
springgreen: "wiosenna zieleń",
steelblue: "stalowoniebieski",
tan: "śniady",
teal: "zielonomodry",
thistle: "bladofioletowy",
tomato: "pomidorowy",
transparent: "przezroczysty",
turquoise: "turkusowy",
violet: "fiołkowy",
wheat: "pszeniczny",
white: "biały",
whitesmoke: "przydymiony biały",
yellow: "żółty",
yellowgreen: "żółtozielony"
})
//end v1.x content
);

},
'dojo/cldr/nls/pl/number':function(){
define(
//begin v1.x content
{
	"group": " ",
	"percentSign": "%",
	"exponential": "E",
	"scientificFormat": "#E0",
	"percentFormat": "#,##0%",
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
'dijit/_editor/nls/pl/FontChoice':function(){
define(
"dijit/_editor/nls/pl/FontChoice", //begin v1.x content
({
	fontSize: "Wielkość",
	fontName: "Czcionka",
	formatBlock: "Format",

	serif: "szeryfowa",
	"sans-serif": "bezszeryfowa",
	monospace: "czcionka o stałej szerokości",
	cursive: "kursywa",
	fantasy: "fantazyjna",

	noFormat: "Brak",
	p: "Akapit",
	h1: "Nagłówek",
	h2: "Nagłówek 2-go poziomu",
	h3: "Nagłówek 3-go poziomu",
	pre: "Wstępnie sformatowane",

	1: "najmniejsza",
	2: "mniejsza",
	3: "mała",
	4: "średnia",
	5: "duża",
	6: "większa",
	7: "największa"
})
//end v1.x content
);

},
'dojo/cldr/nls/pl/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "dolar hongkoński",
	"CHF_displayName": "frank szwajcarski",
	"CAD_displayName": "dolar kanadyjski",
	"CNY_displayName": "juan renminbi",
	"AUD_displayName": "dolar australijski",
	"JPY_displayName": "jen japoński",
	"USD_displayName": "dolar amerykański ",
	"GBP_displayName": "funt szterling",
	"EUR_displayName": "euro"
}
//end v1.x content
);
},
'dijit/form/nls/pl/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "Poprzednie wybory",
		nextMessage: "Więcej wyborów"
})
//end v1.x content
);

},
'dijit/nls/pl/common':function(){
define(
//begin v1.x content
({
	buttonOk: "OK",
	buttonCancel: "Anuluj",
	buttonSave: "Zapisz",
	itemClose: "Zamknij"
})
//end v1.x content
);

}}});
define("dijit/nls/dijit-all_pl", [], 1);
