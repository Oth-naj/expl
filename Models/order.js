const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        ref:'User',
        type: mongoose.Schema.Types.ObjectId,

    },
    //groupé les articles avec id :pagné
    Products:[{

          proId:{
            ref:'Product',
           type: mongoose.Schema.Types.ObjectId,
        }
     }]
    ,
    name:{
        type: String,
        required : true,  
    },
    
    price:{
        type: Number,
        required : true, 
    },
    quantite:{
        type: Number,
        required : true, 
    },
    status:{
        type:String,
        enum:['pending', 'done', 'error']
    }
    

})

const order = mongoose.model('order',orderSchema)

module.exports = order ;