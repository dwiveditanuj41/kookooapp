var express = require('express');

var app = express();

app.use(express.static("public"));
app.get('/', function(req, res){
	
	res.sendFile(__dirname + "index");
})

var server = app.listen(process.env.PORT || 3000, function(){
	console.log("PORT is running on 3000");
});