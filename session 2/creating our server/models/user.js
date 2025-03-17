const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

// way 1 to export the model
const User =  mongoose.model("User",userSchema);

module.exports = User;

// way 2 to export the model
// module.exports = mongoose.model("User", userSchema);


// to use the schema we have to create a model
// basically schema is like a blueprint and model is like a building such that 
// schema is like how  the features of a person should be and model is like a person with those features ,now to use those features we have to create a person with those features and that is model in mongoose 
// so we have to create a model to use the schema

// for eg we want a robot with some features like name ,age ,color etc so we have to create a blueprint for that robot and that is schema and then we have to create a robot with those features and that is model
//  so we are creating a robot with those features to use those features 

//  suppose i want a robot with features like cooking ,cleaning etc so i have to create a blueprint for that robot and that is schema and then i have to create a robot with those features and that is model
// such that i am creating a robot with those features to use those features 