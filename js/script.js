var modals = {
	err_connect: undefined,
	change_conf: undefined,
	newDownload_modal: undefined

};
var clear_dialogs = function() {
	modals.err_connect = $('#error_connect').modal('hide');
	modals.change_conf = $('#change_conf').modal('hide');
	modals.newDownload_modal = $('#newDownload_modal').modal('hide');
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
	clear_dialogs();
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

	aria_syscall({
		func: 'getVersion',
		sucess: function(data) {
			updateDownloads();
		},
		error: function() {
			modals.err_connect.modal('show');
			log.append('error connecting!!<br>');
		}
	});
};

$(function() {
	clear_dialogs();
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
		params: base64.btoa(JSON.stringify([[url]])),
		sucess: function() {
			clear_dialogs();
			update_ui();
		}
	});
}

var d_files = [];

function updateDownloads() {
	aria_syscall({
		func: 'tellActive',
		sucess: function(data) {
			var down_template = $('#download_item_template').text();
			var results = data.result;
			$('#downloads').html("");
			for(var i = 0; i < results.length; i++) {
				console.log('adding downloads!!!');
				var percentage =(results[i].completedLength / results[i].totalLength)*100;
				percentage = Math.round(percentage*1000)/1000;
				ctx = {
					name: results[i].files[0].path,
					status: results[i].status,
					percentage:percentage
				};
				var item = Mustache.render(down_template, ctx);
				console.log(ctx);
				console.log(results[i]);
				$('#downloads').append(item);
			}
			if(results && results.length === 0) {
				$('#downloads').append('no downloads!!!!');
			}
		},
		error: function() {
			modals.err_connect.modal('show');
			log.append('error connecting!!<br>');
		}
	});
}

function updateWaiting() {

}

function updateStopDownloads() {

}
setInterval(update_ui, 1000);
