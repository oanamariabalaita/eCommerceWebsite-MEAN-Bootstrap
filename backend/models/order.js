var mongoose = require('mongoose');

module.exports = mongoose.model('order', {
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
    
    Street: String,
    StreetNumber: Number,
    Address_details: String,
    Country : String,
    City: String,
    Postal_code: String,
    Phone: Number,
    Company_name: String,
    Company_VAT: String,
    Company_REG: String,
    Company_address:String,
    Manufacturing_time: Number,
    Gift_code: String,
    Payment_type: String,
    Payment_due: Number
    
});