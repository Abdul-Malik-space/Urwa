// models/Printing.js
const mongoose = require('mongoose');

const PrintingSchema = new mongoose.Schema({
  product: { type: String, required: true },
  employee: { type: String, required: true },
  qty: { type: Number, required: true },
  rate: { type: Number, default: 0 },
  machine: { type: String, required: true },
  paperSize: { type: String },
  side: { type: String, enum: ['1-side', '2-side'], default: '1-side' },
  time: { type: String }, // وقت (e.g. 10:30 AM)
  createdAt: { type: Date, default: Date.now } // ریکارڈ کب بنا
});

module.exports = mongoose.model('Printing', PrintingSchema);