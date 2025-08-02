const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { JWT_EXPIRESIN, JWT_SECRET } = require("../config/config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ["male", "female"],
  },

  provider: {
    type: String,
    enum: ["local", "google"],
    default: "local",
  },

  googleId: {
    type: String,
    default: null,
  },

  monthlyBudget: {
    type: Number,
    default: 0,
  },

  isOnboarded: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken:String,
  resetPasswordExpires: Date,
});



userSchema.methods.getJwtToken=function(){
    return jwt.sign(
        {id:this._id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRESIN}
    )
}

userSchema.methods.comparePassword=async function(enteredPassword){
  return bcrypt.compare(enteredPassword,this.password);
}

module.exports = mongoose.model('User', userSchema);
