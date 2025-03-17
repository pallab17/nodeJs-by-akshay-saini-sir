const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://pallabb584:0PIKnVqUhEkQae51@cluster0.em26u.mongodb.net/devTinder"
  );
};
module.exports = connectDB;

// connectDB().then(()=>{
//     console.log("Database connected");
// }).catch((err)=>{
//     console.error("database not connected");
// })