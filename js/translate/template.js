// This text is a template of translation list.

// pre: ll_CC, locale name, examples: en_US, zh_CN
// 1. Copy and rename to ll_CC.js, translate these words.
// 2. in js/init.js:
//    Add '.translations('ll_CC', translations.ll_CC)' before '.determinePreferredLanguage();'
// 3. in index.html
//    Add '<script src="js/translate/ll_CC.js"></script>' after '<script src="js/libs/angular-translate.js"></script>'
// 4. Then Browser determining preferred language automatically.
//    http://angular-translate.github.io/docs/en/#/guide/07_multi-language

if(typeof translations == 'undefined'){
    translations = {};
}

translations.en_US = {  // replace en_US to ll_CC, examples: zh_CN, de_AT.
// header
    'Search': '',
    // Nav menu
    'Add': '',
    'By URIs': '',
    'By Torrents': '',
    'By Metalinks': '',
    'Manage': '',
    'Pause All': '',
    'Resume Paused': '',
    'Purge Completed': '',
    'Settings': '',
    'Connection Settings': '',
    'Global Settings': '',
    'Server info': '',
    'About and contribute': '',
// body
// nav side bar
// download filters
    'Download Filters': '',
    'Running': '',
    'Active': '',
    'Waiting': '',
    'Complete': '',
    'Error': '',
    'Paused': '',
    'Removed': '',
    'Hide linked meta-data': '',
    'Toggle': '',
    'Reset filters': '',
// starred properties
    'Quick Access Settings': '',
    'Save settings': '',
// modals
    'Add Downloads By URIs': '',
    'Download settings': '',
    'Advanced settings': '',
    'Cancel': '',
    'Start': '',
// add torrent modal
    'Add Downloads By Torrents': '',
    'Select Torrents': '',
    'Select a Torrent:': '',
    //'Download settings': '',  // repeated
    //'Advanced settings': '',
    //'Cancel': '',
    //'Start': '',
// add metalink modal
    'Add Downloads By Metalinks': '',
    'Select Metalinks': '',
    'Select a Metalinks:': '',
    //'Download settings': '',
    //'Advanced settings': '',
    //'Cancel': '',
    //'Start': '',
// select file modal
    'Choose files to start download for': '',
    'Select to download': '',
// settings modal
    //'Cancel': '',
    //'Connection Settings': '',
    'Aria2 RPC host and port': '',
    'Enter the host:': '',
    'Enter the port:': '',
    'Direct Download': '',
    //'Cancel': '',
    'Save Connection configuration': '',
// server info modal
    'Aria2 server info': '',
    'Close': ''
// about modal
    //'About and contribute': '',
    //'Close': '',
};