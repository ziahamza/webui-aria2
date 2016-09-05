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
    'About and contribute': '关于和贡献',
    'Toggle navigation': '切换导航',
// body
// nav side bar
    'Miscellaneous': '杂项',
    'Global Statistics': '全局统计',
    'About': '关于',
    'Displaying': '显示',
    'of': '/',
    'downloads': '下载',
    'Language': '语言',
// download filters
    'Download Filters': '下载过滤器',
    'Running': '下载中',
    'Active': '活动的',
    'Waiting': '等待中',
    'Complete': '已完成',
    'Error': '出错的',
    'Paused': '已暂停',
    'Removed': '已删除',
    'Hide linked meta-data': '隐藏链接的元数据',
    'Displaying': '当前显示',
    'of': '/',
    'downloads': '下载',
    'Toggle': '反选',
    'Reset filters': '重置过滤器',
// starred properties
    'Quick Access Settings': '快速访问设置',
    'Save settings': '保存设置',
    'Currently no download in line to display, use the': '目前还没有下载, 使用',
    'download button to start downloading files!': '按钮添加下载！',
    'Peers': '',
    'More Info': '更多信息',
    'Remove': '删除',
    '# of': '',
    'Length': '块大小',
// modals
    'Add Downloads By URIs': '使用链接下载',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- 你可以同时添加多个下载, 每行一个下载链接.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- 你可以给一个下载添加多个镜像链接, 在同一行里用空格分割.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- 链接可以是 HTTP(S)/FTP/BitTorrent-Magnet.',
    'E.g. to add 2 files (downloads) f1.jpg and f2.mp4 with 2 URIs (mirrors) each, add URIs as follows':
        '例如：添加2个下载 f1.jpg 和 f2.mp4 (都有2个镜像链接), 添加方式如下',
    'Download settings': '下载设置',
    'Advanced settings': '高级设置',
    'Cancel': '取消',
    'Start': '开始',
    'Choose': '选择',
    'Quick Access (shown on the main page)': '快速访问 (在主页上显示)',
// add torrent modal
    'Add Downloads By Torrents': '使用种子下载',
    '- Select the torrent from the local filesystem to start the download.': '- 上传种子文件开始下载.',
    '- You can select multiple torrents to start multiple downloads.': '- 你可以选择多个种子开始下载.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- 如果要添加磁力链请使用添加链接的方式.',
    'Select Torrents': '选择种子文件',
    'Select a Torrent': '选择种子文件',
// add metalink modal
    'Add Downloads By Metalinks': '使用 Metalink 下载',
    'Select Metalinks': '选择 Metalink 文件',
    '- Select the Metalink from the local filesystem to start the download.': '- 上传 Metalink 文件开始下载.',
    '- You can select multiple Metalinks to start multiple downloads.': '- 你可以选择多个 Metalink 文件开始下载.',
    'Select a Metalink': '选择 Metalink 文件',
// select file modal
    'Choose files to start download for': '选择文件开始下载',
    'Select to download': '选择下载',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC 主机和端口',
    'Enter the host': '主机',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        '输入 Aria2 RPC 所在服务器的 IP 或域名 (默认: localhost)',
    'Enter the port': '端口',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        '输入 Aria2 RPC 端口号 (默认: 6800)',
    'Enter the RPC path': 'RPC 路径',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': '输入 Aria2 RPC 路径 (默认: /jsonrpc)',
    'SSL/TLS encryption': 'SSL/TLS 加密',
    'Enable SSL/TLS encryption': '启用 SSL/TLS 加密',
    'Enter the secret token (optional)': '密码令牌 (可选)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        '输入 Aria2 RPC 密码令牌 (如果未启用则留空)',
    'Enter the username (optional)': '用户名 (可选)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        '输入 Aria2 RPC 用户名 (如果未启用身份验证则留空)',
    'Enter the password (optional)': '密码 (可选)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': '输入 Aria2 RPC 密码 (如果未启用身份验证则留空)',
    'Enter base URL (optional)': '基 URL (可选)',
    'Direct Download': '直接下载',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        '配置后将创建可以直接从 Aria2 服务器上下载文件的链接.',
    '(Requires appropriate webserver to be configured.)': '(需要 WEB 服务器配置正确.)',
    'Save Connection configuration': '保存连接设置',
// server info modal
    'Aria2 server info': 'Aria2 服务器信息',
    'Aria2 Version': 'Aria2 版本',
    'Features Enabled': '已启用功能',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        '下载最新版本, 提交 Issue 和贡献, 请到',
    'Or you can open the latest version in the browser through': '在线使用最新版本请访问',
    'Close': '关闭',
// labels
    'Download status':'下载状态',
    'Download Speed':'下载速度',
    'Upload Speed':'上传速度',
    'Estimated time':'预计剩余时间',
    'Download Size':'下载总大小',
    'Downloaded':'已下载',
    'Progress':'进度',
    'Download Path':'下载路径',
    'Uploaded':'已上传',
    'Download GID':'下载 GID',
    'Number of Pieces':'文件块数量',
    'Piece Length':'每块大小',

//alerts
    'The last connection attempt was unsuccessful. Trying another configuration': 
        '上一个连接请求失败, 请尝试修改设置',
    'Oh Snap!': '',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings':
        '不能连接到 Aria2 RPC 服务器, 将在10秒后重试. 您可能希望检查连接设置, 打开 设置 > 连接设置',
    'Successfully connected to Aria2 through its remote RPC …':
        '通过 RPC 连接到 Aria2 成功...',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)':
        '通过 RPC 连接到 Aria2 成功, 但连接不是安全的. 要想使用安全连接, 尝试在启动 Aria2 时添加一个授权密码令牌 (通过 --rpc-secret 参数)',
    'Trying to connect to aria2 using the new connection configuration':
        '正在尝试使用新的连接设置来连接到 Aria2'
};
