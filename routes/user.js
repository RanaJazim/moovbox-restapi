const express = require('express');
const user_controller = require("../controllers/user_controller");
const auth = require("../middleware/auth");

const router = express.Router();


router.post("/register", user_controller.register);
router.post("/login", user_controller.login);
router.post("/favourite", auth, user_controller.favourite);

module.exports = router;