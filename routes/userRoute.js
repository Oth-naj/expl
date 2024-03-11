const express = require('express');
const {createUser, Login, updateUser, deleteUser} = require('../controllers/userController');
const routes = express.Router();

routes.post('/signup',createUser)
routes.post('/login', Login)
routes.put('/update', updateUser)
routes.delete('/:id', deleteUser)







module.exports = routes;
