console.log("hello ui");

var worker = new Worker("js/worker.js");
worker.onmessage = function(e){
	document.write(e.data);
	console.log(e.data);
}

setInterval(function(){
	console.log("hello ui 2");
}, 10);

