var mongoose= require('mongoose');

var ProductSchema = new mongoose.Schema({

    ID :{
		type: String
    },
    
    Name : {
        type: String
    },
    
    Price : {
        type: Number,
    },
    
    Discount: {
    type : Number,
    	
    }
});

module.exports = mongoose.model('products', ProductSchema);