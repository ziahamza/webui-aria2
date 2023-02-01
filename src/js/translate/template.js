// This text is a template of translation list.

// pre: ll_CC, locale name, examples: en_US, zh_CN
// 1. Copy and rename to ll_CC.js, translate these words.
// 2. in js/init.js:
//    Add '.translations('ll_CC', translations.ll_CC)' before '.determinePreferredLanguage();'
// 3. in index.html
//    Add '<script src="js/translate/ll_CC.js"></script>' after '<script src="js/libs/angular-translate.js"></script>'
// 4. To add Language to changeLanguage button, see "{{ 'Language' | translate }}" in index.html.
//    flag-icon usage:
//    https://github.com/lipis/flag-icon-css
// 5. Browser determining preferred language automatically.
//    http://angular-translate.github.io/docs/en/#/guide/07_multi-language

if (typeof translations == "undefined") {
  translations = {};
}

translations.en_US = {
  // replace en_US to ll_CC, examples: zh_CN, de_AT.
  // header
  Search: "",
  // Nav menu
  Add: "",
  "By URIs": "",
  "By Torrents": "",
  "By Metalinks": "",
  Manage: "",
  "Pause All": "",
  "Resume Paused": "",
  "Purge Completed": "",
  "Shutdown Server": "",
  Settings: "",
  "Connection Settings": "",
  "Global Settings": "",
  "Server info": "",
  "About and contribute": "",
  "Toggle navigation": "",
  // body
  // nav side bar
  Miscellaneous: "",
  "Global Statistics": "",
  About: "",
  Displaying: "",
  of: "",
  downloads: "",
  Language: "",
  // download filters
  "Download Filters": "",
  Running: "",
  Active: "",
  Waiting: "",
  Complete: "",
  Error: "",
  Paused: "",
  Removed: "",
  "Hide linked meta-data": "",
  Toggle: "",
  "Reset filters": "",
  // download status
  Verifying: "",
  "Verify Pending": "",
  // starred properties
  "Quick Access Settings": "",
  Save: "",
  "Save settings": "",
  "Currently no download in line to display, use the": "",
  "download button to start downloading files!": "",
  Peers: "",
  "More Info": "",
  Remove: "",
  "# of": "",
  Length: "",
  // modals
  "Add Downloads By URIs": "",
  "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
    "",
  "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
    "",
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "",
  "Download settings": "",
  "Advanced settings": "",
  Cancel: "",
  Start: "",
  Choose: "",
  "Quick Access (shown on the main page)": "",
  // add torrent modal
  "Add Downloads By Torrents": "",
  "- Select the torrent from the local filesystem to start the download.": "",
  "- You can select multiple torrents to start multiple downloads.": "",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.": "",
  "Select Torrents": "",
  "Select a Torrent": "",
  // add metalink modal
  "Add Downloads By Metalinks": "",
  "Select Metalinks": "",
  "- Select the Metalink from the local filesystem to start the download.": "",
  "- You can select multiple Metalinks to start multiple downloads.": "",
  "Select a Metalink": "",
  // select file modal
  "Choose files to start download for": "",
  "Select to download": "",
  // settings modal
  "Aria2 RPC host and port": "",
  "Enter the host": "",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "",
  "Enter the port": "",
  "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)": "",
  "Enter the RPC path": "",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)": "",
  "SSL/TLS encryption": "",
  "Enable SSL/TLS encryption": "",
  "Enter the secret token (optional)": "",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)": "",
  "Enter the username (optional)": "",
  "Enter the Aria2 RPC username (empty if authentication not enabled)": "",
  "Enter the password (optional)": "",
  "Enter the Aria2 RPC password (empty if authentication not enabled)": "",
  "Enter base URL (optional)": "",
  "Direct Download": "",
  "If supplied, links will be created to enable direct download from the Aria2 server.": "",
  "(Requires appropriate webserver to be configured.)": "",
  "Save Connection configuration": "",
  Filter: "",
  // server info modal
  "Aria2 server info": "",
  "Aria2 Version": "",
  "Features Enabled": "",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to": "",
  "Or you can open the latest version in the browser through": "",
  Close: "",
  // labels
  "Download status": "",
  "Download Speed": "",
  "Upload Speed": "",
  "Estimated time": "",
  "Download Size": "",
  Downloaded: "",
  Progress: "",
  "Download Path": "",
  Uploaded: "",
  "Download GID": "",
  "Number of Pieces": "",
  "Piece Length": "",

  //alerts
  "The last connection attempt was unsuccessful. Trying another configuration": "",
  "Oh Snap!": "",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "",
  "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
    "",
  "Successfully connected to Aria2 through its remote RPC …": "",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "",
  "Trying to connect to aria2 using the new connection configuration": "",
  // {{name}} refers to the download name, do not modify.
  "Remove {{name}} and associated meta-data?": ""
};
