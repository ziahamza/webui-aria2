angular
  .module('webui.services.errors', [])
  .value('$getErrorStatus', function(errorCode) {
    // normalize it to 0
    errorCode = errorCode - 1;
    switch(errorCode) {
      case 0:
        return "download was successful";
      case 1:
        return "unknown error occurred";
      case 2:
        return "time out occurred";
      case 3:
        return "resource was not found";
      case 4:
        return 'aria2 saw the specified number of "resource not found" error. See --max-file-not-found option';
      case 5:
        return "download aborted because download speed was too slow. See --lowest-speed-limit option";
      case 6:
        return "there were unfinished downloads";
      case 7:
        return "remote server did not support resume when resume was required to complete download";
      case 8:
        return "not enough disk space available";
      case 9:
        return "piece length was different from one in .aria2 control";
      case 10:
        return "downloading same file at that moment";
      case 11:
        return "downloading same info hash torrent at that moment";
      case 12:
        return "file already existed";
      case 13:
        return "renaming file failed";
      case 14:
        return "could not open existing file";
      case 15:
        return "could not create new file or truncate existing file";
      case 16:
        return "file I/O error occurred";
      case 17:
        return "could not create directory";
      case 18:
        return "name resolution failed";
      case 19:
        return "could not parse Metalink document";
      case 20:
        return "FTP command failed";
      case 21:
        return "HTTP response header was bad or unexpected";
      case 22:
        return "too many redirects occurred";
      case 23:
        return "HTTP authorization failed";
      case 24:
        return "could not parse bencoded file";
      case 25:
        return ' ".torrent" file was corrupted or missing information ';
      case 26:
        return "Magnet URI was bad";
      case 27:
        return "bad/unrecognized option was given or unexpected option argument was given";
      case 28:
        return "remote server was unable to handle the request due to a temporary overloading or maintenance";
      case 29:
        return "could not parse JSON-RPC request";
    }
});
