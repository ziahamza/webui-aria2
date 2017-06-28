if(typeof translations == 'undefined'){
    translations = {};
}

translations.nl_NL = {
// header
    'Search': 'Zoeken',
    // Nav menu
    'Add': 'Toevoegen',
    'By URIs': 'met URI',
    'By Torrents': 'met Torrents',
    'By Metalinks': 'met Metalinks',
    'Manage': 'Beheren',
    'Pause All': 'Alles pauzeren',
    'Resume Paused': 'Hervatten',
    'Purge Completed': 'Verwijder de voleindigden',
    'Settings': 'Instellingen',
    'Connection Settings': 'Verbindingsinstellingen',
    'Global Settings': 'Globale instellingen',
    'Server info': 'Informatie over de server',
    'About and contribute': 'Over het project en bijdragen',
    'Toggle navigation': 'Navigatie omschakelen',
    'Language': 'Taal',
// body
// nav side bar
    'Miscellaneous': 'Overig',
    'Global Statistics': 'Globale statistieken',
    'About': 'Over het project',
    'Displaying': ' ', // empty because of grammar in the following 2 elements
    'of': 'van',
    'downloads': 'downloads weergegeven',
// download filters
    'Download Filters': 'Download filters',
    'Running': 'Bezig',
    'Active': 'Actief',
    'Waiting': 'Wachtend',
    'Complete': 'Voleindigd',
    'Error': 'Foutief',
    'Paused': 'Gepauzeerd',
    'Removed': 'Verwijderd',
    'Hide linked meta-data': 'Gekoppelde metadata verbergen',
    'Toggle': 'Omschakelen',
    'Reset filters': 'Filters terugzetten',
// starred properties
    'Quick Access Settings': 'Snelle-toegang instellingen',
    'Save settings': 'Instellingen opslaan',
    'Currently no download in line to display, use the': 'Momenteel geen downloads weer te geven, gebruik de ',
    'download button to start downloading files!': 'knop om bestanden te gaan downloaden!',
    'Peers': 'Peers',
    'More Info': 'Meer informatie',
    'Remove': 'Verwijderen',
    '# of': 'Aantal',
    'Length': 'Lengte',
// modals
    'Add Downloads By URIs': 'Downloads toevoegen met URI',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- Je kunt meerdere downloads (bestanden) tezelfdertijd toevoegen door de URIs voor elk bestand op een aparte regel te zetten.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- Je kunt ook meerdere URIs (mirrors) voor *hetzelfde* bestand toevoegen. Scheidt hiervoor de URIs met een spatie.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- Een URI kan HTTP(S)/FTP/BitTorrent-Magnet zijn.',
    'Download settings': 'Download instellingen',
    'Advanced settings': 'Geavanceerde instellingen',
    'Cancel': 'Annuleren',
    'Start': 'Starten',
    'Choose': 'Kiezen',
    'Quick Access (shown on the main page)': 'Snelle toegang (op de hoofdpagina)',
// add torrent modal
    'Add Downloads By Torrents': 'Downloads toevoegen met torrents',
    '- Select the torrent from the local filesystem to start the download.': '- Selecteer de torrent van het locale bestandssysteem om de download te starten.',
    '- You can select multiple torrents to start multiple downloads.': '- Je kunt meerdere torrents selecteren voor meerdere downloads.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- Om een BitTorrent-Magnet URL toe te voegen, gebruik de Toevoegen met URI optie, en voeg het daar toe.',
    'Select Torrents': 'Selecteer torrents',
    'Select a Torrent': 'Selecteer een torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Download toevoegen met Metalinks',
    'Select Metalinks': 'Selecteer Metalinks',
    '- Select the Metalink from the local filesystem to start the download.': '- Selecteer de Metalink van het locale bestandssysteem om de download te starten.',
    '- You can select multiple Metalinks to start multiple downloads.': '- Selecter meerdere Metalinks om meerdere downloads te starten.',
    'Select a Metalink': 'Selecteer een Metalink',
// select file modal
    'Choose files to start download for': 'Bestanden kiezen waarvoor het downloaden beginnen moet',
    'Select to download': 'Selecteer om te downloaden',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC server en poort',
    'Enter the host': 'Server invoeren',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Voer de IP of DNS naam van de server waarop de RPC van Aria2 loopt (standaard: localhost)',
    'Enter the port': 'Poort invoeren',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Invoeren van de serverpoort waarop de RPC van Aria2 loopt (standaard: 6800)',
    'Enter the RPC path': 'Invoeren van het RPC pad',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Invoeren van het eindpunt van het Aria2 RPC pad (standaard: /jsonrpc)',
    'SSL/TLS encryption': 'SSL/TLS versleuteling',
    'Enable SSL/TLS encryption': 'SSL/TLS versleuteling inschakelen',
    'Enter the secret token (optional)': 'Invoeren van het wachtwoord (facultatief)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Invoeren van het Aria2 RPC wachtwoord (niet invullen als authenticatie niet is ingeschakeld)',
    'Enter the username (optional)': 'Invoeren van de gebruikersnaam (facultatief)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Invoeren van de Aria2 RPC gebruikersnaam (niet invullen als authenticatie niet is ingeschakeld)',
    'Enter the password (optional)': 'Invoeren van het wachtwoord (facultatief)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Invoeren van het Aria2 RPC wachtwoord (niet invullen als authenticatie niet is ingeschakeld)',
    'Enter base URL (optional)': 'Invoeren van de basis URL (facultatief)',
    'Direct Download': 'Direct downloaden',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'Als ingevoerd dan worden links aangemaakt die het direct downloaden van de Aria2 server toestaan.',
    '(Requires appropriate webserver to be configurured.)': 'Hiervoor moet een geschikte webserver worden ingericht.)',
    'Save Connection configuration': 'Verbindingsconfiguratie opslaan',
    'Filter': 'Filter',
// server info modal
    'Aria2 server info': 'Aria2 server informatie',
    'Aria2 Version': 'Aria2 versie',
    'Features Enabled': 'Geactiveerde kenmerken',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Om de nieuwste versie van het project te downloaden, problemen te rapporteren of bij te dragen, ga naar',
    'Or you can open the latest version in the browser through': 'Of je kunt hier de nieuwste versie in je browser openen',
    'Close': 'Afsluiten',
};
