const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
// 🔗 الاتصال بقاعدة البيانات
mongoose
  .connect("PUT_YOUR_LINK_HERE", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
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
