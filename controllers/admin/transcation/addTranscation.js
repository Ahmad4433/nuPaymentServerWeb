const Transcation = require('../../../models/Transcation')
const User = require('../../../models/User')


const addTranscation = async(req,res,next)=>{

const {data,rec} = req.body

try {
    
    const receiver = await User.findById(rec)

    const findedUSer = await User.findOne({name:data.sender})
if(!findedUSer){
    const error = new Error('no user found')
    error.statusCode = 400
    throw error
}
    const newTranscation = new Transcation({
        sender:data.sender,
        amount:data.amount,
        status:data.status,
        detail:data.detail
    })

    const savedTranscation = await newTranscation.save()

    findedUSer.transcation.push(savedTranscation._id)
    await findedUSer.save()
    receiver.transcation.push(savedTranscation._id)
    await receiver.save()
    res.status(200).json({message:'success',status:'success'})
} catch (error) {
    next(error)
}

}

module.exports = addTranscation


