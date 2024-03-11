const mongoose = require('mongoose')

const collectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log('mongo db connection')
    } catch(error) {
        console.log('mongodb error')
    }
}


module.exports = collectDB