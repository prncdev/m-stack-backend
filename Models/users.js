const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  
  age: { type: Number, required: true },
  image_url: String
});

const users = mongoose.model('users', userSchema);
module.exports = users;