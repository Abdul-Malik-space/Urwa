const mongoose = require('mongoose');

const readyProductSchema = new mongoose.Schema({
  product: { type: String, required: true },
  process: { type: String, required: true },
  qty: { type: Number, required: true },
  location: { type: String, default: 'Main Store' },
  packaging: { type: String },
  employee: { type: String },
  time: { type: String, default: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ReadyProduct', readyProductSchema);