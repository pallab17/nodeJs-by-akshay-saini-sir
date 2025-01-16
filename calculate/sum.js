function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
var p = " Hello Pallab";

// console.log(module.exports); // empty object

// module.exports.p=p;
// module.exports.calculateSum=calculateSum;

module.exports = {
  // p: p,
  // calculateSum: calculateSum
  p, calculateSum
};



// we can directly export the function and variable without creating an object as shown above as
// p, calculateSum are the keys of the object and p, calculateSum are the values of the object so we can directly export them as shown above
// if the key and value are same then we can directly export them as shown above and if they are different then we have to create an object and then export them as shown above


// 2nd way of exporting the function and variable is as shown below

//  export function calculateSum(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }
// export var p = " Hello Pallab";
