// Immediately Invoked Function Expressions (IIFE)

// used to protect function from getting polluted by global scope/variable
// named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();

// need of semicolon to end the iife
// syntax {()"definition" () "execution"}

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Ayush')