const User = require("../../../models/User");
const bcrypt = require("bcrypt");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const findedUser = await User.findOne({ email: email });
    if (!findedUser) {
      const error = new Error("Invalid email addresss");
      error.statusCode = 400;

      throw error;
    }

    const isMatched = await bcrypt.compare(password, findedUser.password);
    if (!isMatched) {
      const error = new Error("Invalid password");
      error.statusCode = 400;
      throw error;
    }

    res.status(200).json({
      success: true,
      userInfo: {
        role: findedUser.role,
        email: findedUser.email,
      },
      name:findedUser.name,
      email:findedUser.email,
      token:'token',
      file:findedUser.image,
      userId:findedUser._id,
      bio:findedUser.bio,
      website:findedUser.website
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
