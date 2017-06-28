if(typeof translations == 'undefined'){
    translations = {};
}

translations.en_US = {
// header
    'Search': 'Search',
    // Nav menu
    'Add': 'Add',
    'By URIs': 'By URIs',
    'By Torrents': 'By Torrents',
    'By Metalinks': 'By Metalinks',
    'Manage': 'Manage',
    'Pause All': 'Pause All',
    'Resume Paused': 'Resume Paused',
    'Purge Completed': 'Purge Completed',
    'Settings': 'Settings',
    'Connection Settings': 'Connection Settings',
    'Global Settings': 'Global Settings',
    'Server info': 'Server info',
    'About and contribute': 'About and contribute',
    'Toggle navigation': 'Toggle navigation',
// body
// nav side bar
    'Miscellaneous': 'Miscellaneous',
    'Global Statistics': 'Global Statistics',
    'About': 'About',
    'Displaying': 'Displaying',
    'of': 'of',
    'downloads': 'downloads',
    'Language': 'Language',
// download filters
    'Download Filters': 'Download Filters',
    'Running': 'Running',
    'Active': 'Active',
    'Waiting': 'Waiting',
    'Complete': 'Complete',
    'Error': 'Error',
    'Paused': 'Paused',
    'Removed': 'Removed',
    'Hide linked meta-data': 'Hide linked meta-data',
    'Toggle': 'Toggle',
    'Reset filters': 'Reset filters',
// download status
    'Verifing': 'Verifing',
    'Verify Pending': 'Verify Pending',
// starred properties
    'Quick Access Settings': 'Quick Access Settings',
    'Save': 'Save',
    'Save settings': 'Save settings',
    'Currently no download in line to display, use the': 'Currently no download in line to display, use the',
    'download button to start downloading files!': 'download button to start downloading files!',
    'Peers': 'Peers',
    'More Info': 'More Info',
    'Remove': 'Remove',
    '# of': '# of',
    'Length': 'Length',
// modals
    'Add Downloads By URIs': 'Add Downloads By URIs',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.',
    'Download settings': 'Download settings',
    'Advanced settings': 'Advanced settings',
    'Cancel': 'Cancel',
    'Start': 'Start',
    'Choose': 'Choose',
    'Quick Access (shown on the main page)': 'Quick Access (shown on the main page)',
// add torrent modal
    'Add Downloads By Torrents': 'Add Downloads By Torrents',
    '- Select the torrent from the local filesystem to start the download.': '- Select the torrent from the local filesystem to start the download.',
    '- You can select multiple torrents to start multiple downloads.': '- You can select multiple torrents to start multiple downloads.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.',
    'Select Torrents': 'Select Torrents',
    'Select a Torrent': 'Select a Torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Add Downloads By Metalinks',
    'Select Metalinks': 'Select Metalinks',
    '- Select the Metalink from the local filesystem to start the download.': '- Select the Metalink from the local filesystem to start the download.',
    '- You can select multiple Metalinks to start multiple downloads.': '- You can select multiple Metalinks to start multiple downloads.',
    'Select a Metalink': 'Select a Metalink',
// select file modal
    'Choose files to start download for': 'Choose files to start download for',
    'Select to download': 'Select to download',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC host and port',
    'Enter the host': 'Enter the host',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)',
    'Enter the port': 'Enter the port',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)',
    'Enter the RPC path': 'Enter the RPC path',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)',
    'SSL/TLS encryption': 'SSL/TLS encryption',
    'Enable SSL/TLS encryption': 'Enable SSL/TLS encryption',
    'Enter the secret token (optional)': 'Enter the secret token (optional)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)',
    'Enter the username (optional)': 'Enter the username (optional)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Enter the Aria2 RPC username (empty if authentication not enabled)',
    'Enter the password (optional)': 'Enter the password (optional)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Enter the Aria2 RPC password (empty if authentication not enabled)',
    'Enter base URL (optional)': 'Enter base URL (optional)',
    'Direct Download': 'Direct Download',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'If supplied, links will be created to enable direct download from the Aria2 server.',
    '(Requires appropriate webserver to be configured.)': '(Requires appropriate webserver to be configured.)',
    'Save Connection configuration': 'Save Connection configuration',
    'Filter': 'Filter',
// server info modal
    'Aria2 server info': 'Aria2 server info',
    'Aria2 Version': 'Aria2 Version',
    'Features Enabled': 'Features Enabled',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'To download the latest version of the project, add issues or to contribute back, head on to',
    'Or you can open the latest version in the browser through': 'Or you can open the latest version in the browser through',
    'Close': 'Close',
// lables
    'Download status':'Download status',
    'Download Speed':'Download Speed',
    'Upload Speed':'Upload Speed',
    'Estimated time':'Estimated time',
    'Download Size':'Download Size',
    'Downloaded':'Downloaded',
    'Progress':'Progress',
    'Download Path':'Download Path',
    'Uploaded':'Uploaded',
    'Download GID':'Download GID',
    'Number of Pieces':'Number of Pieces',
    'Piece Length': 'Piece Length',
    'Shutdown Server': 'Shutdown Server',

    'The last connection attempt was unsuccessful. Trying another configuration': 'The last connection attempt was unsuccessful. Trying another configuration',
    'Oh Snap!': 'Oh Snap!',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings': 'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings',
    'Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings': 'Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings',
    'Successfully connected to Aria2 through its remote RPC …': 'Successfully connected to Aria2 through its remote RPC …',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)': 'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)',
    'Trying to connect to aria2 using the new connection configuration': 'Trying to connect to aria2 using the new connection configuration',
    'Remove {{name}} and associated meta-data?': 'Remove {{name}} and associated meta-data?'
};
