const User = require("../../models/User");
// const axios = require('axios')
const allUser = async (req, res, next) => {
  try {

    // const formatedArray =[]
    const userList = await User.find().select('-password -paymant');

    // const otherUser = await axios.get('http://localhost:8080/api/users/')

    // userList.map((user)=>{
    //     return formatedArray.push(user.name)
    // })
  
    // const newArray = otherUser.data.users.map((user)=>{
    //     return formatedArray.push(user.userName)
    // })





    res.status(200).json({ message: "succcess", usersList:userList });
  } catch (error) {
    next(error);
  }
};

module.exports = allUser;
