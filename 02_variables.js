const accountId = 15678
let accountEmail = "muskan@gmail.com"
var accountPassword = "123456"
accountCity = "ghaziabad"
let accountState;

// accountId = 2 // not allowed as constant variable

accountEmail = "muskan123@gmail.com"
accountPassword = "15678"
accountCity = "Delhi"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

