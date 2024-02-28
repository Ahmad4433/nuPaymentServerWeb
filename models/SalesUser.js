const mongoose = require('mongoose')

const salesUserSchema = new mongoose.Schema({

detail:{type:Object},
image:{type:String}

},{timestamps:true})


module.exports = mongoose.model('SalesUser',salesUserSchema)