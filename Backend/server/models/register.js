const mongoose = require('mongoose');

const SheconnectsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Ensure username is unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
    // Password should not be unique
  },
  gender: {
    type: String,
    required: true,
  }
});

const SheconnectsModel = mongoose.model('sheconnects', SheconnectsSchema);
module.exports = SheconnectsModel;
