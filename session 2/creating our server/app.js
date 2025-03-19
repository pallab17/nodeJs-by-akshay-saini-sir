const express = require("express");
const app = express();
const connectDB = require("./database");
const User = require("./models/user");
app.use(express.json());

// get request for finding users from the database for a particular emailId
app.get("/user", async(req,res)=>{
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
  try{
    const users = await User.findOne({emailId:userEmail});
    if(users.length===0){
      res.status(404).send("User not found");
    }else{
      res.send(users);
    }
  }catch(err){  
    res.status(400).send("User not found" + err.message);
  }
})

// get request for finding all users from the database
app.get("/feed",async(req,res)=>{
  try{ 
    const users = await User.find();
    res.send(users);

  } catch(err){
    res.status(400).send("Users not found" + err.message);
  }
})


app.post("/signup",async(req,res)=>{
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
  try{
    // saving the user to the database
     await user.save();
    // sending the response to the client
     res.send("User created successfully");

  }catch(err){
   res.status(400).send("User not created" + err.message);
  }
})

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


