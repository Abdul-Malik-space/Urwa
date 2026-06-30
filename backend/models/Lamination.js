const mongoose = require("mongoose");

const laminationSchema = new mongoose.Schema({
  product: { type: String, required: true },
  qty: { type: Number, required: true },
  rate: { type: Number },
  side: { type: String, enum: ["Single", "Double"], default: "Single" },
  employee: { type: String },
  time: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Lamination", laminationSchema);