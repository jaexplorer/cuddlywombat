const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});

module.exports = mongoose.model('MenuModel', MenuSchema);
