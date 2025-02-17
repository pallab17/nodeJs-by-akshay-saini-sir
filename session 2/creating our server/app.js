const express = require("express");
const app = express();
const connectDB = require("./database");

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("database not connected");
  });


