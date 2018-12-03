var mongoose= require('mongoose');


var OrderSchema = new  mongoose.Schema({

    ID :{
		type: String
    },
    
    Name : {
        type: String
    },
    
    Email : {
        type: String,
        required: [true, 'Why no email address?']
    },
    
    Date: {
    type : Date,
    dafault : Date.now
    	
    },
    
    Street: {
    type : String
    },
    
    StreetNumber : {
    type: Number
    },
    
    Address_details: {
    type: String 
    },
    
    Country :{
    type:  String
    },
    
    City: {
    type: String
    },
    
    Postal_code: {
    type: String
    },
    
    Phone: {
    type: Number
    },
    
    Company_name:{
    type: String
    },
    
    Company_VAT: {
    type: String
    },
    
    Company_REG: {
    type: String
    },
    
    Company_address:{
    type: String
    },
    
    Manufacturing_time: {
    type: Number
    },
    
    Gift_code:
    {type: String
    },
    
    Payment_type:{
    type: String
    },
    
    Payment_due: {
    type:Number
    }
});

module.exports =  mongoose.model('orders', OrderSchema);