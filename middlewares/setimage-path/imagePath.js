
const imagePath = (req,res,next)=>{
const protocol = req.protocol
const host = req.get('host')
const domain =`${protocol}://${host}/`
req.imagePath= domain
next()
}

module.exports  = imagePath