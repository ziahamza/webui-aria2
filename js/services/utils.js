angular.module('webui.services.utils', ['webui.services.configuration'])
.factory('$utils', ['$filter', '$name', '$titlePattern', function(filter, $name, $titlePattern) {
  var rnd16 = (function() {
    "use strict";
    var rndBuffer = new Uint8Array(16);
    var rnd16Weak = function() {
      for (var i = 0, r; i < 16; i++) {
        if (!(i % 0x3)) r = Math.random() * 0x100000000 | 0;
        rndBuffer[i] = r >>> ((i & 0x3) << 0x3) & 0xff;
      }
      return rndBuffer;
    };

    if (!window.crypto || !crypto.getRandomValues) {
      return rnd16Weak;
    }
    return function() {
      try {
        crypto.getRandomValues(rndBuffer);
        return rndBuffer;
      }
      catch (ex) {
        // Entropy might be exhausted
        return rnd16Weak();
      }
    };
  })();

  var utils = {

    fmtsize: function(len) {
      len = +len; // coerce to number
      if (len <= 1024) {
        return len.toFixed(0)  + " B";
      }
      len /= 1024;
      if (len <= 1024) {
        return len.toFixed(1) + " KB"
      }
      len /= 1024;
      if (len <= 1024) {
        return len.toFixed(2) + " MB";
      }
      len /= 1024;
      return len.toFixed(3) + " GB";
    },

    fmtspeed: function(speed) {
      return utils.fmtsize(speed) + "/s";
    },
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

      return null;
    },
    getFileName: function(path) {
      var seed = path.split(/[/\\]/);
      return seed[seed.length - 1];
    },
    uuid: (function() {
      var bt = [];
      for (var i = 0; i <  0x100; ++i) {
        bt.push((i + 0x100).toString(16).substr(1));
      }
      Object.freeze(bt);

      return function() {
        var r = rnd16();
        r[6] = (r[6] & 0xf) | 0x40; // Version 4
        r[8] = (r[8] & 0x3f) | 0x80; // Version 4y
        return bt[r[0]] + bt[r[1]] + bt[r[2]] + bt[r[3]] + "-" +
          bt[r[4]] + bt[r[5]] + "-" +
          bt[r[6]] + bt[r[7]] + "-" +
          bt[r[8]] + bt[r[9]] + "-" +
          bt[r[10]] + bt[r[11]] + bt[r[12]] + bt[r[13]] + bt[r[14]] + bt[r[15]];
      };
    })(),
    randStr: function() {
      return utils.uuid();
    },

    // maps the array in place to the destination
    // arr, dest (optional): array
    // func: a merge mapping  func, see ctrls/download.js
    mergeMap: function(arr, dest, func) {
      if (!dest) {
        dest = [];
      }

      for (var i = 0, e = Math.min(arr.length, dest.length); i < e; ++i) {
        func(arr[i], dest[i]);
      }

      // Insert newly created downloads
      while (i < arr.length) {
        dest.push(func(arr[i++]));
      }

      // Truncate if necessary.
      dest.length = arr.length;

      return dest;
    },
    // get info title from global statistics
    getTitle: function(stats) {
        if(!stats) {
            stats = {};
        }
        return $titlePattern
            .replace('{active}', stats.numActive || '⌛')
            .replace('{waiting}', stats.numWaiting || '⌛')
            .replace('{download_speed}', utils.fmtspeed(stats.downloadSpeed) || '⌛')
            .replace('{upload_speed}', utils.fmtspeed(stats.uploadSpeed) || '⌛')
            .replace('{stopped}', stats.numStopped || '⌛')
            .replace('{name}', $name);
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
  return utils;
}]);
