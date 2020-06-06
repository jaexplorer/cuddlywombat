const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Owner', OwnerSchema);
