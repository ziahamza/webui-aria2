if (typeof translations == "undefined") {
  translations = {};
}

translations.ja_JP = {
  // header
  Search: "検索",
  // Nav menu
  Add: "追加",
  "By URIs": "URIを使用",
  "By Torrents": "Torrentを使用",
  "By Metalinks": "Metalinkを使用",
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
  Paused: "一時停止中",
  Removed: "削除済み",
  "Hide linked meta-data": "リンクされたメタデータを非表示",
  Toggle: "切り替え",
  "Reset filters": "フィルターをリセット",
  // download status
  Verifing: "検証中",
  "Verify Pending": "検証待ち",
  // starred properties
  "Quick Access Settings": "Quick Access設定",
  Save: "保存",
  "Save settings": "設定を保存",
  "Currently no download in line to display, use the": "現在表示するダウンロードがありません。",
  "download button to start downloading files!":
    "ダウンロードボタンを押すとファイルのダウンロードを開始できます!",
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
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
    "- URIには､HTTP(S)/FTP/BitTorrent-Magnetが使えます｡",
  "Download settings": "ダウンロード設定",
  "Advanced settings": "上級者向け設定",
  Cancel: "取り消し",
  Start: "開始",
  Choose: "選択",
  "Quick Access (shown on the main page)": "Quick Access (メインページに表示)",
  // add torrent modal
  "Add Downloads By Torrents": "Torrentからダウンロードを追加",
  "- Select the torrent from the local filesystem to start the download.":
    "- この端末からTorrentを選択してダウンロードを開始します。",
  "- You can select multiple torrents to start multiple downloads.":
    "- 複数のTorrentを選択して複数のダウンロードを開始できます。",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
    "- BitTorrent-Magnet URLを追加するには､[URIで追加]からそこに追加します。",
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
  "Aria2 RPC host and port": "Aria2のRPCホストとポート",
  "Enter the host": "ホストを入力",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "Aria2のRPCが実行されている､サーバーのIPかDNS名を入力 (default: localhost)",
  "Enter the port": "ポートを入力",
  "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
    "Aria2のRPCが実行されているサーバーのポートを入力 (default: 6800)",
  "Enter the RPC path": "RPCのパスを入力",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
    "Aria2 RPCエンドポイントのパスを入力 (default: /jsonrpc)",
  "SSL/TLS encryption": "SSL/TLS 暗号化",
  "Enable SSL/TLS encryption": "SSL/TLS 暗号化を有効にする",
  "Enter the secret token (optional)": "シークレットトークンを入力 (任意)",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
    "Aria2 RPCのシークレットトークンを入力 (認証が有効になっていない場合は空のままにします)",
  "Enter the username (optional)": "ユーザー名を入力 (任意)",
  "Enter the Aria2 RPC username (empty if authentication not enabled)":
    "Aria2 RPCのユーザー名を入力 (認証が有効でない場合は空にします)",
  "Enter the password (optional)": "パスワードを入力 (任意)",
  "Enter the Aria2 RPC password (empty if authentication not enabled)":
    "Aria2 RPCのパスワードを入力 (認証が有効でない場合は空にします)",
  "Enter base URL (optional)": "ベース(基底)URLを入力 (任意)",
  "Direct Download": "直接的ダウンロード",
  "If supplied, links will be created to enable direct download from the Aria2 server.":
    "指定すると、Aria2サーバーから直接ダウンロードできるようにリンクが作成されます。",
  "(Requires appropriate webserver to be configured.)":
    "(適切なWebサーバーを構成する必要があります。)",
  "Save Connection configuration": "接続構成を保存",
  Filter: "フィルター",
  // server info modal
  "Aria2 server info": "Aria2サーバーの情報",
  "Aria2 Version": "Aria2バージョン",
  "Features Enabled": "有効な機能",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to":
    "プロジェクトの最新バージョンをダウンロードするには、Issueを追加するか、貢献してください。",
  "Or you can open the latest version in the browser through":
    "または、ブラウザで最新バージョンを開くことができます",
  Close: "閉じる",
  // lables
  "Download status": "ダウンロードの状態",
  "Download Speed": "ダウンロードの速さ",
  "Upload Speed": "アップロードの速さ",
  "Estimated time": "予定時刻",
  "Download Size": "ダウンロードサイズ",
  Downloaded: "ダウンロード済み",
  Progress: "進捗",
  "Download Path": "ダウンロードパス",
  Uploaded: "アップロード済み",
  "Download GID": "ダウンロードGID",
  "Number of Pieces": "個数",
  "Piece Length": "ピースの長さ",
  "Shutdown Server": "サーバーをシャットダウン",

  "The last connection attempt was unsuccessful. Trying another configuration":
    "最後の接続試行は失敗しました。別の構成を試す",
  "Oh Snap!": "糞が!",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "Aria2 RPCサーバーに接続できませんでした。10秒後に再試行します。 [設定] > [接続設定]に移動して接続設定を確認できます｡",
  "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
    "Aria2 RPCサーバーへの接続中に認証が失敗しました。 10秒後に再試行します。 [設定] > [接続設定]に移動して認証の詳細を確認することができます｡",
  "Successfully connected to Aria2 through its remote RPC …":
    "リモートRPCを介してAria2に正常に接続しました …",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "リモートRPCを介してAria2に正常に接続しましたが、接続はまだ安全ではありません。完全なセキュリティを確保するには、Aria2の起動時に認証フラグを追加してください｡ (through the flag --rpc-secret)",
  "Trying to connect to aria2 using the new connection configuration":
    "新しい接続構成を使用してAria2に接続しようとしています｡",
  "Remove {{name}} and associated meta-data?": "{{name}}と関連するメタデータを削除しますか?"
};
