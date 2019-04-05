var express = require('express');
var http = require('http');
var events = require('events');
var eventEmmiter = new events.EventEmitter();

var app = express();

app.get('/', function(req, res){
	
	res.sendFile(__dirname + "/public/index.xml");
	console.log(__dirname);
	console.log(res);

	eventEmmiter.addListener("GotDTMF", function(req,res){res.send(req);} );
	
})





var server = app.listen(process.env.PORT || 3000, function(){
	console.log("PORT is running on 3000");
	console.log(process.env.PORT);
});

