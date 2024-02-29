const User = require('../../../models/User')



const singleUserByName = async(req,res,next)=>{
const {userName} = req.body
    try {

        const findedUser = await User.findOne({name:userName}).select('-password -paymant')

        res.status(200).json({message:'success',status:true,findedUser})

    } catch (error) {
        next(error)
    }


}

module.exports = singleUserByName