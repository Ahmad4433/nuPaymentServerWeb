const Payment  = require('../../../models/Payment')

const singlePayment = async(req,res,next)=>{

const {id} = req.body

try {
    
    const findedPayment= await Payment.findById(id)

    if(!findedPayment){
        const error = new Error('no payment founded')
        error.statusCode = 400
        throw error
    }

    res.status(200).json({message:'success',status:true,findedPayment})


} catch (error) {
    next(error)
}

}

module.exports = singlePayment