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

function updateDownloads() {

}

function updateWaiting() {

}

function updateStopDownloads() {

}
