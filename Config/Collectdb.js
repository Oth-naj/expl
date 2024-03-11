const mongoose = require('mongoose');

const ConnectDb=async()=>{
try {
    await mongoose.connect('mongodb://localhost:27017/TestDb')
    console.log('mongodb connection')
} catch (error) {
    console.log('error!')
}
}

module.exports = ConnectDb;