const mongoose = require('mongoose');

const otherWorkSchema = new mongoose.Schema({
  item: { type: String, required: true },
  vendor: { type: String },
  cost: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  date: { type: String },
  desc: { type: String },
  time: { type: String, default: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OtherWork', otherWorkSchema);