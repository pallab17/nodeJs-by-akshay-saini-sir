const express = require("express");
const app = express();



// app.use("/about",(req,res)=>{
//     res.send("pb7 here");
// })

// app.use("/contact",(req,res)=>{
//     res.send("contact me at 8777777777");   

// })

// app.use("/hobbies",(req,res)=>{
//     res.send("I love to code");
// })

// app.use("/", (req, res) => {
//     res.send("Hello World");

// });

// app.use("/user", (req, res) => {
//     console.log(req.query);
    
//     res.send("User id is ");
// });
// { userid: '777' }

// app.use("/user/:id", (req, res) => {
//     console.log(req.params);
//     res.send("User id is " + req.params.id);
// }
// );
// { id: '7077' }

app.use("/user/:id/:name", (req, res) => {  
    console.log(req.params);
    res.send("User id is " + req.params.id + " and name is " + req.params.name);
}   
);
// { id: '7077', name: 'pb' }

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});