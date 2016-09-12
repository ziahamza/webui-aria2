if(typeof translations == 'undefined'){
    translations = {};
}

translations.it_IT = {
// header
    'Search': 'Cerca',
    // Nav menu
    'Add': 'Aggiungi',
    'By URIs': 'Da URIs',
    'By Torrents': 'Da Torrent',
    'By Metalinks': 'Da Metalink',
    'Manage': 'Gestione',
    'Pause All': 'Ferma tutto',
    'Resume Paused': 'Riprendi fermati',
    'Purge Completed': 'Togli i completi',
    'Settings': 'Impostazioni',
    'Connection Settings': 'Impostazioni di connessione',
    'Global Settings': 'Impostazioni globali',
    'Server info': 'Informazioni sul server',
    'About and contribute': 'Crediti e informazioni',
    'Toggle navigation': 'Cambia navigazione',
// body
// nav side bar
    'Miscellaneous': 'Varie',
    'Global Statistics': 'Statistiche globali',
    'About': 'Info',
    'Displaying': 'Mostra',
    'of': 'di',
    'downloads': 'downloads',
    'Language': 'Lingua',
// download filters
    'Download Filters': 'Filtri download',
    'Running': 'In corso',
    'Active': 'Attivi',
    'Waiting': 'In attesa',
    'Complete': 'Completi',
    'Error': 'Errore',
    'Paused': 'In pausa',
    'Removed': 'Rimossi',
    'Hide linked meta-data': 'Nascondi i meta-data collegati',
    'Displaying': 'Mostra',
    'of': 'di',
    'downloads': 'downloads',
    'Toggle': 'Cambia',
    'Reset filters': 'Reimposta filtri',
// starred properties
    'Quick Access Settings': 'Accesso rapido',
    'Save settings': 'Salva impostazioni',
    'Currently no download in line to display, use the': 'Attualmente non c\'è nessun download da mostrare, usa il',
    'download button to start downloading files!': 'pulsante Aggiungi per cominciare a scaricare!',
    'Peers': 'Peers',
    'More Info': 'Altre informazioni',
    'Remove': 'Rimuovi',
    '# of': '# di',
    'Length': 'Lunghezza',
// modals
    'Add Downloads By URIs': 'Aggiungi Downloads da URIs',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- Puoi aggungere più download(files) allo stesso tempo mettendo un\'URI per riga.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- Puoi anche aggiungere più URI di download(mirror) per uno *stesso* file separando i vari mirror da uno spazio.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- Un URI può essere un indirizzo HTTP(S)/FTP o un BitTorrent Magnet link.',
    'E.g. to add 2 files (downloads) f1.jpg and f2.mp4 with 2 URIs (mirrors) each, add URIs as follows':
        'Ad esempio, per scaricare 2 files f1.jpg and f2.mp4 con 2 URIs (mirrors) ciascuno, aggiungi gli indirizzi così',
    'Download settings': 'Impostazioni download',
    'Advanced settings': 'Impostazioni avanzate',
    'Cancel': 'Cancella',
    'Start': 'Aggiungi',
    'Choose': 'Scegli',
    'Quick Access (shown on the main page)': 'Accesso rapido (mostrato nella pagina principale)',
// add torrent modal
    'Add Downloads By Torrents': 'Aggiungi Torrent',
    '- Select the torrent from the local filesystem to start the download.': '- Seleziona il file torrent dal tuo computer per iniziare a scaricare.',
    '- You can select multiple torrents to start multiple downloads.': '- Puoi aggiungere anche più file contemporaneamente per iniziare più dowload insieme.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- Per aggiungere un  Magnet Link BitTorrent utilizza l\'opzione Aggiungi da URI.',
    'Select Torrents': 'Seleziona Torrents',
    'Select a Torrent': 'Seleziona un Torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Aggiungi Torrent da Metalink',
    'Select Metalinks': 'Seleziona Metalink',
    '- Select the Metalink from the local filesystem to start the download.': '- Seleziona un Metalink dal tuo computer per iniziare il download.',
    '- You can select multiple Metalinks to start multiple downloads.': '- Puoi iniziare anche più download selezionando più Metalink.',
    'Select a Metalink': 'Seleziona un Metalink',
// select file modal
    'Choose files to start download for': 'Scegli i file da scaricare',
    'Select to download': 'Seleziona per scaricare',
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

    'The last connection attempt was unsuccessful. Trying another configuration': 'L\'ultimo tentativo di connessione non è riuscito. Provo un\'altra connessione',
    'Oh Snap!': 'Mannaggia!',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings': 'Non riesco a connettermi al server RPC di Aria2. Riprovo tra 10 secondi. Forse vuoi controllare le impostazioni di connessione in Impostazioni > Impostazioni di connessione',
    'Successfully connected to Aria2 through its remote RPC …': 'Connesso con successo a Aria2 mediante RPC remoto …',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)': 'Correttamente connesso al server Aria2 mediante RPC, ma in modo non sicuro. Per una completa sicurezza prova ad aggiungere un token di autorizzazione segreto all\'avvio di Aria2 (mediante il flag --rpc-secret)',
    'Trying to connect to aria2 using the new connection configuration': 'Provo a connettermi a Aria2 attraverso le nuove impostazioni',
};
