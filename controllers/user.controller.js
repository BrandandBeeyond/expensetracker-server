const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config/config");

const registerNewUser = async (req, res) => {
  try {
    const { name, email, gender, mobile, password } = req.body;

    if (!name || !email || !password || !mobile || !gender) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all required fields" });
    }

    const existingUser = await User.findOne({email:email})
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      mobile,
      gender,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
const checkUserExists = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        userExists: false,
        message: "please enter email",
      });
    }

    const user = await User.findOne({ email });

    return res.status(200).json({
      success: true,
      userExists: !!user, // Ensures it is always a boolean
      message: user
        ? "User exists, proceed to login"
        : "User does not exist, proceed to registration",
    });
  } catch (error) {
    console.error("Error in checkUserExist:", error);
    return res.status(500).json({
      success: false,
      userExists: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = {
  registerNewUser,
  checkUserExists,
};
