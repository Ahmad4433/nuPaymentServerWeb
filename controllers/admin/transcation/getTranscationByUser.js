const User = require("../../../models/User");

const getTranscationByUser = async (req, res, next) => {
  const { userId } = req.body;

  try {
    const findedUser = await User.findById(userId);
    if (!findedUser) {
      const error = new Error("no user found");
      error.statusCode = 400;
      throw error;
    }
    const list = await User.findById(userId).populate([
      {
        path: "transcation",
      },
    ]);

    res.status(200).json({ message: "success", status: true, list });
  } catch (error) {
    next(error);
  }
};

module.exports = getTranscationByUser;
