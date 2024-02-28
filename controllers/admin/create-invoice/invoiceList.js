const Invoice = require('../../../models/Invoice')
const User = require('../../../models/User')



const invoiceList = async(req,res,next)=>{
// const {userId} = req.body
try {
    
const list = await Invoice.find()
// {user:userId}
// .populate({
//     path:'user',
//     select:'image'
// })



const newList = list.map((li)=>{

    return JSON.parse(li.detail)
})







res.status(200).json({message:'success',status:true,list:newList})


} catch (error) {
    next(error)
}


}

module.exports = invoiceList