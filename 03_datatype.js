"use strict"; //treat all js code as newer version

//alert(3 + 3)// we are using nodejs not browser

console.log(3+3)
console.log("muskan sharma")

let name = "muskan"
let age = 19
let islogged = false

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//symbol => unique

console.log(age);
console.log(null); //this is object
console.log(undefined); //this is undefined datatype

// dataype conversion

let score ="muskan"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //N of number should be capital here otherwise will give an error
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN(not a number)
//true => 1; false => 0 

let isLoggedIn="muskan"
let isLoggedIn1 = 1
let emptylogged = ""

let boollogged = Boolean(isLoggedIn)
let boollogged1 = Boolean(isLoggedIn1)
let boollogged2 = Boolean(emptylogged)

console.log(typeof boollogged);

console.log(boollogged);
console.log(boollogged1);
console.log(boollogged2);

//null is converted to 0 while converting in number//


//********************operators************************************************ */
let value = 56
let negvalue = -value
console.log(negvalue);

console.log(2*2);
console.log(2/2);
console.log(2+2);

let str1 = "hello"
let str2 = "muskan"

let str3 = str1+str2
console.log(str3);

console.log(1+"2");
console.log("1"+2);
console.log("1"+"2");
console.log("1"+2+2+4); //it will print whole as a string
console.log(2+3+"1"); //it will add numbers first then print it as a string


//priority is readability
console.log((5+6)*9%3);

console.log(+true); //convert bool to number

console.log("2">1); //js allows comparison of two different datatypes
console.log("muskan">7);
console.log("5">1);























