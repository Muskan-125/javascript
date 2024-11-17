// on the basis of allocation in memory and its access datatype is divided into two parts
// 1. primitive - string,number,boolean,null,undefined,symbol,bigint
// 2. non primitive - array,object,functions


// primitive datatypes
const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("1234")
const anotherId = Symbol("1234")

console.log(id == anotherId);


// non primitive datatypes
const fruits = ["apple","banana","grapes"]; //array

// Object
{
    name:"muskan";
    age : 19;
}

const myFunction =  function(){
    console.log("hello world");
}

console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof fruits);
console.log(typeof myFunction);

// ********************************************************************************************************

//stack(primitive) ,heap(non primitive)

// stack(primitive datatype) it gives reference value 
let studemail = "xyz@gmail.com"
studUpdatedEmail = studemail
studUpdatedEmail = "mno@gmail.com"

console.log(studemail);
console.log(studUpdatedEmail);


// heap (non primitive datatype) it allocates direct value to variable
userOne = {
    email:"muskansharma@yahoo.com",
    id:"1234",
}

let userTwo = userOne

userTwo.email = "shrishti@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
// **************************************************************************************************************//








