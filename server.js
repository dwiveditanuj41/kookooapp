var express = require('express');
var https = require('https');

var app = express();

app.get('/', function(req, res){
	
	res.sendFile(__dirname + "/public/index.xml");
	
})

app.on("GetDTMF", (data) =>{console.log(data)});

var server = app.listen(process.env.PORT || 3000, function(){
	console.log("PORT is running on 3000");
});