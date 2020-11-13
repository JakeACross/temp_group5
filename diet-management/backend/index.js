const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/default.json");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const userRouter = require("./auth/AuthRoutes");
app.use(express.json());
app.use(cors());
mongoose.connect(
  config.mongodbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Connected to DB Successfully");
    }
  }
);

app.use(express.static("public"));
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
