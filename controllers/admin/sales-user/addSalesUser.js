const SalesUser = require("../../../models/SalesUser");

const addSalesUser = async (req, res, next) => {
  const { data } = req.body;

  try {
    const newUser = new SalesUser({
      detail: data,
      image: req.file.path,
    });

    const savesUser = await newUser.save();

    res
      .status(200)
      .json({ message: "success", statu: true, userId: savesUser._id });
  } catch (error) {
    next(error);
  }
};

module.exports = addSalesUser;
