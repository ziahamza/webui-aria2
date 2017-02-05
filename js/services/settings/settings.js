angular.module('webui.services.settings', [])
.value('$fileSettings', {
  // {{{ settings (for files)
  "all-proxy": {
    val: '',
    desc: 'Use this proxy server for all   protocols. To erase previously defined proxy, use "". You can override this setting and specify a proxy server for a particular protocol using http-proxy, https-proxy and ftp-proxy options. This affects all URIs. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].'
  },

  "all-proxy-passwd": {
    val: '',
    desc: "Set password for all-proxy option."
  },

  "all-proxy-user": {
    val: '',
    desc: "Set user for all-proxy option."
  },

  "allow-overwrite": {
    val: false,
    options: ["true", "false"],
    desc: "Restart download from scratch if the corresponding control file doesn't exist. See also auto-file-renaming option. Default: false"
  },

  "allow-piece-length-change": {
    val: false,
    options: ["true", "false"],
    desc: "If false is given, aria2 aborts download when a piece length is different from one in a control file. If true is given, you can proceed but some download progress will be lost. Default: false"
  },

  "always-resume": {
    val: true,
    options: ["true", "false"],
    desc: "Always resume download. If true is given, aria2 always tries to resume download and if resume is not possible, aborts download. If false is given, when all given URIs do not support resume or aria2 encounters N URIs which does not support resume (N is the value specified using --max-resume-failure-tries option), aria2 downloads file from scratch. See --max-resume-failure-tries option. Default: true"
  },

  "async-dns": {
    val: true,
    options: ["true", "false"],
    desc: "Enable asynchronous DNS. Default: true"
  },

  "auto-file-renaming": {
    val: true,
    options: ["true", "false"],
    desc: "Rename file name if the same file already exists. This option works only in HTTP(S)/FTP download. The new file name has a dot and a number(1..9999) appended. Default: true"
  },

  "bt-enable-lpd": {
    desc: "Enable Local Peer Discovery. If a private flag is set in a torrent, aria2 doesn't use this feature for that download even if true is given. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-exclude-tracker": {
    val: '',
    desc: "Comma separated list of BitTorrent tracker's announce URI to remove. You can use special value * which matches all URIs, thus removes all announce URIs. When specifying * in shell command-line, don't forget to escape or quote it. See also --bt-tracker option."
  },

  "bt-external-ip": {
    val: '',
    desc: "Specify the external IP address to report to a BitTorrent tracker. Although this function is named external, it can accept any kind of IP addresses. IPADDRESS must be a numeric IP address."

  },

  "bt-hash-check-seed": {
    desc: "If true is given, after hash check using --check-integrity option and file is complete, continue to seed file. If you want to check file and download it only when it is damaged or incomplete, set this option to false. This option has effect only on BitTorrent download. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "bt-max-open-files": {
    val: 100,
    desc: "Specify maximum number of files to open in each BitTorrent download. Default: 100"
  },

  "bt-max-peers": {
    val: 55,
    desc: "Specify the maximum number of peers per torrent. 0 means unlimited. See also bt-request-peer-speed-limit option. Default: 55"
  },

  "bt-metadata-only": {
    desc: "Download metadata only. The file(s) described in metadata will not be downloaded. This option has effect only when BitTorrent Magnet URI is used. See also --bt-save-metadata option. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-min-crypto-level": {
    desc: "Set minimum level of encryption method. If several encryption methods are provided by a peer, aria2 chooses the lowest one which satisfies the given level. Default: plain",
    val: 'plain',
    options: ["plain", "arc4"]
  },

  "bt-prioritize-piece": {
    val: '',
    desc: "Try to download first and last pieces of each file first. This is useful for previewing files. The argument can contain 2 keywords: head and tail. To include both keywords, they must be separated by comma. These keywords can take one parameter, SIZE. For example, if head=<SIZE> is specified, pieces in the range of first SIZE bytes of each file get higher priority. tail=<SIZE> means the range of last SIZE bytes of each file. SIZE can include K or M (1K = 1024, 1M = 1024K). If SIZE is omitted, SIZE=1M is used."
  },

  "bt-request-peer-speed-limit": {
    val: '50K',
    desc: "If the whole download speed of every torrent is lower than SPEED, aria2 temporarily increases the number of peers to try for more download speed. Configuring this option with your preferred download speed can increase your download speed in some cases. You can append K or M (1K = 1024, 1M = 1024K). Default: 50K"
  },

  "bt-require-crypto": {
    desc: "If true is given, aria2 doesn't accept and establish connection with legacy BitTorrent handshake(19BitTorrent protocol). Thus aria2 always uses Obfuscation handshake. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-save-metadata": {
    desc: "Save metadata as .torrent file. This option has effect only when BitTorrent Magnet URI is used. The filename is hex encoded info hash with suffix .torrent. The directory to be saved is the same directory where download file is saved. If the same file already exists, metadata is not saved. See also --bt-metadata-only option. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-seed-unverified": {
    desc: "Seed previously downloaded files without verifying piece hashes. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "bt-stop-timeout": {
    val: 0,
    desc: "Stop BitTorrent download if download speed is 0 in consecutive SEC seconds. If 0 is given, this feature is disabled. Default: 0"
  },

  "bt-tracker": {
    val: '',
    desc: "Comma separated list of additional BitTorrent tracker's announce URI. These URIs are not affected by --bt-exclude-tracker option because they are added after URIs in --bt-exclude-tracker option are removed."
  },

  "bt-tracker-connect-timeout": {
    val: 60,
    desc: "Set the connect timeout in seconds to establish connection to tracker. After the connection is established, this option makes no effect and --bt-tracker-timeout option is used instead. Default: 60"
  },

  "bt-tracker-interval": {
    val: 0,
    desc: "Set the interval in seconds between tracker requests. This completely overrides interval value and aria2 just uses this value and ignores the min interval and interval value in the response of tracker. If 0 is set, aria2 determines interval based on the response of tracker and the download progress. Default: 0"
  },

  "bt-tracker-timeout": {
    val: 60,
    desc: "Set timeout in seconds. Default: 60"
  },

  "bt-remove-unselected-file": {
    desc: "Removes the unselected files when download is completed in BitTorrent. To select files, use --select-file option. If it is not used, all files are assumed to be selected. Please use this option with care because it will actually remove files from your disk. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "check-integrity": {
    desc: "Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option. If piece hashes are provided, this option can detect damaged portions of a file and re-download them. If a hash of entire file is provided, hash check is only done when file has been already download. This is determined by file length. If hash check fails, file is re-downloaded from scratch. If both piece hashes and a hash of entire file are provided, only piece hashes are used. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "conditional-get": {
    desc: "Download file only when the local file is older than remote file. This function only works with HTTP(S) downloads only. It does not work if file size is specified in Metalink. It also ignores Content-Disposition header. If a control file exists, this option will be ignored. This function uses If-Modified-Since header to get only newer file conditionally. When getting modification time of local file, it uses user supplied filename(see --out option) or filename part in URI if --out is not specified. To overwrite existing file, --allow-overwrite is required. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "connect-timeout": {
    val: 60,
    desc: "Set the connect timeout in seconds to establish connection to HTTP/FTP/proxy server. After the connection is established, this option makes no effect and --timeout option is used instead. Default: 60"
  },

  "continue": {
    desc: "Continue downloading a partially downloaded file. Use this option to resume a download started by a web browser or another program which downloads files sequentially from the beginning. Currently this option is only applicable to HTTP(S)/FTP downloads.",
    val: true,
    options: ["true", "false"],
  },

  "dir": {
    val: '',
    desc: "The directory to store the downloaded file."
  },

  "dry-run": {
    desc: "If true is given, aria2 just checks whether the remote file is available and doesn't download data. This option has effect on HTTP/FTP download. BitTorrent downloads are canceled if true is specified. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "enable-async-dns6": {
    desc: "Enable IPv6 name resolution in asynchronous DNS resolver. This option will be ignored when --async-dns=false. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "enable-http-keep-alive": {
    desc: "Enable HTTP/1.1 persistent connection. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "enable-http-pipelining": {
    desc: "Enable HTTP/1.1 pipelining. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "enable-peer-exchange": {
    desc: "Enable Peer Exchange extension. If a private flag is set in a torrent, this feature is disabled for that download even if true is given. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "file-allocation": {
    desc: "Specify file allocation method. none doesn't pre-allocate file space. prealloc pre-allocates file space before download begins. This may take some time depending on the size of the file. If you are using newer file systems such as ext4 (with extents support), btrfs, xfs or NTFS(MinGW build only), falloc is your best choice. It allocates large(few GiB) files almost instantly. Don't use falloc with legacy file systems such as ext3 and FAT32 because it takes almost same time as prealloc and it blocks aria2 entirely until allocation finishes. falloc may not be available if your system doesn't have posix_fallocate(3) function. Possible Values: none, prealloc, falloc Default: prealloc",
    val: undefined,
    options: ["none", "prealloc", "falloc", "trunc"]
  },

  "follow-metalink": {
    desc: "If true or mem is specified, when a file whose suffix is .meta4 or .metalink or content type of application/metalink4+xml or application/metalink+xml is downloaded, aria2 parses it as a metalink file and downloads files mentioned in it. If mem is specified, a metalink file is not written to the disk, but is just kept in memory. If false is specified, the action mentioned above is not taken. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "follow-torrent": {
    desc: "If true or mem is specified, when a file whose suffix is .torrent or content type is application/x-bittorrent is downloaded, aria2 parses it as a torrent file and downloads files mentioned in it. If mem is specified, a torrent file is not written to the disk, but is just kept in memory. If false is specified, the action mentioned above is not taken. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "ftp-passwd": {
    val: 'ARIA2USER@',
    desc: "Set FTP password. This affects all URIs. If user name is embedded but password is missing in URI, aria2 tries to resolve password using .netrc. If password is found in .netrc, then use it as password. If not, use the password specified in this option. Default: ARIA2USER@"
  },

  "ftp-pasv": {
    desc: "Use the passive mode in FTP. If false is given, the active mode will be used. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "ftp-proxy": {
    val: '',
    desc: 'Use this proxy server for FTP. To erase previously defined proxy, use "". See also --all-proxy option. This affects all URIs. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].'
  },

  "ftp-proxy-passwd": {
    val: '',
    desc: "Set password for --ftp-proxy option."
  },

  "ftp-proxy-user": {
    val: '',
    desc: "Set user for --ftp-proxy option."
  },

  "ftp-reuse-connection": {
    desc: "Reuse connection in FTP. Default: true.",
    val: true,
    options: ["true", "false"],
  },

  "ftp-type": {
    desc: "Set FTP transfer type. TYPE is either binary or ascii. Default: binary",
    val: 'binary',
    options: ["binary", "ascii"]
  },

  "ftp-user": {
    val: 'anonymous',
    desc: "Set FTP user. This affects all URIs. Default: anonymous"
  },

  "header": {
    val: '',
    desc: "Append HEADER to HTTP request header.",
    multiline: true,
  },

  "http-accept-gzip": {
    desc: "Send Accept: deflate, gzip request header and inflate response if remote server responds with Content-Encoding: gzip or Content-Encoding: deflate. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "http-auth-challenge": {
    desc: "Send HTTP authorization header only when it is requested by the server. If false is set, then authorization header is always sent to the server. There is an exception: if username and password are embedded in URI, authorization header is always sent to the server regardless of this option. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "http-no-cache": {
    desc: "Send Cache-Control: no-cache and Pragma: no-cache header to avoid cached content. If false is given, these headers are not sent and you can add Cache-Control header with a directive you like using --header option. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "http-user": {
    val: '',
    desc: "Set HTTP username.",
  },

  "http-passwd": {
    val: '',
    desc: "Set HTTP password.",
  },

  "http-proxy": {
    val: '',
    desc: 'Use this proxy server for HTTP. To erase previously defined proxy, use "". See also --all-proxy option. This affects all URIs. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].'
  },

  "http-proxy-passwd": {
    val: '',
    desc: "Set password for --http-proxy option."
  },

  "http-proxy-user": {
    val: '',
    desc: "Set user for --http-proxy option."
  },

  "index-out": {
    val: undefined,
    desc: "Set file path for file with index=INDEX. You can find the file index using the --show-files option. PATH is a relative path to the path specified in --dir option. You can use this option multiple times. Using this option, you can specify the output filenames of BitTorrent downloads."
  },

  "lowest-speed-limit": {
    val: '0',
    desc: "Close connection if download speed is lower than or equal to this value(bytes per sec). 0 means aria2 does not have a lowest speed limit. You can append K or M (1K = 1024, 1M = 1024K). This option does not affect BitTorrent downloads. Default: 0"
  },

  "max-connection-per-server": {
    val: 1,
    desc: "The maximum number of connections to one server for each download. Default: 1"
  },

  "max-download-limit": {
    val: '0',
    desc: "Set max download speed per each download in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the overall download speed, use --max-overall-download-limit option. Default: 0"
  },

  "max-file-not-found": {
    val: 0,
    desc: 'If aria2 receives "file not found" status from the remote HTTP/FTP servers NUM times without getting a single byte, then force the download to fail. Specify 0 to disable this option. This options is effective only when using HTTP/FTP servers. Default: 0'
  },

  "max-resume-failure-tries": {
    val: 0,
    desc: "When used with --always-resume=false, aria2 downloads file from scratch when aria2 detects N number of URIs that does not support resume. If N is 0, aria2 downloads file from scratch when all given URIs do not support resume. See --always-resume option. Default: 0"
  },

  "max-tries": {
    val: 0,
    desc: "Set number of tries. 0 means unlimited. See also --retry-wait. Default: 5"
  },

  "max-upload-limit": {
    val: '0',
    desc: "Set max upload speed per each torrent in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the overall upload speed, use --max-overall-upload-limit option. Default: 0"
  },

  "metalink-enable-unique-protocol": {
    desc: "If true is given and several protocols are available for a mirror in a metalink file, aria2 uses one of them. Use --metalink-preferred-protocol option to specify the preference of protocol. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "metalink-language": {
    val: '',
    desc: "The language of the file to download."
  },

  "metalink-location": {
    val: '',
    desc: "The location of the preferred server. A comma-delimited list of locations is acceptable, for example, jp,us."
  },

  "metalink-os": {
    val: '',
    desc: "The operating system of the file to download."
  },

  "metalink-version": {
    val: '',
    desc: "The version of the file to download."
  },

  "min-split-size": {
    val: '20M',
    desc: "aria2 does not split less than 2*SIZE byte range. For example, let's consider downloading 20MiB file. If SIZE is 10M, aria2 can split file into 2 range [0-10MiB) and [10MiB-20MiB) and download it using 2 sources(if --split >= 2, of course). If SIZE is 15M, since 2*15M > 20MiB, aria2 does not split file and download it using 1 source. You can append K or M (1K = 1024, 1M = 1024K). Possible Values: 1M -1024M Default: 20M"
  },

  "no-file-allocation-limit": {
    val: '5M',
    desc: "No file allocation is made for files whose size is smaller than SIZE. You can append K or M (1K = 1024, 1M = 1024K). Default: 5M"
  },

  "no-netrc": {
    desc: "Disables netrc support. netrc support is enabled by default.Note netrc file is only read at the startup if --no-netrc is false. So if --no-netrc is true at the startup, no netrc is available throughout the session. You cannot get netrc enabled even if you change this setting.",
    val: true,
    options: ["true", "false"],
  },

  "no-proxy": {
    val: '',
    desc: "Specify comma separated hostnames, domains and network address with or without CIDR block where proxy should not be used."
  },

  "out": {
    val: '',
    desc: "The file name of the downloaded file. When --force-sequential option is used, this option is ignored."
  },

  "parameterized-uri": {
    desc: "Enable parameterized URI support. You can specify set of parts: http://{sv1,sv2,sv3}/foo.iso. Also you can specify numeric sequences with step counter: http://host/image[000-100:2].img. A step counter can be omitted. If all URIs do not point to the same file, such as the second example above, -Z option is required. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "proxy-method": {
    desc: "Set the method to use in proxy request. METHOD is either get or tunnel. HTTPS downloads always use tunnel regardless of this option. Default: get",
    val: 'get',
    options: ["get", "tunnel"]
  },

  "realtime-chunk-checksum": {
    desc: "Validate chunk of data by calculating checksum while downloading a file if chunk checksums are provided. Default: true",
    val: true,
    options: ["true", "false"],
  },

  "referer": {
    val: '',
    desc: "Set Referer. This affects all URIs."
  },

  "remote-time": {
    desc: "Retrieve timestamp of the remote file from the remote HTTP/FTP server and if it is available, apply it to the local file. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "remove-control-file": {
    desc: "Remove control file before download. Using with --allow-overwrite=true, download always starts from scratch. This will be useful for users behind proxy server which disables resume.",
    val: false,
    options: ["true", "false"],
  },

  "seed-ratio": {
    val: 0.0,
    desc: "Specify share ratio. Seed completed torrents until share ratio reaches RATIO. You are strongly encouraged to specify equals or more than 1.0 here. Specify 0.0 if you intend to do seeding regardless of share ratio. If --seed-time option is specified along with this option, seeding ends when at least one of the conditions is satisfied. Default: 1.0"
  },

  "seed-time": {
    val: 0,
    desc: "Specify seeding time in minutes. Also see the --seed-ratio option. Note Specifying --seed-time=0 disables seeding after download completed."
  },

  "select-file": {
    val: '',
    desc: "Set file to download by specifying its index. You can find the file index using the --show-files option. Multiple indexes can be specified by using ,, for example: 3,6. You can also use - to specify a range: 1-5. , and - can be used together: 1-5,8,9. When used with the -M option, index may vary depending on the query ."
  },

  "split": {
    val: 5,
    desc: "Download a file using N connections. If more than N URIs are given, first N URIs are used and remaining URIs are used for backup. If less than N URIs are given, those URIs are used more than once so that N connections total are made simultaneously. The number of connections to the same host is restricted by --max-connection-per-server option. See also --min-split-size option. Default: 5"
  },

  "timeout": {
    val: 60,
    desc: "Set timeout in seconds. Default: 60"
  },

  "use-head": {
    desc: "Use HEAD method for the first request to the HTTP server. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "user-agent": {
    val: 'aria2/$VERSION',
    desc: "Set user agent for HTTP(S) downloads. Default: aria2/$VERSION, $VERSION is replaced by package version."
  },

  "retry-wait": {
    val: 0,
    desc: "Set the seconds to wait between retries. With SEC > 0, aria2 will retry download when the HTTP server returns 503 response. Default: 0."
  },

  "metalink-base-uri": {
    val: '',
    desc: "Specify base URI to resolve relative URI in metalink:url and metalink:metaurl element in a metalink file stored in local disk. If URI points to a directory, URI must end with /."
  },

  "pause": {
    desc: "Pause download after added. This option is effective only when --enable-rpc=true is given. Default: false",
    val: "false",
    options: ["true", "false"],
  },

  "stream-piece-selector": {
    desc: "Specify piece selection algorithm used in HTTP/FTP download. Piece means fixed length segment which is downloaded in parallel in segmented download. If default is given, aria2 selects piece so that it reduces the number of establishing connection. This is reasonable default behaviour because establishing connection is an expensive operation. If inorder is given, aria2 selects piece which has minimum index. Index=0 means first of the file. This will be useful to view movie while downloading it. --enable-http-pipelining option may be useful to reduce reconnection overhead. Please note that aria2 honors --min-split-size option, so it will be necessary to specify a reasonable value to --min-split-size option. If geom is given, at the beginning aria2 selects piece which has minimum index like inorder, but it exponentially increasingly keeps space from previously selected piece. This will reduce the number of establishing connection and at the same time it will download the beginning part of the file first. This will be useful to view movie while downloading it. Default: default",
    val: 'default',
    options: ["default", "inorder", "geom"]
  },

  "hash-check-only": {
    desc: "If true is given, after hash check using --check-integrity option, abort download whether or not download is complete. Default: false",
    val: false,
    options: ["true", "false"],
  },

  "checksum": {
    val: undefined,
    desc: "Set checksum. TYPE is hash type. The supported hash type is listed in Hash Algorithms in aria2c -v. DIGEST is hex digest. For example, setting sha-1 digest looks like this: sha-1=0192ba11326fe2298c8cb4de616f4d4140213838 This option applies only to HTTP(S)/FTP downloads."
  },

  "piece-length": {
    val: '1M',
    desc: "Set a piece length for HTTP/FTP downloads. This is the boundary when aria2 splits a file. All splits occur at multiple of this length. This option will be ignored in BitTorrent downloads. It will be also ignored if Metalink file contains piece hashes. Default: 1M"
  },

  "uri-selector": {
    desc: "Specify URI selection algorithm. The possible values are inorder, feedback and adaptive. If inorder is given, URI is tried in the order appeared in the URI list. If feedback is given, aria2 uses download speed observed in the previous downloads and choose fastest server in the URI list. This also effectively skips dead mirrors. The observed download speed is a part of performance profile of servers mentioned in --server-stat-of and --server-stat-if options. If adaptive is given, selects one of the best mirrors for the first and reserved connections. For supplementary ones, it returns mirrors which has not been tested yet, and if each of them has already been tested, returns mirrors which has to be tested again. Otherwise, it doesn't select anymore mirrors. Like feedback, it uses a performance profile of servers. Default: feedback",
    val: 'feedback',
    options: ["inorder", "feedback", "adaptive"]
  }
//}}}
})
.value('$globalSettings', {
  // {{{ settings (global)
  "download-result": {
    desc: "This option changes the way Download Results is formatted. If OPT is default, print GID, status, average download speed and path/URI. If multiple files are involved, path/URI of first requested file is printed and remaining ones are omitted. If OPT is full, print GID, status, average download speed, percentage of progress and path/URI. The percentage of progress and path/URI are printed for each requested file in each row. Default: default",
    val: 'default',
    options: ["default", "full"]
  },
  "log": {
    val: '',
    desc: 'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, log is not written to file.'
  },
  "log-level": {
    desc: "Set log level to output. LEVEL is either debug, info, notice, warn or error. Default: debug.",
    val: 'debug',
    options: ["debug", "info", "notice", "warn", "error"]
  },
  "max-concurrent-downloads": {
    val: 5,
    desc: "Set maximum number of parallel downloads for every static (HTTP/FTP) URI, torrent and metalink. See also --split option. Default: 5"
  },
  "max-download-result": {
    val: 1000,
    desc: "Set maximum number of download result kept in memory. The download results are completed/error/removed downloads. The download results are stored in FIFO queue and it can store at most NUM download results. When queue is full and new download result is created, oldest download result is removed from the front of the queue and new one is pushed to the back. Setting big number in this option may result high memory consumption after thousands of downloads. Specifying 0 means no download result is kept. Default: 1000"
  },
  "max-overall-download-limit": {
    val: '0',
    desc: "Set max overall download speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the download speed per download, use --max-download-limit option. Default: 0."
  },
  "max-overall-upload-limit": {
    val: '0',
    desc: "Set max overall upload speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the upload speed per torrent, use --max-upload-limit option. Default: 0."
  },
  "save-cookies": {
    val: '',
    desc: "Save Cookies to FILE in Mozilla/Firefox(1.x/2.x)/ Netscape format. If FILE already exists, it is overwritten. Session Cookies are also saved and their expiry values are treated as 0. Possible Values: /path/to/file."
  },
  "save-session": {
    val: '',
    desc: "Save error/unfinished downloads to FILE on exit. You can pass this output file to aria2c with --input-file option on restart."
  },
  "server-stat-of": {
    val: '',
    desc: "Specify the filename to which performance profile of the servers is saved. You can load saved data using --server-stat-if option. See Server Performance Profile subsection below for file format."
  }
  // }}}
})
.value('$globalExclude',  [
	"checksum",
	"index-out",
	"out",
	"pause",
	"select-file"
])
.value('$waitingExclude',  [
	"dry-run",
	"metalink-base-uri",
	"parameterized-uri",
	"pause",
	"piece-length"
])
.value('$activeInclude', [
  "bt-max-peers",
  "bt-request-peer-speed-limit",
  "bt-remove-unselected-file",
  "max-download-limit",
  "max-upload-limit"
]);
