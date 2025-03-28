const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields (name, email, and password) are required.' });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ success: false, message: 'User already exists with this email.' });
  }

  const user = await User.create({
    name,
    email,
    password,
    isAdmin: isAdmin || false,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: 'User registered successfully.',
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user.id, user.isAdmin),
      },
    });
  } else {
    return res.status(400).json({ success: false, message: 'User registration failed. Please try again.' });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ success: false, message: 'User not found. Please register first.' });
  }

  const isMatch = await user.matchPassword(password);

  if (isMatch) {
    const token = generateToken(user.id, user.isAdmin);

    res.cookie('token', token, {
      httpOnly: true, 
      sameSite: 'None',
    });

    return res.json({
      success: true,
      message: 'Login successful.',
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token,
      },
    });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid email or password. Please try again.' });
  }
});

const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.json({ success: true, message: 'Logged out successfully.' });
}



module.exports = { registerUser, loginUser ,logoutUser};
