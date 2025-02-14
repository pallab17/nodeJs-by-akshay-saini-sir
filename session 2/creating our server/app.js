const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");

});

app.get("/about",(req,res)=>{
    res.send("pb7 here");
})

app.get("/contact",(req,res)=>{
    res.send("contact me at 8777777777");   

})

app.get("/hobbies",(req,res)=>{
    res.send("I love to code");
})


app.listen(7777, () => {
  console.log("Server is running on port 7777");
});