if (typeof translations == "undefined") {
  translations = {};
}

translations.cs_CZ = {
  // header
  Search: "Hledat",
  // Nav menu
  Add: "Přidat",
  "By URIs": "Z URI",
  "By Torrents": "Z torrentu",
  "By Metalinks": "Z metalinku",
  Manage: "Spravovat",
  "Pause All": "Zastavit vše",
  "Resume Paused": "Obnovit zastavené",
  "Purge Completed": "Odstranit hotové",
  "Shutdown Server": "Vypnout server",
  Settings: "Nastavení",
  "Connection Settings": "Nastavení připojení",
  "Global Settings": "Obecné nastavení",
  "Server info": "Informace o serveru",
  "About and contribute": "Informace",
  "Toggle navigation": "Přepnout ovládání",
  // body
  // nav side bar
  Miscellaneous: "Různé",
  "Global Statistics": "Globální statistika",
  About: "Informace",
  Displaying: "Zobrazuji",
  of: "z",
  downloads: "stahování",
  Language: "Jazyk",
  // download filters
  "Download Filters": "Filtry stahování",
  Running: "Stahují se",
  Active: "Aktivní",
  Waiting: "Čekající",
  Complete: "Hotové",
  Error: "Chyba",
  Paused: "Zastavené",
  Removed: "Odstraněné",
  "Hide linked meta-data": "Skrýt připojená meta-data",
  Toggle: "Prohodit",
  "Reset filters": "Smazat filtry",
  // download status
  Verifying: "Ověřování",
  "Verify Pending": "Čekání na ověření",
  // starred properties
  "Quick Access Settings": "Rychlé nastavení",
  Save: "Uložit",
  "Save settings": "Uložit nastavení",
  "Currently no download in line to display, use the": "Není co zobrazit, použijte",
  "download button to start downloading files!": "tlačítko pro stáhnutí souborů!",
  Peers: "Zdroje",
  "More Info": "Víc informací",
  Remove: "Odstranit",
  "# of": "# z",
  Length: "Délka",
  // modals
  "Add Downloads By URIs": "Přidat stahování z URI",
  "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
    "- Můžete začít stahovat více souborů v jeden okamžik, tak že na každý řádek dáte jinou URI",
  "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
    "- Také můžete přidat více URI (Zrcadel) pro *stejný* soubor, tak že je dáte na jeden řádek oddělené mezerou ",
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "- URI může být HTTP(S)/FTP/BitTorrent-Magnet.",
  "Download settings": "Nastavení stahování",
  "Advanced settings": "Pokročilé nastavení",
  Cancel: "Zrušit",
  Start: "Spustit",
  Choose: "Zvolit",
  "Quick Access (shown on the main page)": "Rychlý přístup (Zobrazení na hlavní stránce)",
  // add torrent modal
  "Add Downloads By Torrents": "Přidat stahování z torrentu",
  "- Select the torrent from the local filesystem to start the download.":
    "- Pro stahování vyberte torrent soubor z disku",
  "- You can select multiple torrents to start multiple downloads.":
    " - Můžete zvolit víc torrentů pro spuštění více stahování",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
    '- Pro stahování pomocí BitTorrent-Magnet URL, použijte možnost "Z URI"',
  "Select Torrents": "Vyberte torrenty",
  "Select a Torrent": "Vyberte torrent",
  // add metalink modal
  "Add Downloads By Metalinks": "Přidat stahovní pomocí metalinku",
  "Select Metalinks": "Výběr metalinků",
  "- Select the Metalink from the local filesystem to start the download.":
    "- Pro stahování vyberte metalink soubor z disku",
  "- You can select multiple Metalinks to start multiple downloads.":
    "- Můžete zvolit víc mentalinků pro spuštění více stahování",
  "Select a Metalink": "Vyberte metalink",
  // select file modal
  "Choose files to start download for": "Vyberte soubory pro stažení",
  "Select to download": "Vyberte ke stažení",
  // settings modal
  "Aria2 RPC host and port": "Aria2 RPC host a port",
  "Enter the host": "Zadejte hosta",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "Zadejte IP nebo DNS jméno serveru na kterém běží Aria2 RPC (výchozí: localhost)",
  "Enter the port": "Zadejte port",
  "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
    "Zadejte port serveru na kterém běží Aria2 RPC (výchozí: 6800)",
  "Enter the RPC path": "Zadejte cestu k RPC",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
    "Zadejte cestu k endpointu Aria2 RPC (výchozí: /jsonrpc)",
  "SSL/TLS encryption": "SSL/TLS šifrování",
  "Enable SSL/TLS encryption": "Zapnout SSL/TLS šifrování",
  "Enter the secret token (optional)": "Zadejte bezpečnostní token (volitelné)",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
    "Zadejte bezpečnostní token k Aria2 RPC (nechte prázné pokud autentifikace není nastavena)",
  "Enter the username (optional)": "Zadejte uživatelské jméno (volitelné)",
  "Enter the Aria2 RPC username (empty if authentication not enabled)":
    "Zadejte uživatelské jméno pro Aria2 RPC (nechte prázné pokud autentifikace není nastavena)",
  "Enter the password (optional)": "Zadejte heslo (volitelné)",
  "Enter the Aria2 RPC password (empty if authentication not enabled)":
    "Zadej heslo k Aria2 RPC (nechte prázné pokud autentifikace není nastavena)",
  "Enter base URL (optional)": "Zadejte kořenovou URL serveru (volitelné)",
  "Direct Download": "Přímé stažení",
  "If supplied, links will be created to enable direct download from the Aria2 server.":
    "Jestliže je nastaveno, je možné stáhnout soubor přímo z Aria2 serveru.",
  "(Requires appropriate webserver to be configured.)":
    "(Je třeba udělat patřičnou konfiguraci webserveru)",
  "Save Connection configuration": "Uložit nastavení",
  Filter: "Filtr",
  // server info modal
  "Aria2 server info": "Informace o Aria2 serveru",
  "Aria2 Version": "Verze Aria2",
  "Features Enabled": "Zapnuté funkce",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to":
    "Ke stažení aktuální verze, nahlášení problému či přispění, zamiřte na",
  "Or you can open the latest version in the browser through":
    "Nebo můžete spustit aktuální verzi pomocí:",
  Close: "Zavřít",
  // labels
  "Download status": "Stav stahování",
  "Download Speed": "Rychlost stahování",
  "Upload Speed": "Rychlost nahrávání",
  "Estimated time": "Odhadovaný čas",
  "Download Size": "Velikost",
  Downloaded: "Staženo",
  Progress: "Průběh",
  "Download Path": "Cesta",
  Uploaded: "Nahráno",
  "Download GID": "GID",
  "Number of Pieces": "Počet fragmentů",
  "Piece Length": "Délka fragmentu",

  //alerts
  "The last connection attempt was unsuccessful. Trying another configuration":
    "Poslední pokus o připojení se nezdařil. Zkuste jiné nastavení",
  "Oh Snap!": "A sakra!",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "Nemohu se připojit k Aria2 RPC serveru. Zkusím to znovu za 10 sekund. Možná by se to chtělo podívat do Nastavení > Nastavení připojení",
  "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
    "Během připojování k Aria2 RPC serveru selhala autentifikace. Zkusím to znovu za 10 sekund. Možná by se to chtělo podívat do Nastavení > Nastavení připojení",
  "Successfully connected to Aria2 through its remote RPC …":
    "Úspěšně připojeno k Aria2 pomocí RPC...",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "Úspěšně připojeno k Aria2 pomocí RPC, ale připojení není zabezpečené. Pro úplné zabezpečení přidejte bezpečnostní token při spuštění Aria2 (pomocí možnosti --rpc-secret) ",
  "Trying to connect to aria2 using the new connection configuration":
    "Zkouším se připojit k Aria2 za pomocí nového nastavení",
  // {{name}} refers to the download name, do not modify.
  "Remove {{name}} and associated meta-data?": "Odstranit {{name}} a příslušná meta-data?"
};
