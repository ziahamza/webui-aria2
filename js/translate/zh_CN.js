if(typeof translations == 'undefined'){
    translations = {};
}

translations.zh_CN = {
// header
    'Search': '搜索',
    // Nav menu
    'Add': '添加',
    'By URIs': '使用链接',
    'By Torrents': '使用种子',
    'By Metalinks': '使用 Metalink',
    'Manage': '管理',
    'Pause All': '暂停所有',
    'Resume Paused': '恢复下载',
    'Purge Completed': '清除已完成',
    'Shutdown Server': '关闭服务器',
    'Settings': '设置',
    'Connection Settings': '连接设置',
    'Global Settings': '全局设置',
    'Server info': '服务器信息',
    'About and contribute': '关于和捐助',
    'Toggle navigation': '切换导航',
// body
// nav side bar
    'Miscellaneous': '杂项',
    'Global Statistics': '全局统计',
    'About': '关于',
    'Displaying': '正在显示',
    'of': '/',
    'downloads': '下载',
    'Language': '语言',
// download filters
    'Download Filters': '下载过滤器',
    'Running': '运行中',
    'Active': '活动的',
    'Waiting': '等待中',
    'Complete': '已完成',
    'Error': '出错的',
    'Paused': '已暂停',
    'Removed': '已删除',
    'Hide linked meta-data': '隐藏连接的元数据',
    'Toggle': '反向选择',
    'Reset filters': '重置过滤器',
// download status
    'Verifing': '正在验证',
    'Verify Pending': '等待验证',
// starred properties
    'Quick Access Settings': '快速访问设置',
    'Save': '保存',
    'Save settings': '保存设置',
    'Currently no download in line to display, use the': '当前没有可显示的下载项，使用',
    'download button to start downloading files!': '按钮来开始下载！',
    'Peers': 'Peers',
    'More Info': '更多信息',
    'Remove': '删除',
    '# of': '块数',
    'Length': '块大小',
// modals
    'Add Downloads By URIs': '使用链接下载',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- 你可以同时添加多个文件下载任务，每行下载一个文件；',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- 你也可以给同一个下载任务添加多个镜像链接，写在一行并用空格分隔每条链接；',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- 链接可以是 HTTP(S)、FTP 和磁力链接。',
    'Download settings': '下载设置',
    'Advanced settings': '高级设置',
    'Cancel': '取消',
    'Start': '开始',
    'Choose': '选择',
    'Quick Access (shown on the main page)': '快速访问（在主页上显示）',
// add torrent modal
    'Add Downloads By Torrents': '使用种子下载',
    '- Select the torrent from the local filesystem to start the download.': '- 从本地文件系统选择种子文件开始下载；',
    '- You can select multiple torrents to start multiple downloads.': '- 你可以同时选择多个种子来启动多个下载；',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- 如果要添加磁力链接，请使用添加链接的方式。',
    'Select Torrents': '选择种子文件',
    'Select a Torrent': '选择种子文件',
// add metalink modal
    'Add Downloads By Metalinks': '使用 Metalink 下载',
    'Select Metalinks': '选择 Metalink 文件',
    '- Select the Metalink from the local filesystem to start the download.': '* 从本地文件系统选择 Metalink 文件开始下载；',
    '- You can select multiple Metalinks to start multiple downloads.': '* 你可以同时选择多个 Metalink 文件来启动多个下载。',
    'Select a Metalink': '选择 Metalink 文件',
// select file modal
    'Choose files to start download for': '请选择要下载的文件',
    'Select to download': '选择以下载',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC 主机和端口',
    'Enter the host': '主机',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        '输入 Aria2 RPC 所在服务器的 IP 或域名（默认：localhost）',
    'Enter the port': '端口',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        '输入 Aria2 RPC 端口号（默认：6800）',
    'Enter the RPC path': 'RPC 路径',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': '输入 Aria2 RPC 路径（默认：/jsonrpc）',
    'SSL/TLS encryption': 'SSL/TLS 加密',
    'Enable SSL/TLS encryption': '启用 SSL/TLS 加密',
    'Enter the secret token (optional)': '密码令牌（可选）',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        '输入 Aria2 RPC 密码令牌（如果未启用则留空）',
    'Enter the username (optional)': '用户名（可选）',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        '输入 Aria2 RPC 用户名（如果未启用身份验证则留空）',
    'Enter the password (optional)': '密码（可选）',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': '输入 Aria2 RPC 密码（如果未启用身份验证则留空）',
    'Enter base URL (optional)': '基本链接地址（可选）',
    'Direct Download': '直接下载',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        '如果指定该选项，将会创建可以直接从 Aria2 服务器上下载文件的链接。',
    '(Requires appropriate webserver to be configured.)': '（需要 WEB 服务器配置正确）',
    'Save Connection configuration': '保存连接配置',
    'Filter':'过滤',
// server info modal
    'Aria2 server info': 'Aria2 服务器信息',
    'Aria2 Version': 'Aria2 版本',
    'Features Enabled': '已启用功能',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        '下载最新版本、提交问题或捐助，请访问',
    'Or you can open the latest version in the browser through': '直接在浏览器中使用最新版本，请访问',
    'Close': '关闭',
// labels
    'Download status':'当前下载状态',
    'Download Speed':'当前下载速度',
    'Upload Speed':'当前上传速度',
    'Estimated time':'预计剩余时间',
    'Download Size':'下载总大小',
    'Downloaded':'已下载大小',
    'Progress':'当前下载进度',
    'Download Path':'文件下载路径',
    'Uploaded':'已上传大小',
    'Download GID':'下载的 GID',
    'Number of Pieces':'文件块数量',
    'Piece Length':'每块大小',

//alerts
    'The last connection attempt was unsuccessful. Trying another configuration': 
        '上次连接请求未成功，正在尝试使用另一个配置',
    'Oh Snap!': '糟糕！',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings':
        '无法连接到 Aria2 RPC 服务器，将在10秒后重试。您可能需要检查连接设置，请前往 设置 > 连接设置',
    'Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings':
        '连接到 Aria2 RPC 服务器时认证失败，将在10秒后重试。您可能需要确认您的身份验证信息，请前往 设置 > 连接设置',
    'Successfully connected to Aria2 through its remote RPC …':
        '通过 RPC 连接到 Aria2 成功！',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)':
        '通过 RPC 连接到 Aria2 成功，但是连接并不安全。要想使用安全连接，尝试在启动 Aria2 时添加一个授权密码令牌（通过 --rpc-secret 参数）',
    'Trying to connect to aria2 using the new connection configuration':
        '正在尝试使用新的连接配置来连接到 Aria2 ……',
    'Remove {{name}} and associated meta-data?':
        '是否删除 {{name}} 和关联的元数据？'
};
