if(typeof translations == 'undefined'){
    translations = {};
}

translations.zh_TW = {
// header
    'Search': '搜尋',
    // Nav menu
    'Add': '新增',
    'By URIs': '使用連結',
    'By Torrents': '使用種子',
    'By Metalinks': '使用 Metalink',
    'Manage': '管理',
    'Pause All': '暫停所有',
    'Resume Paused': '恢復下載',
    'Purge Completed': '清除已完成',
    'Shutdown Server': '關閉伺服器',
    'Settings': '設定',
    'Connection Settings': '連線設定',
    'Global Settings': '全域性設定',
    'Server info': '伺服器資訊',
    'About and contribute': '關於和捐助',
    'Toggle navigation': '切換導航',
// body
// nav side bar
    'Miscellaneous': '雜項',
    'Global Statistics': '全域性統計',
    'About': '關於',
    'Displaying': '正在顯示',
    'of': '/',
    'downloads': '下載',
    'Language': '語言',
// download filters
    'Download Filters': '下載過濾器',
    'Running': '執行中',
    'Active': '活動的',
    'Waiting': '等待中',
    'Complete': '已完成',
    'Error': '出錯的',
    'Paused': '已暫停',
    'Removed': '已刪除',
    'Hide linked meta-data': '隱藏連線的元資料',
    'Toggle': '反向選擇',
    'Reset filters': '重置過濾器',
// download status
    'Verifing': '正在驗證',
    'Verify Pending': '等待驗證',
// starred properties
    'Quick Access Settings': '快速訪問設定',
    'Save': '儲存',
    'Save settings': '儲存設定',
    'Currently no download in line to display, use the': '當前沒有可顯示的下載項，使用',
    'download button to start downloading files!': '按鈕來開始下載！',
    'Peers': 'Peers',
    'More Info': '更多資訊',
    'Remove': '刪除',
    '# of': '塊數',
    'Length': '塊大小',
// modals
    'Add Downloads By URIs': '使用連結下載',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- 你可以同時新增多個檔案下載任務，每行下載一個檔案；',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- 你也可以給同一個下載任務新增多個映象連結，寫在一行並用空格分隔每條連結；',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- 連結可以是 HTTP(S)、FTP 和磁力連結。',
    'Download settings': '下載設定',
    'Advanced settings': '高階設定',
    'Cancel': '取消',
    'Start': '開始',
    'Choose': '選擇',
    'Quick Access (shown on the main page)': '快速訪問（在主頁上顯示）',
// add torrent modal
    'Add Downloads By Torrents': '使用種子下載',
    '- Select the torrent from the local filesystem to start the download.': '- 從本地檔案系統選擇種子檔案開始下載；',
    '- You can select multiple torrents to start multiple downloads.': '- 你可以同時選擇多個種子來啟動多個下載；',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- 如果要新增磁力連結，請使用新增連結的方式。',
    'Select Torrents': '選擇種子檔案',
    'Select a Torrent': '選擇種子檔案',
// add metalink modal
    'Add Downloads By Metalinks': '使用 Metalink 下載',
    'Select Metalinks': '選擇 Metalink 檔案',
    '- Select the Metalink from the local filesystem to start the download.': '* 從本地檔案系統選擇 Metalink 檔案開始下載；',
    '- You can select multiple Metalinks to start multiple downloads.': '* 你可以同時選擇多個 Metalink 檔案來啟動多個下載。',
    'Select a Metalink': '選擇 Metalink 檔案',
// select file modal
    'Choose files to start download for': '請選擇要下載的檔案',
    'Select to download': '選擇以下載',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC 主機和埠',
    'Enter the host': '主機',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        '輸入 Aria2 RPC 所在伺服器的 IP 或域名（預設：localhost）',
    'Enter the port': '埠號',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        '輸入 Aria2 RPC 埠號（預設：6800）',
    'Enter the RPC path': 'RPC 路徑',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': '輸入 Aria2 RPC 路徑（預設：/jsonrpc）',
    'SSL/TLS encryption': 'SSL/TLS 加密',
    'Enable SSL/TLS encryption': '啟用 SSL/TLS 加密',
    'Enter the secret token (optional)': '密碼令牌（可選）',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        '輸入 Aria2 RPC 密碼令牌（如果未啟用則留空）',
    'Enter the username (optional)': '使用者名稱（可選）',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        '輸入 Aria2 RPC 使用者名稱（如果未啟用身份驗證則留空）',
    'Enter the password (optional)': '密碼（可選）',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': '輸入 Aria2 RPC 密碼（如果未啟用身份驗證則留空）',
    'Enter base URL (optional)': '基本連結地址（可選）',
    'Direct Download': '直接下載',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        '如果指定該選項，將會建立可以直接從 Aria2 伺服器上下載檔案的連結。',
    '(Requires appropriate webserver to be configured.)': '（需要 WEB 伺服器配置正確）',
    'Save Connection configuration': '儲存連線配置',
    'Filter':'過濾',
// server info modal
    'Aria2 server info': 'Aria2 伺服器資訊',
    'Aria2 Version': 'Aria2 版本',
    'Features Enabled': '已啟用功能',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        '下載最新版本、提交問題或捐助，請訪問',
    'Or you can open the latest version in the browser through': '直接在瀏覽器中使用最新版本，請訪問',
    'Close': '關閉',
// labels
    'Download status':'當前下載狀態',
    'Download Speed':'當前下載速度',
    'Upload Speed':'當前上傳速度',
    'Estimated time':'預計剩餘時間',
    'Download Size':'下載總大小',
    'Downloaded':'已下載大小',
    'Progress':'當前下載進度',
    'Download Path':'檔案下載路徑',
    'Uploaded':'已上傳大小',
    'Download GID':'下載的 GID',
    'Number of Pieces':'檔案塊數量',
    'Piece Length':'每塊大小',

//alerts
    'The last connection attempt was unsuccessful. Trying another configuration':
        '上次連線請求未成功，正在嘗試使用另一個配置',
    'Oh Snap!': '糟糕！',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings':
        '無法連線到 Aria2 RPC 伺服器，將在10秒後重試。您可能需要檢查連線設定，請前往 設定 > 連線設定',
    'Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings':
        '連線到 Aria2 RPC 伺服器時認證失敗，將在10秒後重試。您可能需要確認您的身份驗證資訊，請前往 設定 > 連線設定',
    'Successfully connected to Aria2 through its remote RPC …':
        '通過 RPC 連線到 Aria2 成功！',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)':
        '通過 RPC 連線到 Aria2 成功，但是連線並不安全。要想使用安全連線，嘗試在啟動 Aria2 時新增一個授權密碼令牌（通過 --rpc-secret 引數）',
    'Trying to connect to aria2 using the new connection configuration':
        '正在嘗試使用新的連線配置來連線到 Aria2 ……',
    'Remove {{name}} and associated meta-data?':
        '是否刪除 {{name}} 和關聯的元資料？'
};
