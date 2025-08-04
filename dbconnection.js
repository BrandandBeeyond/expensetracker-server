const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config/config');


const connectTodb = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.error(error);
  }
};

module.exports =  connectTodb;