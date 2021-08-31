const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userschema = new schema(
    
        
{


    title:{
        type:String,
        required:true
    }
    ,
    
    desc:{
        type: String
    }, 
    active:{
        type:Boolean
    } ,
    }
    );

    const user = mongoose.model('User',userschema)

    module.exports = user;