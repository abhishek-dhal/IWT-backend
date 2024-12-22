// backend/routes/auth.js
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const router = express.Router();

// // Register a new user
// router.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login a user
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // Generate token
//     const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ token, username: user.username });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

