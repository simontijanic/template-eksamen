const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);

router.get("/register", authController.getRegisterUser);
router.get("/login", authController.getLoginUser);


module.exports = router;