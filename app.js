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
//require("./xyz");
// if we dont write the js extension then also it will work as node will automatically add the extension and search for the file and it will assume that the file is a js file
//const object = require("./sum.js");
//const {calculateSum,p} = require("./sum.js"); // destructuring
// var a = 10;
// var b = 20;
//object.calculateSum(a, b);
//calculateSum(a, b);

//console.log(object.p);
//console.log(p);


// 2nd way of importing the function and variable is as shown below
import {calculateSum,p} from "./sum.js";
var a = 10;
var b = 20;
calculateSum(a, b);
console.log(p);
