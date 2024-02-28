const Product = require('../../../models/Product')


const addProduct = async(req,res,next)=>{

const {data}= req.body

try {
   
    const newProduct = new Product({

        detail:data,
        image:req.file.path
    })
    
const savedProduct = await newProduct.save()

res.status(200).json({message:'success',status:true,id:savedProduct._id})


} catch (error) {
    next(error)
}


}

module.exports = addProduct