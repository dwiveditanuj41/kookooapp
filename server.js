var express = require('express');
var http = require('https');
var events = require('events');
var eventEmmiter = new events.EventEmitter();
var router=express.Router()

var app = express();
app.use('/',router);

router.get('/', function(req, res){
	   
	    console.log(req.query.data);
	    if(!req.query.data)
	    {
	    	res.sendFile(__dirname + "/public/" + "index.xml");

	    }
	    else
		{res.sendFile(__dirname + "/public/GotDTMF" + req.query.data + ".xml");}
	})
	





var server = app.listen(process.env.PORT || 3000, function(){
	console.log("PORT is running on 3000");
	console.log(process.env.PORT);
});

