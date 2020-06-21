import angular from "angular";

export default angular
  .module("webui.services.settings", [])
  .value("$fileSettings", {
    // {{{ settings (for files)
    "all-proxy": {
      val: "",
      desc: "Settings.all-proxy.desc"
    },

    "all-proxy-passwd": {
      val: "",
      desc: "Settings.all-proxy-passwd.desc"
    },

    "all-proxy-user": {
      val: "",
      desc: "Settings.all-proxy-user.desc"
    },

    "allow-overwrite": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.allow-overwrite.desc"
    },

    "allow-piece-length-change": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.allow-piece-length-change.desc"
    },

    "always-resume": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.always-resume.desc"
    },

    "async-dns": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.async-dns.desc"
    },

    "auto-file-renaming": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.auto-file-renaming.desc"
    },

    "auto-save-interval": {
      val: 60,
      desc: "Setting.auto-save-interval.desc"	
    },

    "bt-detach-seed-only": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-detach-seed-only.desc"
    },

    "bt-enable-hook-after-hash-check": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.bt-enable-hook-after-hash-check.desc"
    },

    "bt-enable-lpd": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-enable-lpd.desc"
    },

    "bt-exclude-tracker": {
      val: "",
      desc: "Settings.bt-exclude-tracker.desc"
    },

    "bt-external-ip": {
      val: "",
      desc: "Settings.bt-external-ip.desc"
    },

    "bt-force-encryption": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-force-encryption.desc"
    },

    "bt-hash-check-seed": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.bt-hash-check-seed.desc"
    },

    "bt-load-saved-metadata": {
      val: false,
      options: ["true","false"],
      desc: "Setting.bt-load-saved-metadata.desc"
    },

    "bt-max-open-files": {
      val: 100,
      desc: "Settings.bt-max-open-files.desc"
    },

    "bt-max-peers": {
      val: 55,
      desc: "Settings.bt-max-peers.desc"
    },

    "bt-metadata-only": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-metadata-only.desc"
    },

    "bt-min-crypto-level": {
      val: "plain",
      options: ["plain", "arc4"],
      desc: "Settings.bt-min-crypto-level.desc"
    },

    "bt-prioritize-piece": {
      val: "",
      desc: "Settings.bt-prioritize-piece.desc"
    },

    "bt-request-peer-speed-limit": {
      val: "50K",
      desc: "Settings.bt-request-peer-speed-limit.desc"
    },

    "bt-require-crypto": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-require-crypto.desc"
    },

    "bt-save-metadata": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-save-metadata.desc"
    },

    "bt-seed-unverified": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-seed-unverified.desc"
    },

    "bt-stop-timeout": {
      val: 0,
      desc: "Settings.bt-stop-timeout.desc"
    },

    "bt-tracker": {
      val: "",
      desc: "Settings.bt-tracker.desc"
    },

    "bt-tracker-connect-timeout": {
      val: 60,
      desc: "Settings.bt-tracker-connect-timeout.desc"
    },

    "bt-tracker-interval": {
      val: 0,
      desc: "Settings.bt-tracker-interval.desc"
    },

    "bt-tracker-timeout": {
      val: 60,
      desc: "Settings.bt-tracker-timeout.desc"
    },

    "bt-remove-unselected-file": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.bt-remove-unselected-file.desc"
    },

    "ca-certificate": {
      val: "",
      desc: "Setting.ca-certificate.desc"
    },

    "check-certificate": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.check-certificate.desc"
    },

    "check-integrity": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.check-integrity.desc"
    },

    "conditional-get": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.conditional-get.desc"
    },

    "conf-path": {
      val: "",
      desc: "Setting.conf-path.desc"
    },

    "connect-timeout": {
      val: 60,
      desc: "Settings.connect-timeout.desc"
    },

    "console-log-level": {
      val: "notice",
      options: ["debug", "info", "notice", "warn", "error"],
      desc: "Setting.console-log-level.desc"
    },

    "content-disposition-default-utf8": {
      val: false,
      options: ["true","false"],
      desc: "Setting.content-disposition-default-utf8.desc"
    },

    continue: {
      val: true,
      options: ["true", "false"],
      desc: "Settings.continue.desc"
    },

    daemon: {
      val: false,
      options: ["true", "false"],
      desc: "Settings.daemon.desc"
    },

    "deferred-input": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.deferred-input.desc"
    },

    dir: {
      val: "",
      desc: "Settings.dir.desc"
    },

    "dht-file-path": {
      val: "",
      desc: "Setting.dht-file-path.desc"
    },

    "dht-file-path6": {
      val: "",
      desc: "Setting.dht-file-path6.desc"
    },

    "dht-listen-port": {
      val: "",
      desc: "Setting.dht-listen-port.desc"
    },

    "dht-message-timeout": {
      val: 10,
      desc: "Setting.dht-message-timeout.desc"
    },

    "disable-ipv6": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.disable-ipv6.desc"
    },

    "disk-cache": {
      val: "16M",
      desc: "Setting.disk-cache.desc"
    },

    "dry-run": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.dry-run.desc"
    },

    "enable-async-dns6": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.enable-async-dns6.desc"
    },

    "enable-color": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.enable-color.desc"
    },

    "enable-dht": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.enable-dht.desc"
    },

    "enable-dht6": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.enable-dht6.desc"
    },

    "enable-http-keep-alive": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.enable-http-keep-alive.desc"
    },

    "enable-http-pipelining": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.enable-http-pipelining.desc"
    },

    "enable-peer-exchange": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.enable-peer-exchange.desc"
    },

    "enable-mmap": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.enable-mmap.desc"
    },

    "enable-rpc": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.enable-rpc.desc"
    },

    "event-poll": {
      val: "",
      options: ["epoll","kqueue","port","poll","select"],
      desc: "Setting.event-poll.desc"
    },

    "file-allocation": {
      val: undefined,
      options: ["none", "prealloc", "falloc", "trunc"],
      desc: "Settings.file-allocation.desc"
    },

    "follow-metalink": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.follow-metalink.desc"
    },

    "follow-torrent": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.follow-torrent.desc"
    },

    "force-save": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.force-save.desc"
    },

    "ftp-passwd": {
      val: "ARIA2USER@",
      desc: "Settings.ftp-passwd.desc"
    },

    "ftp-pasv": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.ftp-pasv.desc"
    },

    "ftp-proxy": {
      val: "",
      desc: "Settings.ftp-proxy.desc"
    },

    "ftp-proxy-passwd": {
      val: "",
      desc: "Settings.ftp-proxy-passwd.desc"
    },

    "ftp-proxy-user": {
      val: "",
      desc: "Settings.ftp-proxy-user.desc"
    },

    "ftp-reuse-connection": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.ftp-reuse-connection.desc"
    },

    "ftp-type": {
      val: "binary",
      options: ["binary", "ascii"],
      desc: "Settings.ftp-type.desc"
    },

    "ftp-user": {
      val: "anonymous",
      desc: "Settings.ftp-user.desc"
    },

    header: {
      val: "",
      multiline: true,
      desc: "Settings.header.desc"
    },

    "help": {
      val: "#basic",
      options: ["#basic","#advanced","#http","#https","#ftp","#metalink","#bittorrent","#cookie","#hook","#file","#rpc","#checksum","#experimental","#deprecated","#help","#all"],
      desc: "Setting.help.desc"
    },

    "http-accept-gzip": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.http-accept-gzip.desc"
    },

    "http-auth-challenge": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.http-auth-challenge.desc"
    },

    "http-no-cache": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.http-no-cache.desc"
    },

    "http-user": {
      val: "",
      desc: "Settings.http-user.desc"
    },

    "http-passwd": {
      val: "",
      desc: "Settings.http-passwd.desc"
    },

    "http-proxy": {
      val: "",
      desc: "Settings.http-proxy.desc"
    },

    "http-proxy-passwd": {
      val: "",
      desc: "Settings.http-proxy-passwd.desc"
    },

    "http-proxy-user": {
      val: "",
      desc: "Settings.http-proxy-user.desc"
    },

    "human-readable": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.human-readable.desc"
    },

    "index-out": {
      val: undefined,
      desc: "Settings.index-out.desc"
    },

    "keep-unfinished-download-result": {
      val: true,
      options: ["true","false"],
      desc: "Setting.keep-unfinished-download-result.desc"
    },

    "listen-port": {
      val: "6881-6999",
      desc: "Setting.listen-port.desc"
    },

    "lowest-speed-limit": {
      val: "0",
      desc: "Settings.lowest-speed-limit.desc"
    },

    "max-connection-per-server": {
      val: 1,
      desc: "Settings.max-connection-per-server.desc"
    },

    "max-download-limit": {
      val: "0",
      desc: "Settings.max-download-limit.desc"
    },

    "max-file-not-found": {
      val: 0,
      desc: "Settings.max-file-not-found.desc"
    },

    "max-mmap-limit": {
      val: 9223372036854775807,
      desc: "Setting.max-mmap-limit.desc"
    },

    "max-resume-failure-tries": {
      val: 0,
      desc: "Settings.max-resume-failure-tries.desc"
    },

    "max-tries": {
      val: 0,
      desc: "Settings.max-tries.desc"
    },

    "max-upload-limit": {
      val: "0",
      desc: "Settings.max-upload-limit.desc"
    },

    "metalink-enable-unique-protocol": {
      val: true,
      option: ["true", "false"],
      desc: "Settings.metalink-enable-unique-protocol.desc"
    },

    "metalink-language": {
      val: "",
      desc: "Settings.metalink-language.desc"
    },

    "metalink-location": {
      val: "",
      desc: "Settings.metalink-location.desc"
    },

    "metalink-os": {
      val: "",
      desc: "Settings.metalink-os.desc"
    },

    "metalink-preferred-protocol": {
      val: "none",
      options: ["http","https","ftp","none"],
      desc: "Setting.metalink-preferred-protocol.desc"
    },

    "metalink-version": {
      val: "",
      desc: "Settings.metalink-version.desc"
    },

    "min-split-size": {
      val: "20M",
      desc: "Settings.min-split-size.desc"
    },

    "min-tls-version": {
      val: "TLSv1.2",
      options: ["SSLv3","TLSv1","TLSv1.1","TLSv1.2"],
      desc: "Setting.min-tls-version.desc"
    },

    "netrc-path": {
      val: "",
      desc: "Setting.netrc-path.desc"
    },

    "no-conf": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.no-conf.desc"
    },

    "no-file-allocation-limit": {
      val: "5M",
      desc: "Settings.no-file-allocation-limit.desc"
    },

    "no-netrc": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.no-netrc.desc"
    },

    "no-proxy": {
      val: "",
      desc: "Settings.no-proxy.desc"
    },

    "on-bt-download-complete": {
      val: "",
      desc: "Setting.on-bt-download-complete.desc"
    },

    "on-download-complete": {
      val: "",
      desc: "Setting.on-download-complete.desc"
    },

    "optimize-concurrent-downloads": {
      val: "false",
      options: ["true","false"],
     desc: "Setting.optimize-concurrent-downloads.desc"
    },

    out: {
      val: "",
      desc: "Settings.out.desc"
    },

    "parameterized-uri": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.parameterized-uri.desc"
    },

    "pause-metadata": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.pause-metadata.desc"
    },

    "peer-agent": {
      val: "",
      desc: "Setting.peer-agent.desc"
    },

    "peer-id-prefix": {
      val: "",
      desc: "Setting.peer-id-prefix.desc"
    },

    "proxy-method": {
      val: "get",
      options: ["get", "tunnel"],
      desc: "Settings.proxy-method.desc"
    },

    quiet: {
      val: false,
      options: ["true", "false"],
      desc: "Settings.quiet.desc"
    },

    "realtime-chunk-checksum": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.realtime-chunk-checksum.desc"
    },

    referer: {
      val: "",
      desc: "Settings.referer.desc"
    },

    "remote-time": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.remote-time.desc"
    },

    "remove-control-file": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.remove-control-file.desc"
    },

    "reuse-uri": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.reuse-uri.desc"
    },

    "rlimit-nofile": {
      val: "",
      desc: "Setting.rlimit-nofile.desc"
    },

    "rpc-certificate": {
      val: "",
      desc: "Setting.rpc-certificate.desc"
    },

    "rpc-listen-port": {
      val: "6800",
      desc: "Setting.rpc-listen-port.desc"
    },

    "rpc-max-request-size": {
      val: "2M",
      desc: "Setting.rpc-max-request-size.desc"
    },

    "rpc-private-key": {
      val: "",
      desc: "Setting.rpc-private-key.desc"
    },

    "rpc-save-upload-metadata": {
      val: true,
      options: ["true","false"],
      desc: "Setting.rpc-save-upload-metadata.desc"
    },

    "save-not-found": {
      val: true,
      options: ["true","false"],
      desc: "Setting.save-not-found.desc"
    },

    "save-session-interval": {
      val: 0,
      desc: "Setting.save-session-interval.desc"
    },

    "seed-ratio": {
      val: 0.0,
      desc: "Settings.seed-ratio.desc"
    },

    "seed-time": {
      val: 0,
      desc: "Settings.seed-time.desc"
    },

    "select-file": {
      val: "",
      desc: "Settings.select-file.desc"
    },

    "server-stat-timeout": {
      val: "86400",
      desc: "Setting.server-stat-timeout.desc"
    },

    "socket-recv-buffer-size": {
      val: 0,
      desc: "Setting.socket-recv-buffer-size.desc"
    },

    split: {
      val: 5,
      desc: "Settings.split.desc"
    },

    "stderr": {
      val: false,
      options: ["true","false"],
      desc: "Setting.stderr.desc"
    },

    "stop": {
      val: 0,
      desc: "Setting.stop.desc"
    },

    "summary-interval": {
      val: 60,
      desc: "Setting.summary-interval.desc"
    },

    timeout: {
      val: 60,
      desc: "Settings.timeout.desc"
    },

    "use-head": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.use-head.desc"
    },

    "user-agent": {
      val: "aria2/$VERSION",
      desc: "Settings.user-agent.desc"
    },

    "retry-wait": {
      val: 0,
      desc: "Settings.retry-wait.desc"
    },

    "metalink-base-uri": {
      val: "",
      desc: "Settings.metalink-base-uri.desc"
    },

    pause: {
      val: "false",
      options: ["true", "false"],
      desc: "Settings.pause.desc"
    },

    "rpc-allow-origin-all": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.rpc-allow-origin-all.desc"
    },

    "rpc-listen-all": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.rpc-listen-all.desc"
    },

    "rpc-secure": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.rpc-secure.desc"
    },

    "stream-piece-selector": {
      val: "default",
      options: ["default", "inorder", "geom"],
      desc: "Settings.stream-piece-selector.desc"
    },

    "show-console-readout": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.show-console-readout.desc"
    },

    "show-files": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.show-files.desc"
    },

    "truncate-console-readout": {
      val: true,
      options: ["true", "false"],
      desc: "Settings.truncate-console-readout.desc"
    },

    "hash-check-only": {
      val: false,
      options: ["true", "false"],
      desc: "Settings.hash-check-only.desc"
    },

    checksum: {
      val: undefined,
      desc: "Settings.checksum.desc"
    },

    "piece-length": {
      val: "1M",
      desc: "Settings.piece-length.desc"
    },

    "uri-selector": {
      val: "feedback",
      options: ["inorder", "feedback", "adaptive"],
      desc: "Settings.uri-selector.desc"
    }
    //}}}
  })
  .value("$globalSettings", {
    // {{{ settings (global)
    "download-result": {
      val: "default",
      options: ["default", "full"],
      desc: "Settings.download-result.desc"
    },
    log: {
      val: "",
      desc: "Settings.log.desc"
    },
    "log-level": {
      val: "debug",
      options: ["debug", "info", "notice", "warn", "error"],
      desc: "Settings.log-level.desc"
    },
    "max-concurrent-downloads": {
      val: 5,
      desc: "Settings.max-concurrent-downloads.desc"
    },
    "max-download-result": {
      val: 1000,
      desc: "Settings.max-download-result.desc"
    },
    "max-overall-download-limit": {
      val: "0",
      desc: "Settings.max-overall-download-limit.desc"
    },
    "max-overall-upload-limit": {
      val: "0",
      desc: "Settings.max-overall-upload-limit.desc"
    },
    "save-cookies": {
      val: "",
      desc: "Settings.save-cookies.desc"
    },
    "save-session": {
      val: "",
      desc: "Settings.save-session.desc"
    },
    "server-stat-of": {
      val: "",
      desc: "Settings.server-stat-of.desc"
    }
    // }}}
  })
  .value("$globalExclude", ["checksum", "index-out", "out", "pause", "select-file"])
  .value("$waitingExclude", [
    "dry-run",
    "metalink-base-uri",
    "parameterized-uri",
    "pause",
    "piece-length"
  ])
  .value("$activeInclude", [
    "bt-max-peers",
    "bt-request-peer-speed-limit",
    "bt-remove-unselected-file",
    "max-download-limit",
    "max-upload-limit"
  ]).name;
