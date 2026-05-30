// array

const myArr = [1,2,3,4,5]
const myHeros = ["batman", "ironman", "joker"]
const myArr2 = new Array(1, 2, 3, 4)

//  Array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)  // insert at start
// myArr.shift()  // remove from start

// console.log(myArr.includes(9));  // check if included(T or F)
// console.log(myArr.indexOf(9));  // check if included(index or -1)

// const newArr = myArr.join()  // converted to string

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)  // extract the portion w/o modifying the original (start, end(exclusive))
console.log(myn1);  // non destructive (new shallow copy)

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)  // modifies original (start, deletecount)
console.log("C", myArr);
console.log(myn2);  // destructive altering original in place

