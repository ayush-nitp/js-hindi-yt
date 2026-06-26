// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30

    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "ayush"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "ayush"
    if (username === "ayush") {
        const website = " youtube"
        // console.log(username + website);
        
    }
}

// +++++++++++++++ interesting +++++++++++++++

function addone(num){ // can be called from anywhere
    return num + 1
}

addone(5)

const addTwo = function(num){  // can't be called before this expession
    return num + 2
}

addTwo(5)
