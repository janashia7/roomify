const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../db/models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, full_name } = req.body;
  try {
    const user = new User({ email, password, full_name });
    await user.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: { email: user.email, full_name: user.full_name },
    });
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).json({
        success: false,
        message: `User with email ${email} is already registered`,
      });
    } else {
      res.status(400).json({
        success: false,
        message: `Failed to create user`,
      });
    }
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Incorrect Credentials');

    const isMatch = await user.checkPassword(password);
    if (!isMatch) throw new Error('Incorrect Credentials');

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: 'User logged successfully',
      data: token,
    });
  } catch (err) {
    res.status(401).json({ success: false, message: err.message });
  }
});

module.exports = router;
