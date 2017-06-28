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
    'Toggle': 'Cambia',
    'Reset filters': 'Reimposta filtri',
// starred properties
    'Quick Access Settings': 'Accesso rapido',
    'Save settings': 'Salva impostazioni',
    'Currently no download in line to display, use the': 'Attualmente non c\'è nessun download da mostrare, usa il pulsante ',
    'download button to start downloading files!': 'dowload per cominciare a scaricare!',
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
    'Aria2 RPC host and port': 'Host e porta del server RPC di Aria2',
    'Enter the host': 'Inserisci l\'host',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Inserisci l\'IP o il nome DNS del server dov\'è in esecuzione l\'RPC per Aria2 (default: localhost)',
    'Enter the port': 'Inserisci la porta',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Inserisci la porta del server dov\'è in esecuzione l\'RPC per Aria2  (default: 6800)',
    'Enter the RPC path': 'Inserisci la path RPC',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Inserisci la path per l\'endpoint RPC di Aria2 (default: /jsonrpc)',
    'SSL/TLS encryption': 'Cifratura SSL/TLS',
    'Enable SSL/TLS encryption': 'Abilita la cifratura SSL/TLS',
    'Enter the secret token (optional)': 'Inserisci il token segreto (opzionale)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Inserisci il token segreto per Aria2 (lascia vuoto se non è abilitato)',
    'Enter the username (optional)': 'Inserisci l\'username (opzionale)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Inserisci l\'username per l\'RPC di Aria2 (lascia vuoto se non è abilitato)',
    'Enter the password (optional)': 'Inserisci la password (opzionale)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Inserisci la password per l\'RPC di Aria2 (vuota se l\'autenticazione non è abilitata)',
    'Enter base URL (optional)': 'Inserisci l\'URL di base(opzionale)',
    'Direct Download': 'Downaload diretto',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'Se inserito, verrano creati dei link per scaricare direttamente i file dal server Aria2.',
    '(Requires appropriate webserver to be configured.)': '(Richiede un webserver correttamente configurato)',
    'Save Connection configuration': 'Salva la configurazione di connessione',
    'Filter': 'Filtro',
// server info modal
    'Aria2 server info': 'Informazioni sul server Aria2',
    'Aria2 Version': 'Versione di Aria2',
    'Features Enabled': 'Funzionalità abilitate',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Per scaricare l\'ultima versione del progetto, aggiungere problemi o contribuire, visita ',
    'Or you can open the latest version in the browser through': 'Oppure puoi aprire l\'ultima versione direttamente nel browser',
    'Close': 'Chiudi',
// lables
    'Download status':'Stato download',
    'Download Speed':'Velocità download',
    'Upload Speed':'Velocità upload',
    'Estimated time':'Tempo stimato',
    'Download Size':'Dimensione del download',
    'Downloaded':'Scaricato',
    'Progress':'Progresso',
    'Download Path':'Percorso di download',
    'Uploaded':'Caricato',
    'Download GID':'GID Download',
    'Number of Pieces':'Numero di segmenti',
    'Piece Length': 'Lunghezza segmenti',
    'Shutdown Server': 'Spegni Server',

    'The last connection attempt was unsuccessful. Trying another configuration': 'L\'ultimo tentativo di connessione non è riuscito. Provo un\'altra connessione',
    'Oh Snap!': 'Mannaggia!',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings': 'Non riesco a connettermi al server RPC di Aria2. Riprovo tra 10 secondi. Forse vuoi controllare le impostazioni di connessione in Impostazioni > Impostazioni di connessione',
    'Successfully connected to Aria2 through its remote RPC …': 'Connesso con successo a Aria2 mediante RPC remoto …',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)': 'Correttamente connesso al server Aria2 mediante RPC, ma in modo non sicuro. Per una completa sicurezza prova ad aggiungere un token di autorizzazione segreto all\'avvio di Aria2 (mediante il flag --rpc-secret)',
    'Trying to connect to aria2 using the new connection configuration': 'Provo a connettermi a Aria2 attraverso le nuove impostazioni',
};
