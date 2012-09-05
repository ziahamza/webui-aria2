var utils = {
	randStr: function() {
		var str = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			str[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		return str.join("");
	},
	mixin: function(fromObj, toObj) {
		for (var key in toObj) {
			if (toObj.hasOwnProperty(key) && fromObj[key]) {
				toObj[key] = fromObj[key];
			}
		}
		return toObj;
	}
};
