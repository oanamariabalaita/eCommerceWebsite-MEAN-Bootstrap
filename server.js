var cors = require('cors');
var express= require('express');
var Order = require('./backend/models/Order');
var Product = ('./backend/models/Product');

var app = express(); 						
var mongoose = require('mongoose'); 				
var port = 4200; 				
var database = require('./config/database'); 			
var morgan = require('morgan');
var bodyParser = require('body-parser');

mongoose.connect(database.localUrl); 	
const connection = mongoose.connection;
connection.once('open', () =>{
	console.log('MongoDB database connection established');

});



app.use(cors());
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 

app.use(bodyParser.json({type: 'application/vnd.api+json'})); 


//app.use(express.static('./src')); 		


// routes ======================================================================
require('./backend/routes.js')(app);


app.listen(port);
console.log("App listening on port " + port);
