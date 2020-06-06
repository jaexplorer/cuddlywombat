const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  full_name: {
    type: String,
    trim: true,
    required: [true, 'Full name of order is Required'],
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});

module.exports = mongoose.model('Order', OrderSchema);
