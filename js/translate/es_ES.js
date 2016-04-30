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

if(typeof translations == 'undefined'){
    translations = {};
}

translations.es_ES = {  // replace en_US to ll_CC, examples: zh_CN, de_AT.
// header
    'Search': 'Buscar',
    // Nav menu
    'Add': 'Añadir',
    'By URIs': 'URIs',
    'By Torrents': 'Torrents',
    'By Metalinks': 'Metalinks',
    'Manage': 'Administrar',
    'Pause All': 'Pausar Todos',
    'Resume Paused': 'Reanudar Pausados',
    'Purge Completed': 'Purgar Completados',
    'Settings': 'Ajustes',
    'Connection Settings': 'Ajustes de Conexión',
    'Global Settings': 'Ajustes Globales',
    'Server info': 'Info de Servidor',
    'About and contribute': 'Acerca y Colaborar',
    'Toggle navigation': 'Conmutar Navegación',
// body
// nav side bar
    'Miscellaneous': 'Otros',
    'Global Statistics': 'Estadísticas Globales',
    'About': 'Acerca de',
    'Displaying': 'Mostrando',
    'of': 'de',
    'downloads': 'descargas',
    'Language': 'Idioma',
// download filters
    'Download Filters': 'Filtros de Descargas',
    'Running': '',
    'Active': 'Activo',
    'Waiting': 'Esperando',
    'Complete': 'Completo',
    'Error': 'Error',
    'Paused': 'En Pausa',
    'Removed': 'Eliminado',
    'Hide linked meta-data': 'Ocultar metadatos adjuntos',
    'Displaying': 'Mostrando',
    'of': 'de',
    'downloads': 'descargas',
    'Toggle': 'Conmutar',
    'Reset filters': 'Restablecer Filtros',
// starred properties
    'Quick Access Settings': 'Ajustes Rápidos',
    'Save settings': 'Salvar Ajustes',
    'Currently no download in line to display, use the': 'En el momento no hay descargas para mostrar. ¡Use la opción',
    'download button to start downloading files!': 'para empezar a descargar sus archivos!',
    'Peers': 'Pares',
    'More Info': 'Mas Info',
    'Remove': 'Eliminar',
    '# of': '# de',
    'Length': 'Longitud',
// modals
    'Add Downloads By URIs': 'Añadir descargas por URIs',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        'Añada varias descargas colocando la URI de cada descarga en una línea separada.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        'Puede añadir URIs de espejo para *el mismo* archivo. Separe cada URI con un espacio.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': 'Una URI puede ser HTTP(S), FTP, BitTorrent o Magnet.',
    'E.g. to add 2 files (downloads) f1.jpg and f2.mp4 with 2 URIs (mirrors) each, add URIs as follows':
        'Ej: Para añadir dos descargas f1.jpg y f2.mp4 con dos URIs espejo cada una, añada las URIs así',
    'Download settings': 'Ajustes de Descargas',
    'Advanced settings': 'Ajustes Avanzados',
    'Cancel': 'Cancelar',
    'Start': 'Iniciar',
    'Choose': 'Escoja',
    'Quick Access (shown on the main page)': 'Acceso Rápido (Se muestra en la pág principal)',
// add torrent modal
    'Add Downloads By Torrents': '',
    '- Select the torrent from the local filesystem to start the download.': '',
    '- You can select multiple torrents to start multiple downloads.': '',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '',
    'Select Torrents': '',
    'Select a Torrent': '',
// add metalink modal
    'Add Downloads By Metalinks': '',
    'Select Metalinks': '',
    '- Select the Metalink from the local filesystem to start the download.': '',
    '- You can select multiple Metalinks to start multiple downloads.': '',
    'Select a Metalink': '',
// select file modal
    'Choose files to start download for': '',
    'Select to download': '',
// settings modal
    'Aria2 RPC host and port': '',
    'Enter the host': '',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        '',
    'Enter the port': '',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        '',
    'Enter the RPC path': '',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': '',
    'SSL/TLS encryption': '',
    'Enable SSL/TLS encryption': '',
    'Enter the secret token (optional)': '',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        '',
    'Enter the username (optional)': '',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        '',
    'Enter the password (optional)': '',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': '',
    'Enter base URL (optional)': '',
    'Direct Download': '',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        '',
    '(Requires appropriate webserver to be configured.)': '',
    'Save Connection configuration': '',
// server info modal
    'Aria2 server info': '',
    'Aria2 Version': '',
    'Features Enabled': '',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        '',
    'Or you can open the latest version in the browser through': '',
    'Close': '',
// lables
    'Download status':'',
    'Download Speed':'',
    'Upload Speed':'',
    'Estimated time':'',
    'Download Size':'',
    'Downloaded':'',
    'Progress':'',
    'Download Path':'',
    'Uploaded':'',
    'Download GID':'',
    'Number of Pieces':'',
    'Piece Length':''
};
