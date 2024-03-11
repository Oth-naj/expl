const {  validationResult } = require('express-validator');
const Product = require('../Models/Product');
const mongoose = require('mongoose');
 



//creat name, description, price, quantity, image
const creatProduct= (req,res) => {
    console.log(req.body)
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json({erreur:result.array()});
    }
  
  
 let newProduct = new Product({
   name: req.body.name,
   description: req.body.description,
   price: req.body.price,
   quantite: req.body.quantite,
   image: req.file.originalname

 })
 newProduct.save();


 res.json(newProduct);
};


//get

const getProduct=async(req,res)=>{
   let product = await Product.find();
   res.json(product)
}


//update
const appdateProduct=async(req,res)=>{
    let id =req.body.id
    let findProduct= await Product.findOne({
      _id: id

    });
    
    findProduct.name=req.body.name 
    findProduct.description=req.body.description
    findProduct.price=req.body.price
    findProduct.quantite=req.body.quantite
    findProduct.save();
     res.json(findProduct);

   
}

//delete
const deletProduct =(req,res)=>{
    Product.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "Product deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}

 module.exports={
    creatProduct,getProduct,appdateProduct,deletProduct
 }