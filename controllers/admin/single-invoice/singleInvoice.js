const Invoice = require('../../../models/Invoice')
const User = require('../../../models/User')


const singleInvoice = async(req,res,next)=>{
const invoiceId = req.query.inv



try {
    
    const findedInvoice = await Invoice.findById(invoiceId)
    
    if(!findedInvoice){
        const error = new Error('no invoice found')
        error.statusCode = 400
        throw error
    }
    
res.status(200).json({message:'success',status:true,findedInvoice})


} catch (error) {
    next(error)
}

}


module.exports = singleInvoice