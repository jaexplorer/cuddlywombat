const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
