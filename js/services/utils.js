app.factory('$utils', function() {
  return {
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

    // change time units
    changeTime: function(time) {
      time = parseInt(time);
      if (!time) return " infinite";
      if (time < 60) return time + " s";
      else if (time < 60*60) return (time/60).toFixed(2) + " min";
      else if (time < 60*60*24) return (time/(60*60)).toFixed(2) + " hours";
      else return (time/(60*60*24)).toFixed(2) + " days!";
    },

    // change length units
    changeLength: function(len, pref) {
      len = parseInt(len);
      if(len <= (1<<10)) return len  + " " + pref;
      else if(len <= (1<<20)) return (len/(1<<10)).toFixed(1) + " K" + pref;
      else if(len <= (1<<30)) return (len/(1<<20)).toFixed(1) + " M" + pref;
      else return (len/(1<<30)).toFixed(1) + " G" + pref;
    },

    // get download chunks from aria2 bitfield
    getChunksFromHex: function(bitfield, numOfPieces) {
      var chunks =  [], len = 0, numPieces = parseInt(numOfPieces);
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
