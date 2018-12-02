var express = require('express');
var app = express(); 						
var mongoose = require('mongoose'); 				
var port = 4200; 				
var database = require('./config/database'); 			
var morgan = require('morgan');
var bodyParser = require('body-parser');

mongoose.connect(database.localUrl); 	

app.use(express.static('./src')); 		
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 

//require('./backend/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
