const mongoose = require('mongoose');

const connectDB = async function(DB_URI) {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(`MongoDB connected on host: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;