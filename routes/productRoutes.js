const express= require('express');
const {creatProduct,getProduct,appdateProduct,deletProduct}=require('../controllers/productsControllers');
const routes =express.Router();
const { body } = require('express-validator');







routes.post('/', body('name').notEmpty(),body('description').notEmpty(),body('price').notEmpty(),body('image').notEmpty(),body('quantité').notEmpty(),creatProduct)
routes.get('/',getProduct)
routes.put('/',appdateProduct)
routes.delete('/',deletProduct)
module.exports = routes;
