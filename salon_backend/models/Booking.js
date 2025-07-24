const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  service: String,
  date: String,
  time: String
});

module.exports = mongoose.model('Booking', BookingSchema);
