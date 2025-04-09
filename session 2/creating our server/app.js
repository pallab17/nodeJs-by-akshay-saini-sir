const express = require("express");
const app = express();
const connectDB = require("./database");
const User = require("./models/user");
app.use(express.json());

// get request for finding users from the database for a particular emailId
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  // try{
  //   const users = await User.find({emailId:userEmail});
  //   if(users.length===0){
  //     res.status(404).send("User not found");
  //   }else{
  //     res.send(users);
  //   }
  // }
  //
  try {
    const users = await User.findOne({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("User not found" + err.message);
  }
});

// get request for finding all users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send("Users not found" + err.message);
  }
});

// adding a new user to the database
app.post("/signup", async (req, res) => {
  // creating a new instance of the user model 1st way
  // constObj = {
  //   firstName:"Plllllllllllaab",
  //   lastName:"Baee",
  //   emailId:"pall@1.com",
  //   password:"palb123",

  // }
  // const user = new User(constObj);

  // creating a new instance of the user model 2nd way
  // const user = new User({
  //   firstName:"Pallab",
  //   lastName:"Banerjee",
  //   emailId:"pall@17.com",
  //   password:"palllab123",
  // })

  // creating a new instance of the user model 3rd way using req.body that is data from the client side that is dynamic data
  // console.log(req.body);
  const user = new User(req.body);
  try {
    // saving the user to the database
    await user.save();
    // sending the response to the client
    res.send("User created successfully");
  } catch (err) {
    res.status(400).send("User not created" + err.message);
  }
});

// deleting a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // const user = await User.findByIdAndDelete({_id:userId}); //1st way
    const user = await User.findByIdAndDelete(userId); //2nd way

    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("User not deleted" + err.message);
  }
});

// updating a user in the database
// we can use findByIdAndUpdate() method to update the user in the database
// app.patch("/user", async (req, res) => {
//   const userId = req.body.userId;
//   const updateObj = req.body;
//   try {
//     const allowed_updates = ["userId","about", "skills", "age", "gender"];
//     // this will check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
//     // this is a way to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
//     // but when we are testing this then we can use any key in the updateObj and it will not throw an error but when we are using this in production then we can use only the keys that are present in the allowed_updates array and if we use any other key then it will throw an error and we can use this to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
//     // but when we will create from the client side then we will use only the keys that are present in the allowed_updates array and if we use any other key then it will throw an error and we can use this to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error so basically the user cant update the user with any other key that is not present in the allowed_updates array and this is a way to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
//     const isUpdateAllowed = Object.keys(updateObj).every((key) =>
//       allowed_updates.includes(key)
//     );
//     if (!isUpdateAllowed) {
//       // return res.status(400).send("Invalid updates");
//       throw new Error("Invalid updates");
//     }
//     if(updateObj?.skills?.length>10){
//       throw new Error("Skills should be less than 10");
//     }
//     const user = await User.findByIdAndUpdate({ _id: userId }, updateObj, {
//       runValidators: true, // this will run the validators that we have set in the schema
//     });
//     console.log(user);
//     res.send("User updated successfully");
//   } catch (err) {
//     res.status(400).send("User not deleted" + err.message);
//   }
// });

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId; // getting the userId from the url params
  const updateObj = req.body;
  try {
    const allowed_updates = ["about", "skills", "age", "gender"];
    // this will check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    // this is a way to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    // but when we are testing this then we can use any key in the updateObj and it will not throw an error but when we are using this in production then we can use only the keys that are present in the allowed_updates array and if we use any other key then it will throw an error and we can use this to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    // but when we will create from the client side then we will use only the keys that are present in the allowed_updates array and if we use any other key then it will throw an error and we can use this to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error so basically the user cant update the user with any other key that is not present in the allowed_updates array and this is a way to check if the keys in the updateObj are present in the allowed_updates array or not and if not then it will throw an error
    const isUpdateAllowed = Object.keys(updateObj).every((key) =>
      allowed_updates.includes(key)
    );
    if (!isUpdateAllowed) {
      // return res.status(400).send("Invalid updates");
      throw new Error("Invalid updates");
    }
    if(updateObj?.skills?.length>10){
      throw new Error("Skills should be less than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, updateObj, {
      runValidators: true, // this will run the validators that we have set in the schema
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("User not deleted" + err.message);
  }
});

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
