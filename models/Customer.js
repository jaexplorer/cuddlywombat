const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  full_name: {
    type: String,
    trim: true,
    required: [true, 'Full name is Required'],
  },
  phone_number: {
    type: Number,
    required: [true, 'Phone number is Required'],
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
