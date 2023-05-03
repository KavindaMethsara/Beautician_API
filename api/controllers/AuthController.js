const { User } = require("../models/UserModel");

exports.registerUser = async function (req, res) {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    try {
        await user.save(); // Remove the callback parameter here
        const token = await user.generateToken();
        res.status(200).json({
            success: true,
            token: token
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};
