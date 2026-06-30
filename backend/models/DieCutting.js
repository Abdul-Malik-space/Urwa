// models/DieCutting.js
const mongoose = require('mongoose');

const DieCuttingSchema = new mongoose.Schema({
  product: { type: String, required: true },
  operator: { type: String, required: true },
  qty: { type: Number, required: true },
  rate: { type: Number, default: 0 },
  pressure: { type: String, default: 'N/A' },
  type: { 
    type: String, 
    enum: ['Single Side', 'Double Side'], 
    default: 'Single Side' 
  },
  time: { type: String }, // وقت (e.g., 11:20 AM)
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DieCutting', DieCuttingSchema);