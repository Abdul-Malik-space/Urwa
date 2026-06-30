const mongoose = require('mongoose');

const pastingSchema = new mongoose.Schema({
  product: { type: String, required: true },
  employee: { type: String, required: true },
  pieces: { type: Number, required: true },
  rate: { type: Number },
  adhesive: { type: String, default: 'Hot Glue' },
  side: { type: String, default: '1' },
  time: { type: String, default: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pasting', pastingSchema);