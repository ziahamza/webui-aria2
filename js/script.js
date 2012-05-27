$(function() {
	/* load and connect with aria instance  */
	var err_connect = $("#error_connect").modal('hide');

	var log = $("#console");
	log.append("connecting!!!<br>");
	$.ajax({
		url: "http://localhost:6800/jsonrpc",
		timeout: 3000,
		data: {
			jsonrpc: 2.0,
			id: "webui",
			method: "aria2.getVersion"
		},
		success: function(data) {
			log.append(JSON.stringify(data) + "<br>");
			updateDownloads();
		},
		error: function() {
			err_connect.modal('show');
			log.append("error connecting!!<br>");
		},
		dataType: "jsonp",
		jsonp: "jsoncallback"
	});
});

function updateDownloads() {
	updateDownloads();
	updateWaiting();
	updateStopDownloads();
}

var d_files = [];
function d_fill() {
	for(var i = 0; i < 10; i++) {
		addDownload({
			gid: i,
			status: "active",
			totalLength: (i + 15) * 20,
			completedLength: (i + 15) * 19;
			downloadSpeed: 200 + i
		});
	}
}
function addDownload(conf) {
	d_files.push(conf);
	var d_table = $("#d_table");

}
function updateDownloads() {
	d_fill();
	var d_table = $("#d_table");
}

function updateWaiting() {

}

function updateStopDownloads() {

}
