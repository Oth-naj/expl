const mongoose = require('mongoose');
const order=require('../Models/order')
const {  validationResult } = require('express-validator');






const createOrder= (req,res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json({erreur:result.array()});
    }
  
  
 let newOrder = new order({
    userId:req.body.userId,
    ProductId:req.body.ProductId,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantite: req.body.quantite,
   

 })
 newOrder.save();


 res.json(newOrder);
};
const uporderr=async(req,res)=>{
    let id =req.body.id
    let findOrder= await order.findOne({
      _id: id

    });
    console.log(findOrder)
    
    findOrder.quantite=req.body.quantite
    
    
    findOrder.save();
     res.json(findOrder);

   
}
const deletOrder =(req,res)=>{
    order.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "Order deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}




module.exports={createOrder,uporderr,deletOrder}











