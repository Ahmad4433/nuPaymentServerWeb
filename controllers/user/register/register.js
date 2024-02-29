const User = require('../../../models/User')
const joi = require('joi')
const bcrypt = require('bcrypt')

const registerUser = async(req,res,next)=>{
// const {error:validationError} = validateUser(req.body)
    const {email,role,password,currency,name,address,image,bio} = req.body

    const formatedName = name.trim()


try {
    // if(validationError){
    //     const error = new Error(validationError.details[0].message)
    //     error.statusCode = 400
    //     throw error
    // }
const isNameExist = await User.findOne({name:name})
if(isNameExist){
    const error = new Error('user name already exist')
    error.statusCode = 400
    throw error
}

    const isExist = await User.findOne({email:email})
    if(isExist){
        const error = new Error('This email is already taken')
        error.statusCode = 400
        throw error
    }



    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({
        email:email,password:hashedPassword,role:role,
        name:formatedName,
        currency: role==='business'? currency:null,
        address:address,
        image:image,
        bio:bio
    })

const savedUser = await newUser.save()

res.status(200).json({message:'success user created',success:true, userId:savedUser._id,token:'token',name:savedUser.name,email:savedUser.email,role:savedUser.role })




} catch (error) {
    next(error)
}


}

module.exports = registerUser

function validateUser(data){
    const userSchema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(4).max(8).required(),
        role:joi.string(),
        currency:joi.string().allow(),
        name:joi.string().min(2).required()
   

    })
    return userSchema.validate(data)
}