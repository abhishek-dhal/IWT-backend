// backend/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    console.log('Mongo URI:', process.env.MONGO_URI);  // Log to see if the URI is loaded correctly

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
