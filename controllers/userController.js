const { validationResult, Result } = require('express-validator');
const User = require('../Models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//create /sign up
const createUser = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword

    })
    newUser.save().then(result => {
        res.json('user created successfully!')
    }).catch(error=>{
        res.json('error!')

    })

}

//post / login
const Login = async(req,res)=>{
const userExists = User.findOne({
    email : req.body.email
}).then(user=>{
    console.log(user);
    const comparePassword = bcrypt.compareSync(req.body.password, user.password)
    if(!comparePassword){
        res.status(404).json({error: "wrong password!"})
    } 
    const token = jwt.sign({ user: user }, 'secret-key');
    res.status(200).json({message : "logged in successfully",token:token})
})


}

//update
const updateUser=async(req,res)=>{
    let id =req.body.id
    let findUser= await User.findOne({
      _id: id

    });
    
    
    findUser.email=req.body.email
    findUser.password=req.body.password
    
    findUser.save();
     res.json(findUser);

   
}
//delete
const deleteUser =(req,res)=>{
    User.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "User deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}
module.exports={createUser,Login,updateUser,deleteUser};



