const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/connectDB");

// dotenv config
dotenv.config();

// connect database
connectDB();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
// user routes
app.use("/api/v1/users", require("./routes/userRoutes"));
// blog routes
app.use("/api/v1/posts", require("./routes/postRoutes"));

// app.get("/", (req, res) => {
//   res.send("hello from server");
// });

// PORT
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server is running`);
});
