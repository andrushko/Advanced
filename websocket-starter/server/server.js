var webSocketsServerPort = 1111;

var webSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
});

server.listen(webSocketsServerPort, function() {
    console.log((new Date()).toTimeString() + " Server is listening on port " +
        webSocketsServerPort);
});

var wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
	var connection = request.accept(null, request.origin);

	connection.on('message', function(message) {
		var clientObj = JSON.parse(message.utf8Data);

		if(clientObj.count > 0){
			var counter = clientObj.count;
			var interval = setInterval(function() {
				if(--counter <= 0){
					clearInterval(interval);
				}
				connection.sendUTF("Hello client");
			}, clientObj.seconds * 1000);
		}
	});
});