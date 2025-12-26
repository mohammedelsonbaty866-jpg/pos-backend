const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// 🔗 الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/pos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Route تجريبي
app.get("/", (req, res) => {
  res.send("POS Backend is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
