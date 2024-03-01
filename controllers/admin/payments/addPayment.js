const User = require("../../../models/User");
const Payment = require("../../../models/Payment");

const addPayment = async (req, res, next) => {
  const { data,userId } = req.body;
 

  try {
   

    const findedUser = await User.findOne({name:data.name});
    if (!findedUser) {
      const error = new Error("no user found");
      error.statusCode = 400;
      throw error;
    }
    const newPayment = new Payment({
      detail: data,
      user: userId,
    });
    const savedPayment = await newPayment.save();
    findedUser.paymant.push(savedPayment._id);

    await findedUser.save();
    res
      .status(200)
      .json({
        message: "payment added successfully",
        status: true,
        paymentId: savedPayment._id,
        user:{name:findedUser.name,image:findedUser.image,email:findedUser.email}
      });
  } catch (error) {
    next(error);
  }
};

module.exports = addPayment;
