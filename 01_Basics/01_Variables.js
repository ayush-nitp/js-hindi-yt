const accountId = 144523
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // Not allowed

accountEmail = "hs@hc.com";
accountPassword = "2343213"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and fuctional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
