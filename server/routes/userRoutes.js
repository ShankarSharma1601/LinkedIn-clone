const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");
const router = express.Router();

// Routers
// POST || login
router.post("/login", loginController);

// POST || register
router.post("/register", registerController);

module.exports = router;
