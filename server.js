var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(req, res){
	
	res.sendFile(__dirname + "/public/index.xml");
	
})





var server = app.listen(process.env.PORT || 3000, function(){
	console.log("PORT is running on 3000");
});

app.get('GotDTMF', funtion(req,res){console.log(req); console.log(res);})