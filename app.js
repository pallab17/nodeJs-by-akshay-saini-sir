// var naam = "Pallab";

// var no = 10;

// var no1 = 20;

// console.log(naam);
// console.log(no+no1);

//console.log(global);

//console.log(this);   // empty object

//console.log(globalThis);

//console.log(globalThis === global);  // true

//require("./xyz.js");
require("./xyz");
// if we dont write the js extension then also it will work as node will automatically add the extension and search for the file and it will assume that the file is a js file
//const object = require("./sum.js");
//const {calculateSum,p} = require("./calculate/sum.js"); // destructuring
//const {calculateMultiply} = require("./calculate/multiply.js");


// directly importing all the functions and variables from the index.js file
const {calculateMultiply, calculateSum,p} = require("./calculate/pallab");
// we dont need to write the index.js file name as node will automatically search for the index.js file if we dont write the file name as it will assume its a type of folder import
// we can keep whatever file name we want index.js is not compulsory

var a = 10;
var b = 20;
//object.calculateSum(a, b);
calculateSum(a, b);
calculateMultiply(a, b);

//console.log(object.p);
console.log(p);


// 2nd way of importing the function and variable is as shown below
// import {calculateSum,p} from "./sum.js";
// var a = 10;
// var b = 20;
// calculateSum(a, b);
// console.log(p);
