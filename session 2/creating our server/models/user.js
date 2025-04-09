const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 4,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if(!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },

  },
  password: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value){
      // this is a custom validator function which will check if the value is in the array or not such that if the value is not in the array then it will throw an error and the value should be either male female or others and value is the string that the user is providing.
      if(["male","female","others"].includes(value)==false){
        throw new Error("Gender data is invalid");

      }
    },
  },
  about:{
    type: String,
    default:"Hello i am using this xyz app",
  },
  skills:{
    type: [String],
  }
},{
  timestamps: true, // this will add createdAt and updatedAt fields to the schema
});

// way 1 to export the model
// here "User" is the name of the model and userSchema is the schema that we have created above and mongoose.model is a function that takes two arguments first is the name of the model and second is the schema that we have created above and it will create a model with the name User and schema userSchema and we can use this model to create a new user in the database
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