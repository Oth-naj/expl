const express= require('express');
const {creatProduct,getProduct,appdateProduct,deletProduct}=require('../controllers/productsControllers');
const routes =express.Router();
const { body } = require('express-validator');
const { uploadSingle } =require('../helpers/multerMidelwar')






routes.post('/', 
    uploadSingle,
    body('name').notEmpty(),
    body('description').notEmpty(),
    body('price').notEmpty(),
    body('quantite').notEmpty(),
    creatProduct
);

routes.get('/',getProduct)
routes.put('/',appdateProduct)
routes.delete('/:id',deletProduct)
module.exports = routes ;
