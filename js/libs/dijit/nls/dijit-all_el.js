require({cache:{
'dijit/form/nls/el/validate':function(){
define(
//begin v1.x content
({
	invalidMessage: "Η τιμή που καταχωρήσατε δεν είναι έγκυρη.",
	missingMessage: "Η τιμή αυτή πρέπει απαραίτητα να καθοριστεί.",
	rangeMessage: "Η τιμή αυτή δεν ανήκει στο εύρος έγκυρων τιμών."
})
//end v1.x content
);

},
'dijit/_editor/nls/el/commands':function(){
define(
//begin v1.x content
({
	'bold': 'Έντονα',
	'copy': 'Αντιγραφή',
	'cut': 'Αποκοπή',
	'delete': 'Διαγραφή',
	'indent': 'Εσοχή',
	'insertHorizontalRule': 'Οριζόντια γραμμή',
	'insertOrderedList': 'Αριθμημένη λίστα',
	'insertUnorderedList': 'Λίστα με κουκίδες',
	'italic': 'Πλάγια',
	'justifyCenter': 'Στοίχιση στο κέντρο',
	'justifyFull': 'Πλήρης στοίχιση',
	'justifyLeft': 'Στοίχιση αριστερά',
	'justifyRight': 'Στοίχιση δεξιά',
	'outdent': 'Μείωση περιθωρίου',
	'paste': 'Επικόλληση',
	'redo': 'Ακύρωση αναίρεσης',
	'removeFormat': 'Αφαίρεση μορφοποίησης',
	'selectAll': 'Επιλογή όλων',
	'strikethrough': 'Διαγράμμιση',
	'subscript': 'Δείκτης',
	'superscript': 'Εκθέτης',
	'underline': 'Υπογράμμιση',
	'undo': 'Αναίρεση',
	'unlink': 'Αφαίρεση σύνδεσης',
	'createLink': 'Δημιουργία σύνδεσης',
	'toggleDir': 'Εναλλαγή κατεύθυνσης',
	'insertImage': 'Εισαγωγή εικόνας',
	'insertTable': 'Εισαγωγή/Τροποποίηση πίνακα',
	'toggleTableBorder': 'Εναλλαγή εμφάνισης περιγράμματος πίνακα',
	'deleteTable': 'Διαγραφή πίνακα',
	'tableProp': 'Ιδιότητα πίνακα',
	'htmlToggle': 'Πρωτογενής κώδικας HTML',
	'foreColor': 'Χρώμα προσκηνίου',
	'hiliteColor': 'Χρώμα φόντου',
	'plainFormatBlock': 'Στυλ παραγράφου',
	'formatBlock': 'Στυλ παραγράφου',
	'fontSize': 'Μέγεθος γραμματοσειράς',
	'fontName': 'Όνομα γραμματοσειράς',
	'tabIndent': 'Εσοχή με το πλήκτρο Tab',
	"fullScreen": "Εναλλαγή κατάστασης πλήρους οθόνης",
	"viewSource": "Προβολή προέλευσης HTML",
	"print": "Εκτύπωση",
	"newPage": "Νέα σελίδα",
	/* Error messages */
	'systemShortcut': 'Σε αυτό το πρόγραμμα πλοήγησης, η ενέργεια "${0}" είναι διαθέσιμη μόνο με τη χρήση μιας συντόμευσης πληκτρολογίου. Χρησιμοποιήστε τη συντόμευση ${1}.'
})

//end v1.x content
);

},
'dojo/cldr/nls/el/gregorian':function(){
define(
//begin v1.x content
{
	"months-format-narrow": [
		"Ι",
		"Φ",
		"Μ",
		"Α",
		"Μ",
		"Ι",
		"Ι",
		"Α",
		"Σ",
		"Ο",
		"Ν",
		"Δ"
	],
	"field-weekday": "Ημέρα εβδομάδας",
	"dateFormatItem-yyQQQQ": "QQQQ yy",
	"dateFormatItem-yQQQ": "y QQQ",
	"dateFormatItem-yMEd": "EEE, d/M/yyyy",
	"dateFormatItem-MMMEd": "E, d MMM",
	"eraNarrow": [
		"π.Χ.",
		"μ.Χ."
	],
	"dateFormat-long": "d MMMM y",
	"months-format-wide": [
		"Ιανουαρίου",
		"Φεβρουαρίου",
		"Μαρτίου",
		"Απριλίου",
		"Μαΐου",
		"Ιουνίου",
		"Ιουλίου",
		"Αυγούστου",
		"Σεπτεμβρίου",
		"Οκτωβρίου",
		"Νοεμβρίου",
		"Δεκεμβρίου"
	],
	"dateFormatItem-EEEd": "EEE d",
	"dayPeriods-format-wide-pm": "μ.μ.",
	"dateFormat-full": "EEEE, d MMMM y",
	"dateFormatItem-Md": "d/M",
	"field-era": "Περίοδος",
	"dateFormatItem-yM": "M/yyyy",
	"months-standAlone-wide": [
		"Ιανουάριος",
		"Φεβρουάριος",
		"Μάρτιος",
		"Απρίλιος",
		"Μάιος",
		"Ιούνιος",
		"Ιούλιος",
		"Αύγουστος",
		"Σεπτέμβριος",
		"Οκτώβριος",
		"Νοέμβριος",
		"Δεκέμβριος"
	],
	"timeFormat-short": "h:mm a",
	"quarters-format-wide": [
		"1ο τρίμηνο",
		"2ο τρίμηνο",
		"3ο τρίμηνο",
		"4ο τρίμηνο"
	],
	"timeFormat-long": "h:mm:ss a z",
	"field-year": "Έτος",
	"dateFormatItem-yMMM": "LLL y",
	"dateFormatItem-yQ": "y Q",
	"dateFormatItem-yyyyMMMM": "LLLL y",
	"field-hour": "Ώρα",
	"dateFormatItem-MMdd": "dd/MM",
	"months-format-abbr": [
		"Ιαν",
		"Φεβ",
		"Μαρ",
		"Απρ",
		"Μαϊ",
		"Ιουν",
		"Ιουλ",
		"Αυγ",
		"Σεπ",
		"Οκτ",
		"Νοε",
		"Δεκ"
	],
	"dateFormatItem-yyQ": "Q yy",
	"timeFormat-full": "h:mm:ss a zzzz",
	"field-day-relative+0": "Σήμερα",
	"field-day-relative+1": "Αύριο",
	"field-day-relative+2": "Μεθαύριο",
	"dateFormatItem-H": "HH",
	"field-day-relative+3": "Σε τρεις ημέρες από τώρα",
	"months-standAlone-abbr": [
		"Ιαν",
		"Φεβ",
		"Μαρ",
		"Απρ",
		"Μαϊ",
		"Ιουν",
		"Ιουλ",
		"Αυγ",
		"Σεπ",
		"Οκτ",
		"Νοε",
		"Δεκ"
	],
	"quarters-format-abbr": [
		"Τ1",
		"Τ2",
		"Τ3",
		"Τ4"
	],
	"quarters-standAlone-wide": [
		"1ο τρίμηνο",
		"2ο τρίμηνο",
		"3ο τρίμηνο",
		"4ο τρίμηνο"
	],
	"dateFormatItem-HHmmss": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"days-standAlone-wide": [
		"Κυριακή",
		"Δευτέρα",
		"Τρίτη",
		"Τετάρτη",
		"Πέμπτη",
		"Παρασκευή",
		"Σάββατο"
	],
	"dateFormatItem-MMMMd": "d MMMM",
	"dateFormatItem-yyMMM": "LLL yy",
	"timeFormat-medium": "h:mm:ss a",
	"dateFormatItem-Hm": "HH:mm",
	"quarters-standAlone-abbr": [
		"Τ1",
		"Τ2",
		"Τ3",
		"Τ4"
	],
	"eraAbbr": [
		"π.Χ.",
		"μ.Χ."
	],
	"field-minute": "Λεπτό",
	"field-dayperiod": "π.μ./μ.μ.",
	"days-standAlone-abbr": [
		"Κυρ",
		"Δευ",
		"Τρι",
		"Τετ",
		"Πεμ",
		"Παρ",
		"Σαβ"
	],
	"dateFormatItem-d": "d",
	"dateFormatItem-ms": "mm:ss",
	"field-day-relative+-1": "Χθες",
	"field-day-relative+-2": "Προχθές",
	"field-day-relative+-3": "Πριν από τρεις ημέρες",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MEd": "E, d/M",
	"field-day": "Ημέρα",
	"days-format-wide": [
		"Κυριακή",
		"Δευτέρα",
		"Τρίτη",
		"Τετάρτη",
		"Πέμπτη",
		"Παρασκευή",
		"Σάββατο"
	],
	"field-zone": "Ζώνη",
	"dateFormatItem-yyyyMM": "MM/yyyy",
	"dateFormatItem-y": "y",
	"months-standAlone-narrow": [
		"Ι",
		"Φ",
		"Μ",
		"Α",
		"Μ",
		"Ι",
		"Ι",
		"Α",
		"Σ",
		"Ο",
		"Ν",
		"Δ"
	],
	"dateFormatItem-yyMM": "MM/yy",
	"days-format-abbr": [
		"Κυρ",
		"Δευ",
		"Τρι",
		"Τετ",
		"Πεμ",
		"Παρ",
		"Σαβ"
	],
	"eraNames": [
		"π.Χ.",
		"μ.Χ."
	],
	"days-format-narrow": [
		"Κ",
		"Δ",
		"Τ",
		"Τ",
		"Π",
		"Π",
		"Σ"
	],
	"field-month": "Μήνας",
	"days-standAlone-narrow": [
		"Κ",
		"Δ",
		"Τ",
		"Τ",
		"Π",
		"Π",
		"Σ"
	],
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-HHmm": "HH:mm",
	"dayPeriods-format-wide-am": "π.μ.",
	"dateFormatItem-MMMMEd": "E, d MMMM",
	"dateFormatItem-MMMMdd": "dd MMMM",
	"dateFormat-short": "d/M/yy",
	"field-second": "Δευτερόλεπτο",
	"dateFormatItem-yMMMEd": "EEE, d MMM y",
	"dateFormatItem-Ed": "E d",
	"field-week": "Εβδομάδα",
	"dateFormat-medium": "d MMM y",
	"dateFormatItem-mmss": "mm:ss",
	"dateFormatItem-yyyy": "y"
}
//end v1.x content
);
},
'dijit/nls/el/loading':function(){
define(
//begin v1.x content
({
	loadingState: "Φόρτωση...",
	errorState: "Σας ζητούμε συγνώμη, παρουσιάστηκε σφάλμα"
})
//end v1.x content
);

},
'dojo/nls/el/colors':function(){
define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "σιέλ",
antiquewhite: "ξεθωριασμένο λευκό",
aqua: "γαλάζιο",
aquamarine: "γαλαζοπράσινο",
azure: "μπλε του ουρανού",
beige: "μπεζ",
bisque: "σκούρο κρεμ",
black: "μαύρο",
blanchedalmond: "ζαχαρί",
blue: "μπλε",
blueviolet: "βιολετί",
brown: "καφέ",
burlywood: "καφέ του ξύλου",
cadetblue: "μπλε του στρατού",
chartreuse: "φωτεινό κιτρινοπράσινο",
chocolate: "σοκολατί",
coral: "κοραλί",
cornflowerblue: "μεσαίο μπλε",
cornsilk: "ασημί του καλαμποκιού",
crimson: "βαθύ κόκκινο",
cyan: "κυανό",
darkblue: "σκούρο μπλε",
darkcyan: "σκούρο κυανό",
darkgoldenrod: "σκούρο χρυσοκίτρινο",
darkgray: "σκούρο γκρι",
darkgreen: "σκούρο πράσινο",
darkgrey: "σκούρο γκρι", // same as darkgray
darkkhaki: "σκούρο χακί",
darkmagenta: "σκούρο ματζέντα",
darkolivegreen: "σκούρο πράσινο λαδί",
darkorange: "σκούρο πορτοκαλί",
darkorchid: "σκούρα ορχιδέα",
darkred: "σκούρο κόκκινο",
darksalmon: "σκούρο σομόν",
darkseagreen: "σκούρο πράσινο της θάλασσας",
darkslateblue: "σκούρο μεταλλικό μπλε",
darkslategray: "σκούρο μεταλλικό γκρι",
darkslategrey: "σκούρο μεταλλικό γκρι", // same as darkslategray
darkturquoise: "σκούρο τυρκουάζ",
darkviolet: "σκούρο βιολετί",
deeppink: "βαθύ ροζ",
deepskyblue: "βαθύ μπλε το ουρανού",
dimgray: "αχνό γκρι",
dimgrey: "αχνό γκρι", // same as dimgray
dodgerblue: "σκούρο ελεκτρίκ",
firebrick: "κεραμιδί",
floralwhite: "λευκό των ανθών",
forestgreen: "πράσινο του δάσους",
fuchsia: "φούξια",
gainsboro: "γκρι σιέλ",
ghostwhite: "άσπρο",
gold: "χρυσαφί",
goldenrod: "χρυσοκίτρινο",
gray: "γκρι",
green: "πράσινο",
greenyellow: "πρασινοκίτρινο",
grey: "γκρι", // same as gray
honeydew: "μελί",
hotpink: "έντονο ροζ",
indianred: "ινδικό κόκκινο",
indigo: "λουλακί",
ivory: "ιβουάρ",
khaki: "χακί",
lavender: "λίλα",
lavenderblush: "μωβ λεβάντας",
lawngreen: "σκούρο πράσινο",
lemonchiffon: "λεμονί",
lightblue: "ανοιχτό μπλε",
lightcoral: "ανοιχτό κοραλί",
lightcyan: "ανοιχτό κυανό",
lightgoldenrodyellow: "ανοιχτό χρυσοκίτρινο",
lightgray: "ανοιχτό γκρι",
lightgreen: "ανοιχτό πράσινο",
lightgrey: "ανοιχτό γκρι", // same as lightgray
lightpink: "ανοιχτό ροζ",
lightsalmon: "ανοιχτό σομόν",
lightseagreen: "ανοιχτό πράσινο της θάλασσας",
lightskyblue: "ανοιχτό μπλε το ουρανού",
lightslategray: "ανοιχτό μεταλλικό γκρι",
lightslategrey: "ανοιχτό μεταλλικό γκρι", // same as lightslategray
lightsteelblue: "ανοιχτό μπλε ατσαλιού",
lightyellow: "ανοιχτό κίτρινο",
lime: "λαχανί",
limegreen: "πράσινο λαχανί",
linen: "σπαγγί",
magenta: "ματζέντα",
maroon: "βυσσινί",
mediumaquamarine: "μεσαίο γαλαζοπράσινο",
mediumblue: "μεσαίο μπλε",
mediumorchid: "μεσαία ορχιδέα",
mediumpurple: "μεσαίο μωβ",
mediumseagreen: "μεσαίο πράσινο της θάλασσας",
mediumslateblue: "μεσαίο μεταλλικό μπλε",
mediumspringgreen: "μεσαίο πράσινο της άνοιξης",
mediumturquoise: "μεσαίο τυρκουάζ",
mediumvioletred: "μεσαίο κόκκινο βιολετί",
midnightblue: "πολύ σκούρο μπλε",
mintcream: "βεραμάν",
mistyrose: "τριανταφυλλί",
moccasin: "μόκα",
navajowhite: "άσπρο Ναβάχο",
navy: "μπλε του ναυτικού",
oldlace: "εκρού",
olive: "πράσινο λαδί",
olivedrab: "λαδί",
orange: "πορτοκαλί",
orangered: "πορτοκαλοκόκκινο",
orchid: "ορχιδέα",
palegoldenrod: "αχνό χρυσοκίτρινο",
palegreen: "αχνό πράσινο",
paleturquoise: "αχνό τυρκουάζ",
palevioletred: "αχνό κόκκινο βιολετί",
papayawhip: "αχνό ροζ",
peachpuff: "ροδακινί",
peru: "περού",
pink: "ροζ",
plum: "δαμασκηνί",
powderblue: "αχνό μπλε",
purple: "μωβ",
red: "κόκκινο",
rosybrown: "καστανό",
royalblue: "έντονο μπλε",
saddlebrown: "βαθύ καφέ",
salmon: "σομόν",
sandybrown: "μπεζ της άμμου",
seagreen: "πράσινο της θάλασσας",
seashell: "κοχύλι",
sienna: "καφεκίτρινο",
silver: "ασημί",
skyblue: "μπλε του ουρανού",
slateblue: "μεταλλικό μπλε",
slategray: "μεταλλικό γκρι",
slategrey: "μεταλλικό γκρι", // same as slategray
snow: "χιονί",
springgreen: "πράσινο της άνοιξης",
steelblue: "μπλε ατσαλιού",
tan: "ώχρα",
teal: "πετρόλ",
thistle: "μωβ βιολετί",
tomato: "κόκκινο της ντομάτας",
transparent: "διαφανές",
turquoise: "τυρκουάζ",
violet: "βιολετί",
wheat: "σταρένιο",
white: "λευκό",
whitesmoke: "λευκός καπνός",
yellow: "κίτρινο",
yellowgreen: "κιτρινοπράσινο"
})
//end v1.x content
);

},
'dojo/cldr/nls/el/number':function(){
define(
//begin v1.x content
{
	"group": ".",
	"percentSign": "%",
	"exponential": "e",
	"percentFormat": "#,##0%",
	"list": ",",
	"infinity": "∞",
	"patternDigit": "#",
	"minusSign": "-",
	"decimal": ",",
	"nan": "NaN",
	"nativeZeroDigit": "0",
	"perMille": "‰",
	"currencyFormat": "#,##0.00 ¤",
	"plusSign": "+"
}
//end v1.x content
);
},
'dijit/_editor/nls/el/FontChoice':function(){
define(
"dijit/_editor/nls/el/FontChoice", //begin v1.x content
({
	fontSize: "Μέγεθος",
	fontName: "Γραμματοσειρά",
	formatBlock: "Μορφή",

	serif: "με πατούρες (serif)",
	"sans-serif": "χωρίς πατούρες (sans-serif)",
	monospace: "σταθερού πλάτους",
	cursive: "πλάγιοι",
	fantasy: "φαντασίας",

	noFormat: "Χωρίς",
	p: "Παράγραφος",
	h1: "Επικεφαλίδα",
	h2: "Δευτερεύουσα επικεφαλίδα",
	h3: "Δευτερεύουσα επικεφαλίδα τρίτου επιπέδου",
	pre: "Προ-μορφοποιημένο",

	1: "xx-μικρά",
	2: "x-μικρά",
	3: "μικρά",
	4: "μεσαία",
	5: "μεγάλα",
	6: "x-μεγάλα",
	7: "xx-μεγάλα"
})
//end v1.x content
);

},
'dojo/cldr/nls/el/currency':function(){
define(
//begin v1.x content
{
	"HKD_displayName": "Δολάριο Χονγκ Κονγκ",
	"CHF_displayName": "Φράγκο Ελβετίας",
	"CAD_displayName": "Δολάριο Καναδά",
	"CNY_displayName": "Γιουάν Ρενμίμπι Κίνας",
	"AUD_displayName": "Δολάριο Αυστραλίας",
	"JPY_displayName": "Γιεν Ιαπωνίας",
	"USD_displayName": "Δολάριο ΗΠΑ",
	"GBP_displayName": "Λίρα Στερλίνα Βρετανίας",
	"EUR_displayName": "Ευρώ"
}
//end v1.x content
);
},
'dijit/form/nls/el/ComboBox':function(){
define(
//begin v1.x content
({
		previousMessage: "Προηγούμενες επιλογές",
		nextMessage: "Περισσότερες επιλογές"
})
//end v1.x content
);

},
'dijit/nls/el/common':function(){
define(
//begin v1.x content
({
	buttonOk: "ΟΚ",
	buttonCancel: "Ακύρωση",
	buttonSave: "Αποθήκευση",
	itemClose: "Κλείσιμο"
})
//end v1.x content
);

}}});
define("dijit/nls/dijit-all_el", [], 1);
