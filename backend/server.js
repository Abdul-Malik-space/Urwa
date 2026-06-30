const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors");
const app = express();
require("dotenv").config();

// 1. مڈل ویئرز (Middlewares)
app.use(express.json()); // JSON ڈیٹا پڑھنے کے لیے
const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map(origin => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));         // فرنٹ اینڈ کنکشن کے لیے

// 2. ڈیٹا بیس کنکشن (Database Connection)
// 2. ڈیٹا بیس کنکشن (Database Connection)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected Successfully!"))
  .catch(err => console.error("DB Connection Error:", err));

// 3. راؤٹس امپورٹ کرنا (Import Routes)
const customerRoutes = require("./routes/customerRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const traderRoutes = require("./routes/traderRoutes");
const itemRoutes = require("./routes/itemRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const brandRoutes = require("./routes/brandRoutes");
const unitRoutes = require("./routes/unitRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes")
const laminationRoutes = require("./routes/laminationRoutes");
const printinRoutes = require("./routes/printingRoutes")
const dieCuttingRoutes = require("./routes/dieCuttingRoutes");
const PastingRoutes = require("./routes/pastingRoutes")
const otherWorkRoutes = require("./routes/otherWorkRoutes")
const readyProductRoutes = require("./routes/readyProductsRoutes");
const expenseRoutes = require('./routes/expenseRoutes');
const payrollRoutes = require("./routes/payrollRoutes")
const accountRoutes = require("./routes/accountRoutes")
const wahrehouse = require("./routes/warehouseRoutes")
const reportRoutes = require("./routes/reportRoutes")
const settingRoutes = require("./routes/settingsRoutes")
const productionItemRoutes = require("./routes/productionItemRoutes");
const headerRoutes = require("./routes/headerRoutes");



app.use("/api/customers", customerRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/traders", traderRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/units", unitRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/lamination", laminationRoutes);
app.use("/api/printing", printinRoutes)
app.use("/api/dieCutting", dieCuttingRoutes);
app.use("/api/pasting", PastingRoutes)
app.use("/api/otherwork", otherWorkRoutes)
app.use("/api/ready-products", readyProductRoutes);
app.use('/api/expenses', expenseRoutes);
app.use("/api/payroll", payrollRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/warehouses", wahrehouse)
app.use("/api/reports", reportRoutes)
app.use("/api/settings", settingRoutes)
app.use("/api/production-items", productionItemRoutes);
app.use("/api/headers", headerRoutes);





app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running"
  });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;