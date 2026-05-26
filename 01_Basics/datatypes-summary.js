//  Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);  // diffrent

const bigNumber = 23454456778545675n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ayush",
    age : 22,

}

const myFunction = function(){
    console.log("Hello World");
    
}

// console.log(typeof bigNumber); // bigint
// console.log(typeof outsideTemp); // object
// console.log(typeof userEmail); // undefined
// console.log(typeof myFunction);  //function(object function)
// console.log(typeof myObj);  // object
// console.log(typeof heros);  // object
// console.log(typeof anotherId);  // symbol


// +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myYoutubename = "AyushKumardotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let user1 = {
    email : "user@google.com",
    upi : "user@ibl",
}

let user2 = user1

user2.email = "ayush@google.com"

console.log(user1.email);
console.log(user2.email);
