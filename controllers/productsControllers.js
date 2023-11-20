const product =require('../data/data.json')
const {  validationResult } = require('express-validator');

const fs=require('fs')
const path=require('path')






//creat name, description, price, quantity, image
const creatProduct= (req,res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json({erreur:result.array()});
    }
  
  let id = Math.floor(Math.random() * 1000)

 product.push({id:id ,name:req.body.name,description:req.body.description,price:req.body.price,quantité:req.body.quantité,image:req.file})
 console.log(image)
 fs.writeFile(path.join(__dirname,'../data/data.json'),JSON.stringify(product,null,2),(erreur)=>{

    console.log(erreur)
 })

 res.json(product);
};


//get

const getProduct=(req,res)=>{
   res.json(product)
}
//update
const appdateProduct=(req,res)=>{
    let id =req.body.id
    let findProduct=product.find(item=>item.id==id)
    let index =product.indexOf(findProduct)
    product[index].name=req.body.name 
    product[index].description=req.body.description
    product[index].price=req.body.price
    product[index].quantité=req.body.quantite
    product[index].image=req.body.image
    fs.writeFile(path.join(__dirname,'../data/data.json'),JSON.stringify(product,null,2),(erreur)=>{
        console.log(erreur)
     })
     res.json(product)

   
}
//delete
const deletProduct =(req,res)=>{
    let id =req.body.id
    let findProduct=product.find(item=>item.id==id)
    if (!findProduct){
        res.status(404).send('the product is undifind')
    }
    let index =product.indexOf(findProduct)

    product.splice(index,1)
    fs.writeFile(path.join(__dirname,'../data/data.json'),JSON.stringify(product,null,2),(erreur)=>{
        console.log(erreur)
     })
    res.json(product)
    
}

 module.exports={
    creatProduct,getProduct,appdateProduct,deletProduct
 }