if(typeof translations == 'undefined'){
    translations = {};
}

translations.de_DE = {
// header
    'Search': 'Suche',
    // Nav menu
    'Add': 'Hinzufügen',
    'By URIs': 'mit URIs',
    'By Torrents': 'mit Torrents',
    'By Metalinks': 'mit Metalinks',
    'Manage': 'Verwalten',
    'Pause All': 'Alle anhalten',
    'Resume Paused': 'Angehaltene fortsetzen',
    'Purge Completed': 'Fertige entfernen',
    'Settings': 'Einstellungen',
    'Connection Settings': 'Verbindungseinstellungen',
    'Global Settings': 'Globale Einstellungen',
    'Server info': 'Server Information',
    'About and contribute': 'Über webui-aria2',
    'Toggle navigation': 'Navigation an/ausschalten',
// body
// nav side bar
    'Miscellaneous': 'Verschiedenes',
    'Global Statistics': 'Globale Statistiken',
    'About': 'Über',
    'Displaying': 'Anzeige',
    'of': 'von',
    'downloads': 'Downloads',
    'Language': 'Sprache',
// download filters
    'Download Filters': 'Download Filter',
    'Running': 'Laufende',
    'Active': 'Aktive',
    'Waiting': 'Wartende',
    'Complete': 'Fertige',
    'Error': 'Fehler',
    'Paused': 'Angehaltene',
    'Removed': 'Gelöschte',
    'Hide linked meta-data': 'Blende verlinkte Meta-Daten aus',
    'Toggle': 'Umschalten',
    'Reset filters': 'Filter zurücksetzen',
// starred properties
    'Quick Access Settings': 'Ausgewählte Einstellungen',
    'Save settings': 'Einstellungen speichern',
    'Currently no download in line to display, use the': 'Aktuell sind keine Downloads vorhanden, bitte benutz den',
    'download button to start downloading files!': 'Download Link um den Download von Dateien zu beginnen!',
    'Peers': 'Peers',
    'More Info': 'Mehr Infos',
    'Remove': 'Entfernen',
    '# of': '# von',
    'Length': 'Länge',
// modals
    'Add Downloads By URIs': 'Downloads anhand von URIs hinzufügen',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- Es können mehrere Downloads (Dateien) gleichzeitig hinzugefügt werden, indem jede URI in eine separate Zeile eingegeben wird.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- Es können auch mehrere URIs (Spiegelserver) für *dieselbe* Datei durch Leerzeichen getrennt angegeben werden.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- Eine URI kann folgende Protokolle besitzen: HTTP(S)/FTP/BitTorrent-Magnet.',
    'Download settings': 'Download Einstellungen',
    'Advanced settings': 'Erweiterte Einstellungen',
    'Cancel': 'Abbrechen',
    'Start': 'Beginnen',
    'Choose': 'Auswählen',
    'Quick Access (shown on the main page)': 'Schnellzugriff (Anzeige auf der Hauptseite)',
// add torrent modal
    'Add Downloads By Torrents': 'Downloads mit Torrents hinzufügen',
    '- Select the torrent from the local filesystem to start the download.': '- Wähle ein Torrent vom lokalen Dateisystem um den Download zu starten',
    '- You can select multiple torrents to start multiple downloads.': '- Es können mehrere Torrents ausgewählt werden um mehrere Downloads zu starten',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- Für BitTorrent-Magnet URLs benutz die Option \'Mit URIs hinzufügen\'',
    'Select Torrents': 'Wähle Torrents',
    'Select a Torrent': 'Wähle ein Torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Download mit Metalinks hinzufügen',
    'Select Metalinks': 'Wähle Metalinks',
    '- Select the Metalink from the local filesystem to start the download.': '- Wähle ein Metalink vom lokalen Dateisystem um den Download zu starten',
    '- You can select multiple Metalinks to start multiple downloads.': '- Es können mehrere Metalinks ausgewählt werden um mehrere Downloads zu starten',
    'Select a Metalink': 'Wähle einen Metalink',
// select file modal
    'Choose files to start download for': 'Wähle Dateien für den Download aus',
    'Select to download': 'Wähle zum Download',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC host und port',
    'Enter the host': 'Host',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Gib die IP oder den DNS Namen des Servers ein, auf dem Aria2 läuft und mit dem du eine RPC-Verbindung etablieren willst (Standard: localhost)',
    'Enter the port': 'Port',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Gib den Port des Servers ein, auf dem der RPC-Dienst von Aria2 läuft (Standard: 6800)',
    'Enter the RPC path': 'RPC Pfad',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Gib den Pfad zum Aria2 RPC Endpunkt an (Standard: /jsonrpc)',
    'SSL/TLS encryption': 'SSL/TLS',
    'Enable SSL/TLS encryption': 'Aktiviere SSL/TLS Verschlüsselung',
    'Enter the secret token (optional)': 'Secret Token (optional)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Gib den Aria2 RPC secret Token ein (leer lassen falls keine Authentifizierung aktiv)',
    'Enter the username (optional)': 'Benutzername (optional)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Gib den Aria2 RPC Benutzernamen ein (leer lassen falls keine Authentifizierung aktiv)',
    'Enter the password (optional)': 'Passwort (optional)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Gib das Aria2 RPC Passwort ein (leer lassen falls keine Authentifizierung aktiv)',
    'Enter base URL (optional)': 'Base URL (optional)',
    'Direct Download': 'Direkter Download',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'Falls angegeben, werden Links erstellt um einen direkten Download vom Aria2 Server zu ermöglichen',
    '(Requires appropriate webserver to be configured.)': '(Es wird ein entsprechend konfigurierter WebServer benötigt.)',
    'Save Connection configuration': 'Speichern der Verbindungseinstellung',
    'Filter': 'Filter',
// server info modal
    'Aria2 server info': 'Aria2 Server Info',
    'Aria2 Version': 'Aria2 Version',
    'Features Enabled': 'Aktive Funktionen',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Um die neuste Version des Projects zu laden, Fehler zu melden oder sich zu beteiligen, besuch',
    'Or you can open the latest version in the browser through': 'Oder du kannst die neueste Version direkt in deinem Browser verwenden',
    'Close': 'Schließen',
// lables
    'Download status':'Download Status',
    'Download Speed':'Download Geschwindigkeit',
    'Upload Speed':'Upload Geschwindigkeit',
    'Estimated time':'Geschätzte Zeit',
    'Download Size':'Download Größe',
    'Downloaded':'Heruntergeladen',
    'Progress':'Fortschritt',
    'Download Path':'Download Pfad',
    'Uploaded':'Hochgeladen',
    'Download GID':'Download GID',
    'Number of Pieces':'Anzahl der Stücken',
    'Piece Length':'Größe der Stücken'
};
