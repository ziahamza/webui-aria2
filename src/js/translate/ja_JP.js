if (typeof translations == "undefined") {
  translations = {};
}

translations.ja_JP = {
  // header
  Search: "検索",
  // Nav menu
  Add: "追加",
  "By URIs": "URI",
  "By Torrents": "Torrent",
  "By Metalinks": "Metalink",
  Manage: "Manage",
  "Pause All": "全て一時停止",
  "Resume Paused": "一時停止を再開",
  "Purge Completed": "完了済みエントリを消去",
  Settings: "Settings",
  "Connection Settings": "接続設定",
  "Global Settings": "共通設定",
  "Server info": "サーバー情報",
  "About and contribute": "関連と貢献について",
  "Toggle navigation": "ナビゲーションを切り替え",
  // body
  // nav side bar
  Miscellaneous: "その他",
  "Global Statistics": "共通統計",
  About: "関連",
  Displaying: "表示",
  of: "の",
  downloads: "ダウンロード",
  Language: "言語",
  // download filters
  "Download Filters": "ダウンロードをフィルター",
  Running: "動作中",
  Active: "有効",
  Waiting: "待機中",
  Complete: "完了",
  Error: "エラー",
  Paused: "一時停止中,
  Removed: "削除済み",
  "Hide linked meta-data": "リンクされたメタデータを非表示",
  Toggle: "切り替え",
  "Reset filters": "フィルターをリセット",
  // download status
  Verifing: "検証中",
  "Verify Pending": "検証待ち",
  // starred properties
  "Quick Access Settings": "Quick-Access設定",
  Save: "保存",
  "Save settings": "設定を保存",
  "Currently no download in line to display, use the":
    "現在表示するダウンロードがありません。",
  "download button to start downloading files!": "ダウンロードボタンを押すとファイルのダウンロードを開始できます!",
  Peers: "ピア",
  "More Info": "詳細",
  Remove: "削除",
  "# of": "# の",
  Length: "長さ",
  // modals
  "Add Downloads By URIs": "URIからのダウンロード",
  "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
    "- 各ファイルのURIを別々の行に入力することで複数のダウンロード(ファイル)を同時に追加できます。",
  "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
    "- 同じファイルに複数のURI(ミラー)を追加することもできます。これを行うにはURIをスペースで区切ります。",
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "- URIには､HTTP(S)/FTP/BitTorrent-Magnetが使えます｡",
  "Download settings": "ダウンロード設定",
  "Advanced settings": "上級者向け設定",
  Cancel: "取り消し",
  Start: "開始",
  Choose: "選択",
  "Quick Access (shown on the main page)": "Quick Access (shown on the main page)",
  // add torrent modal
  "Add Downloads By Torrents": "Torrentからダウンロードを追加",
  "- Select the torrent from the local filesystem to start the download.":
    "- この端末からTorrentを選択してダウンロードを開始します。",
  "- You can select multiple torrents to start multiple downloads.":
    "- 複数のTorrentを選択して複数のダウンロードを開始できます。",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
    "- BitTorrent-Magnet URLを追加するには､[URIで追加]を使用してそこに追加します。",
  "Select Torrents": "Torrentを選択",
  "Select a Torrent": "Torrentを選択",
  // add metalink modal
  "Add Downloads By Metalinks": "Metalinkからダウンロードを追加",
  "Select Metalinks": "Metalinkを選択",
  "- Select the Metalink from the local filesystem to start the download.":
    "- この端末からMetalinkを選択してダウンロードを開始します。",
  "- You can select multiple Metalinks to start multiple downloads.":
    "- 複数のMetalinkを選択して複数のダウンロードを開始できます。",
  "Select a Metalink": "Metalinkを選択",
  // select file modal
  "Choose files to start download for": "ダウンロードを開始するファイルを選択してください",
  "Select to download": "選択してダウンロード",
  // settings modal
  "Aria2 RPC host and port": "Aria2 RPC host and port",
  "Enter the host": "Enter the host",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)",
  "Enter the port": "Enter the port",
  "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
    "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)",
  "Enter the RPC path": "Enter the RPC path",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
    "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)",
  "SSL/TLS encryption": "SSL/TLS encryption",
  "Enable SSL/TLS encryption": "Enable SSL/TLS encryption",
  "Enter the secret token (optional)": "Enter the secret token (optional)",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
    "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)",
  "Enter the username (optional)": "Enter the username (optional)",
  "Enter the Aria2 RPC username (empty if authentication not enabled)":
    "Enter the Aria2 RPC username (empty if authentication not enabled)",
  "Enter the password (optional)": "Enter the password (optional)",
  "Enter the Aria2 RPC password (empty if authentication not enabled)":
    "Enter the Aria2 RPC password (empty if authentication not enabled)",
  "Enter base URL (optional)": "Enter base URL (optional)",
  "Direct Download": "Direct Download",
  "If supplied, links will be created to enable direct download from the Aria2 server.":
    "If supplied, links will be created to enable direct download from the Aria2 server.",
  "(Requires appropriate webserver to be configured.)":
    "(Requires appropriate webserver to be configured.)",
  "Save Connection configuration": "Save Connection configuration",
  Filter: "Filter",
  // server info modal
  "Aria2 server info": "Aria2 server info",
  "Aria2 Version": "Aria2 Version",
  "Features Enabled": "Features Enabled",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to":
    "To download the latest version of the project, add issues or to contribute back, head on to",
  "Or you can open the latest version in the browser through":
    "Or you can open the latest version in the browser through",
  Close: "Close",
  // lables
  "Download status": "Download status",
  "Download Speed": "Download Speed",
  "Upload Speed": "Upload Speed",
  "Estimated time": "Estimated time",
  "Download Size": "Download Size",
  Downloaded: "Downloaded",
  Progress: "Progress",
  "Download Path": "Download Path",
  Uploaded: "Uploaded",
  "Download GID": "Download GID",
  "Number of Pieces": "Number of Pieces",
  "Piece Length": "Piece Length",
  "Shutdown Server": "Shutdown Server",

  "The last connection attempt was unsuccessful. Trying another configuration":
    "The last connection attempt was unsuccessful. Trying another configuration",
  "Oh Snap!": "Oh Snap!",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings",
  "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
    "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings",
  "Successfully connected to Aria2 through its remote RPC …":
    "Successfully connected to Aria2 through its remote RPC …",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)",
  "Trying to connect to aria2 using the new connection configuration":
    "Trying to connect to aria2 using the new connection configuration",
  "Remove {{name}} and associated meta-data?": "Remove {{name}} and associated meta-data?"
};
