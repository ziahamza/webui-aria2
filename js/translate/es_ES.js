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
    'Shutdown Server': 'Desactivar servidor',
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
    'Running': 'Procesando',
    'Active': 'Activo',
    'Waiting': 'Esperando',
    'Complete': 'Completo',
    'Error': 'Error',
    'Paused': 'En Pausa',
    'Removed': 'Eliminado',
    'Hide linked meta-data': 'Ocultar metadatos adjuntos',
    'Toggle': 'Conmutar',
    'Reset filters': 'Restablecer Filtros',
// download status
    'Verifing': 'Verificando',
    'Verify Pending': 'Pendiente de verificación',
// starred properties
    'Quick Access Settings': 'Ajustes Rápidos',
    'Save': 'Guardar',
    'Save settings': 'Guardar Ajustes',
    'Currently no download in line to display, use the': 'En este momento no hay descargas para mostrar. ¡Use la opción',
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
    'Download settings': 'Ajustes de Descargas',
    'Advanced settings': 'Ajustes Avanzados',
    'Cancel': 'Cancelar',
    'Start': 'Iniciar',
    'Choose': 'Escoja',
    'Quick Access (shown on the main page)': 'Acceso Rápido (Se muestra en la pág principal)',
// add torrent modal
    'Add Downloads By Torrents': 'Añadir descargas Torrent',
    '- Select the torrent from the local filesystem to start the download.': 'Seleccione el archivo Torrent de su equipo para iniciar la descarga',
    '- You can select multiple torrents to start multiple downloads.': 'Puede seleccionar varios torrents',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': 'Para los enlaces Magnet, salga de este cuadro y use la opción Añadir \ URI',
    'Select Torrents': 'Escoja los Torrents',
    'Select a Torrent': 'Escoja el Torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Añadir descargas Metalink',
    'Select Metalinks': 'Seleccione el Metalink',
    '- Select the Metalink from the local filesystem to start the download.': 'Escoja el archivo Metalink de su equipo para iniciar la descarga',
    '- You can select multiple Metalinks to start multiple downloads.': 'Puede escoger varios archivos Metalink',
    'Select a Metalink': 'Escoja el archivo Metalink',
// select file modal
    'Choose files to start download for': 'Escoja los archivos que desea descargar',
    'Select to download': 'Escoja que descargar',
// settings modal
    'Aria2 RPC host and port': 'Servidor Aria2 y puerto',
    'Enter the host': 'Escriba la dirección',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Escriba la dirección o nombre DNS del servidor Aria2 (por defecto: localhost)',
    'Enter the port': 'Escriba el puerto',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Escriba el número del puerto del servidor Aria2 (por defecto: 6800)',
    'Enter the RPC path': 'Escriba la ruta RPC',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Escriba la ruta de acceso RPC de Aria2 (por defecto: /jsonrpc)',
    'SSL/TLS encryption': 'Cifrado SSL/TLS',
    'Enable SSL/TLS encryption': 'Habilitar Cifrado SSL/TLS',
    'Enter the secret token (optional)': 'Escriba la frase Token (opcional)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Escriba la frase Token secreta (vacío si la autenticación está deshabilitada)',
    'Enter the username (optional)': 'Usuario (opcional)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Escriba el nombre de usuario (vacío si la autenticación está deshabilitada)',
    'Enter the password (optional)': 'Escriba la contraseña',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Escriba la contraseña RPC (vacío si la autenticación está deshabilitada)',
    'Enter base URL (optional)': 'Escriba la URL base (opcional)',
    'Direct Download': 'Descarga Directa',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'Esto permite crear enlaces de descarga de los archivos desde el servidor Aria2',
    '(Requires appropriate webserver to be configured.)': '(Requiere configuración apropiada del servidor web)',
    'Save Connection configuration': 'Guardar Configuración',
    'Filter': 'Filrar',
// server info modal
    'Aria2 server info': 'Información de servidor Aria2',
    'Aria2 Version': 'Aria2 versión',
    'Features Enabled': 'Funcionalidad disponible',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Para obtener la última versión del proyecto, reportar problemas o colaborar, vaya a',
    'Or you can open the latest version in the browser through': 'Puede abrir la última versión en su navegador, directamente',
    'Close': 'Cerrar',
// labels
    'Download status':'Estado de descarga',
    'Download Speed':'Velocidad de descarga',
    'Upload Speed':'Vel. Subida',
    'Estimated time':'Tiempo estimado',
    'Download Size':'Tamaño de descarga',
    'Downloaded':'Descargado',
    'Progress':'Progreso',
    'Download Path':'Carpeta de descarga',
    'Uploaded':'Subido',
    'Download GID':'GID de Descarga',
    'Number of Pieces':'N° de Piezas',
    'Piece Length':'Tamaño de pieza',
//alerts
    'The last connection attempt was unsuccessful. Trying another configuration': 
        'El último intento de conexión falló. Probando otra configuración',
    'Oh Snap!': 'Rayos…',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings':
        'No se pudo establecer una conexión al servidor Aria2. Reintentando en 10 segundos. Pruebe revisando la configuración en Ajustes > Ajustes de Conexión',
    'Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings':
        'Autenticación fallida con el servior Aria2 RPC. Reintentando en 10 segundos. Puede que sea necesario revisar su info de autenticación en Ajustes > Ajustes de Conexión',
    'Successfully connected to Aria2 through its remote RPC …':
        'Conexión exitosa con el servidor Aria2 mediante la interfaz RPC',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)':
        'Conexión exitosa con el servidor Aria2 mediante la interfaz RPC, sin embargo la conexión no es segura. Para mejorar la seguridad, añada un token de autorización al iniciar Aria2 (con la opción --rpc-secret)',
    'Trying to connect to aria2 using the new connection configuration':
        'Intentando conectar con el servidor Aria2 usando los nuevos Ajustes de Conexión'
};
