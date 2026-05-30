const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);  // [Number : 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  //100.00

const otherNumber = 123.86788

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++ Maths +++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));  // 5
// console.log(Math.ceil(4.1));   // 5
// console.log(Math.floor(4.8));  // 4

console.log(Math.random());  // (0, 1)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);  // to avoid 0 adding 1(floor)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)