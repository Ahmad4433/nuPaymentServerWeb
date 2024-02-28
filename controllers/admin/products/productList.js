const Product = require('../../../models/Product')

const productList = async(req,res,next)=>{

try {
    
const findedProducts= await Product.find().sort({_id:-1})

    const filterArray = findedProducts.map((pro)=>{
       
        return {
            name:JSON.parse(pro.detail).name,
            brand:JSON.parse(pro.detail).brand,
            price:JSON.parse(pro.detail).price,
            category:JSON.parse(pro.detail).category,
            specification:JSON.parse(pro.detail).specification,
            description:JSON.parse(pro.detail).description,
            image:pro.image

        }
    })

res.status(200).json({message:'success',status:true,list:filterArray})

} catch (error) {
    next(error)
}




}

module.exports = productList