const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name of item is Required'],
  },
  type: {
    type: String,
    enum: ['Foods', 'Drinks', 'Sides', 'Deserts'],
    default: 'Foods',
  },
  subtype: {
    type: String,
    enum: ['Chicken', 'Seafood', 'Pizza', 'Pasta', 'Cocktail', 'Coffee', 'Softdrink', 'Wine'],
    default: 'Chicken',
  },
  price: {
    type: Number,
    default: 0,
  },
  takeaway: {
    type: Boolean,
    default: false,
  },
  dinein: {
    type: Boolean,
    default: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('Item', ItemSchema);
