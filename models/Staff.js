const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  code: {
    type: Number,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Permission',
    },
  ],
});

module.exports = mongoose.model('Staff', StaffSchema);
