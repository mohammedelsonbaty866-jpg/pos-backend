const express = require("express");
const router = express.Router();
const User = require("../models/User");

// إنشاء مستخدم (Admin / Cashier)
router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const user = new User({
      username,
      password,
      role
    });

    await user.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// تسجيل دخول
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        username: user.username,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
