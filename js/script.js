var modals = {
	err_connect: undefined,
	change_conf: undefined,
	newDownload_modal: undefined

};
var server_conf = {
	host: 'localhost',
	port: 6800
};
var custom_aria2_connect = function() {
	modals.err_connect.modal('hide');
	modals.change_conf.modal('show');
};
var update_server_conf = function() {
	server_conf.host = $('#input_host').val();
	server_conf.port = $('#input_port').val();
	update_ui();
};
var aria_syscall = function(conf) {
	$.ajax({
		url: 'http://' + server_conf.host + ':' + server_conf.port + '/jsonrpc',
		timeout: 3000,
		data: {
			jsonrpc: 2.0,
			id: 'webui',
			method: 'aria2.' + conf.func.toString(),
			params: conf.params
		},
		success: conf.sucess,
		error: conf.error,
		dataType: 'jsonp',
		jsonp: 'jsoncallback'
	});

}
var log = $('#console');
var update_ui = function() {
	modals.err_connect = $('#error_connect').modal('hide');
	modals.change_conf = $('#change_conf').modal('hide');
	modals.newDownload_modal = $('#newDownload_modal').modal('hide');
	log.append('connecting!!!<br>');
	aria_syscall({
		func: 'getVersion',
		sucess: function(data) {
			log.append(JSON.stringify(data) + '<br>');
			updateDownloads();
		},
		error: function() {
			modals.err_connect.modal('show');
			log.append('error connecting!!<br>');
		}
	});
};

$(function() {
	update_ui();
	$('#newDownload').click(function() {
		modals.newDownload_modal.modal('show');
	});
	$('#addNewDownload').click(newDownload);
});

/*function updateDownloads() {
	updateDownloads();
	updateWaiting();
	updateStopDownloads();
}*/
function newDownload() {
	var url = $('#newDownload_url').val();
	aria_syscall({
		func: 'addUri',
		params: [["google.com"]],
		sucess: function() {
			update_ui();
		}
	});
	alert(url);
}

var d_files = [];
function d_fill() {
	for(var i = 0; i < 10; i++) {
		addDownload({
			name: 'final name:' + i,
			gid: i,
			status: 'active',
			totalLength: (i + 15) * 20,
			completedLength: (i + 15) * 19,
			downloadSpeed: 200 + i
		});
	}
}
function addDownload(conf) {
	d_files.push(conf);

	var d_table = $('#d_table');
	var down = $('<tr></tr>');
	down.append($('<td></td>').text(conf.name));
	down.append($('<td></td>').text(conf.completedLength));
	down.append($('<td></td>').text(conf.totalLength));
	down.append($('<td></td>').text(conf.downloadSpeed));
	console.log(down.html());
	down.appendTo(d_table);

}
function updateDownloads() {
	aria_syscall({
		func: 'tellActive',
		sucess: function(data) {
			log.append("download Active are:" + JSON.stringify(data) + '<br>');
		},
		error: function() {
			modals.err_connect.modal('show');
			log.append('error connecting!!<br>');
		}
	});
	d_fill();
}

function updateWaiting() {

}

function updateStopDownloads() {

}
