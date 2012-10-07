var JsonRPC = function(conf) {
	if (!this instanceof JsonRPC)
		return new JsonRPC();
	this.avgTimeout = 2000;
	this.serverConf = conf;
};
JsonRPC.prototype = {
	encode: function(obj) {
		return base64.btoa(JSON.stringify(obj));
	},
	ariaRequest: function(url, multicall, funcName, params, success, error) {
		var startTime = new Date();
        var conn = this;
		$.ajax({
			url: url,
			timeout: this.avgTimeout,
			data: {
				jsonrpc: 2.0,
				id: 'webui',
				method: funcName.search(/\./g) == -1 ? 'aria2.' + funcName : funcName,
				params: params.length ? this.encode(params) : undefined
			},
			success: function(data) {
				conn.avgTimeout = 3 * (new Date() - startTime);
				return success(data)
			},
			error: error,
			dataType: 'jsonp',
			jsonp: 'jsoncallback'
		});
	},
	invoke: function(opts) {
		var rpc = this;
		var scheme = rpc.serverConf.encryption ? 'https' : 'http';
		rpc.ariaRequest(
			scheme + '://' + rpc.serverConf.host + ':' + rpc.serverConf.port + '/jsonrpc',
			opts.multicall,
			opts.func,
			opts.params,
			opts.success,
			function() {
				// check if authentication details are given, if yes then use a hack to support
				// http authentication otherwise emit error
				if (!rpc.serverConf.user.length) {
					console.log("no user name and still error!!!");
					return opts.error();
				}

				var authUrl = scheme + '://' +
					rpc.serverConf.user +  ":" +
					rpc.serverConf.pass + "@" +
					rpc.serverConf.host + ':' +
					rpc.serverConf.port + '/jsonrpc';

				// hack is to basically inject an image with same uri as the aria2 rpc url,
				// most browsers will then cache the authentication details and we dont have
				// to give them next time we make a request
				var img = $('<img/>').attr("src", authUrl);
				$('body').append(img);
				img.remove();

				// timeout to let the image load and then make a request,
				setTimeout(function() {
					rpc.ariaRequest(
						authUrl,
						opts.multicall,
						opts.params,
						opts.success,
						opts.error
					);
				}, rpc.avgTimeout);
			}
		);
	}
};

var SocketRPC = function(conf) {
	if (!this instanceof SocketRPC)
		return new SocketRPC();

	var rpc = this;
	rpc.serverConf = conf;
	rpc.initialized = false;
	rpc.handles = [];
	var scheme = rpc.serverConf.encryption ? 'wss' : 'ws';
	rpc.sock = new WebSocket(scheme + '://' + conf.host + ':' + conf.port + '/jsonrpc');
	rpc.sock.onopen = function() {
		rpc.initialized = true;
	};
	rpc.sock.onclose = rpc.sock.onerror = function() {
		_.each(rpc.handles, function(h) { h.error() });
		rpc.handles = [];
	};
	rpc.sock.onmessage = function(message) {
		var data = JSON.parse(message.data);
		for (var i = rpc.handles.length; i--; ) {
			if (rpc.handles[i].id === data.id) {
				if (data.error)
					rpc.handles[i].error();
				else
					rpc.handles[i].success(data);
				rpc.handles.splice(i, 1);
				return;
			}
		}
	};
}
SocketRPC.prototype = {
	invoke: function(opts) {
		var data =  {
			jsonrpc: 2.0,
			id: 'webui_' + utils.randStr(),
			method: opts.func.search(/\./g) == -1 ? 'aria2.' + opts.func : opts.func,
			params: opts.params.length ? opts.params : undefined
		};

		this.handles.push({
			success: opts.success,
			error: opts.error,
			id: data.id
		});
		this.sock.send(JSON.stringify(data));
	},
};
var AriaConnection = function(conf) {
	var conf = conf || {
		host: 'localhost',
		port: 6800,
		user: '',
		pass: ''
	};
	var jRPC = new JsonRPC(conf);
	if (typeof WebSocket != "undefined") {
		var sockRPC = new SocketRPC(conf);
	 }

	return {
		conf: conf,
		invoke: function(opts) {
			opts = utils.mixin(opts, {
				success: function() {},
				error: function() {},
				params: [],
				func: ''
			});
			if (!sockRPC || !sockRPC.initialized)
				return jRPC.invoke(opts);
			else
				return sockRPC.invoke(opts);
		}
	};
}


