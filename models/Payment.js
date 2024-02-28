const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({

detail:{
    type:Object
},
user:{
    type:mongoose.Types.ObjectId,ref:'User'
}

},{timestamps:true})

module.exports = mongoose.model('Payment',paymentSchema)