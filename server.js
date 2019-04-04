var express = require('express');
var https = require('https');

var app = express();

app.get('/', function(req, res){
	
	res.sendFile(__dirname + "/public/index.xml");
})

https.get('https://desolate-castle-29966.herokuapp.com/' , (resp) =>{console.log(resp)})

var server = app.listen(process.env.PORT || 3000, function(){
	console.log("PORT is running on 3000");
});