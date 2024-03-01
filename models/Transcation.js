const mongoose = require('mongoose')
const transcationSchema = new mongoose.Schema({

    sender:{type:String},
    amount:{type:Number},
    detail:{type:String},
    status:{type:String},


},{timestamps:true})

module.exports=  mongoose.model('Transcation',transcationSchema)