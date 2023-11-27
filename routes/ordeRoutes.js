const express= require('express');
const {createOrder,uporderr,deletOrder}=require('../controllers/orderControllers');
const routes =express.Router();










routes.put('/',uporderr)
routes.post('/',createOrder)
routes.delete('/:id',deletOrder)
module.exports=routes