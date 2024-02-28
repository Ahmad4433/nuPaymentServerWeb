const User = require("../../../models/User");
const fs = require("fs");

const updateUser = async (req, res, next) => {
  const { name, email, bio, website, userId } = req.body;
  console.log(email);
  try {
    const findedUser = await User.findOne({ email: email });

    const isExist = await User.findById(userId);

    (isExist.name = name ? name : isExist.name),
      (isExist.email = findedUser ? findedUser.email : email);
    (isExist.bio = bio ? bio : isExist.bio),
      (isExist.website = website ? website : isExist.website);
    isExist.image = !req.file
      ? req.imagePath + isExist.image
      : req.imagePath + req.file.path;

    const savedUser = await isExist.save();

    res
      .status(200)
      .json({
        success: true,
        message: "user updated successfully",
        token: "token",
        file: savedUser.image,
        bio: savedUser.bio,
        website: savedUser.website,
        role: savedUser.role,
        name: savedUser.name,
      });
  } catch (error) {
    next(error);
    if (req.file) {
      fs.unlink(req.file.path, (err) => {});
    }
  }
};

module.exports = updateUser;
