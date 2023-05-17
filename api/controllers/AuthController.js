const { User } = require("../models/UserModel");

exports.registerUser = async function (req, res) {
  const user = new User(req.body);

  try {
    const data = await user.save();
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Successfully signed up!",
      });
    } else {
      res.status(422).json({
        success: false,
        message: "Registration failed. Please check validation errors!",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
