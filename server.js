const express = require("express");
const connectDB = require("./config/connect");
require("dotenv").config({ path: "./config/.env" });
const Admin= require("./AdminController");
const Client= require("./ClientController");

const app = express();
connectDB();
app.use(express.json({ limit: "50mb" }));
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/admin",Admin);
app.use("/api/client",Client);
mongoose.Promise = global.Promise;
//middlewares
//port
port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});