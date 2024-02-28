const Payment = require('../../../models/Payment')
const User = require('../../../models/User')

const paymentList = async(req,res,next)=>{
const {userId} = req.body


try {
    
if(!userId){
    const error = new Error('no user id found')
    error.statusCode = 400
    throw error
}

const findedUser = await User.findById(userId)

if(!findedUser){
    const error = new Error('no user found')
    error.statusCode = 400
    throw error
}




    const findedArray = await Payment.find({ user: userId }).sort({ _id: -1 });


res.status(200).json({message:'success',status:true,payment:findedArray})

} catch (error) {
    next(error)
}



}

module.exports = paymentList