// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush",
    "full name": "Ayush Kumar", // can't be called using .
    [mySym]: "mykey1",  // [] is used for Symbol
    age: 21,
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ayush@gemini.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

// console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // undefined if freeze
console.log(JsUser.greetingTwo());

