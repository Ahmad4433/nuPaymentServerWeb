const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({

    detail:{type:Object},
    image:{type:String}

},{timestamps:true})


module.exports = mongoose.model('Product',productSchema)