module.exports = function (app) {
    

    const AuthController = require("../controllers/AuthController");

    app.post("/register", AuthController.registerUser);
}