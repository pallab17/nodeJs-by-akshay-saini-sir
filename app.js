// var naam = "Pallab";

// var no = 10;

// var no1 = 20;

// console.log(naam);
// console.log(no+no1);

//console.log(global);

//console.log(this);   // empty object

//console.log(globalThis);

//console.log(globalThis === global);  // true

require("./xyz.js");
//const object = require("./sum.js");
const {calculateSum,p} = require("./sum.js"); // destructuring
var a = 10;
var b = 20;
//object.calculateSum(a, b);
calculateSum(a, b);

//console.log(object.p);
console.log(p);



