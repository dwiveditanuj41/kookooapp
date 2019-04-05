var express = require('express');
var http = require('https');
var events = require('events');
var eventEmmiter = new events.EventEmitter();

var app = express();

app.get('/', function(req, res){
	
	res.sendFile(__dirname + "/public/index.xml");
	
})

http.get('https://desolate-castle-29966.herokuapp.com/?event=GotDTMF&data=1', (resp) => {
  app.get('/', function(req, res){
	
	res.sendFile(__dirname + "/public/GotDTMF1.xml");
	
})
  });



var server = app.listen(process.env.PORT || 3000, function(){
	console.log("PORT is running on 3000");
	console.log(process.env.PORT);
});

