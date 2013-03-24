angular.module('webui.services.utils', [])
.factory('$utils', function() {
  return {
    // saves the key value pair in cookies
    setCookie: function(key, value) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + 30 * 12);
      var cvalue = escape(JSON.stringify(value)) + "; expires=" + exdate.toUTCString();
      document.cookie = key + "=" + cvalue;
    },
    // gets a value for a key stored in cookies
    getCookie: function(key) {
      var chunks = document.cookie.split(";");
      for (var i = 0; i < chunks.length; i++) {
        var ckey = chunks[i].substr(0, chunks[i].indexOf("=")).replace(/^\s+|\s+$/g,"");
        var cvalue = chunks[i].substr(chunks[i].indexOf("=") + 1);
        if (key == ckey) {
          return JSON.parse(unescape(cvalue));
        }
      }
    },
    getFileName: function(path) {
      var seed = path.split(/[/\\]/);
      return seed[seed.length - 1];
    },
    randStr: function() {
      var str = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        str[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      return str.join("");
    },

    // maps the array in place to the destination
    // arr, dest (optional): array
    // func: a merge mapping  func, see ctrls/download.js
    mergeMap: function(arr, dest, func) {
      if (!dest) dest = [];

      for (var i = 0; i < dest.length; i++) {
        if (i >= arr.length) {
          // remove the deleted downloads
          dest.splice(i, dest.length - arr.length);
          break;
        }
        if (!dest[i]) dest[i] = {};

        func(arr[i], dest[i]);
      }

      // insert newly created downloads
      while (i < arr.length) {
        dest.push(func(arr[i++]));
      }

      return dest;
    },

    // get download chunks from aria2 bitfield
    getChunksFromHex: function(bitfield, numOfPieces) {
      var chunks =  [], len = 0, numPieces = parseInt(numOfPieces);
      if (!bitfield) return [];

      var totalDownloaded = 0;
      if (numPieces > 1) {
        var chunk_ratio = 1 / numPieces;
        var piecesProcessed = 0;
        for (var i = 0; i < bitfield.length; i++) {
          var hex = parseInt(bitfield[i], 16);
          for (var j = 1; j <= 4; j++) {
            var bit = hex & (1 << (4 - j));
            if (bit) totalDownloaded++;
            var prog = !!bit;
            if (len >= 1 && chunks[len - 1].show == prog) {
              chunks[len - 1].ratio += chunk_ratio;
            }
            else {
              chunks.push({
                ratio: chunk_ratio,
                show: prog
              });
              len++;
            }
            piecesProcessed++;
            if (piecesProcessed == numPieces)
              return chunks;
          }
        }
      }
      return chunks;
    }
  };
});
