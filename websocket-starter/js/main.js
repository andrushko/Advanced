var connection = new WebSocket("ws://localhost:1111");

connection.onopen = function(){
	console.log("Connected via websocket");
	connection.send(JSON.stringify({
		seconds: 1,
		count: 5
	}));
}

connection.onmessage = function(message){
	console.log(message.data);
}