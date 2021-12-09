const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  message: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);