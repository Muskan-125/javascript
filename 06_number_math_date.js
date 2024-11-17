const score = 400
console.log(score);

const balance =new Number(100) //new here will treat and return the value of variable as object
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // will show the value of number upto one decimal value

const OtherNumber = 123.67789

console.log(OtherNumber.toPrecision(2)); // will precise the number upto x digits starting from left
console.log(OtherNumber.toFixed(2)); //will precise/fix the value after decimal point

const hundreds = 1000000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-In'));

// *************************Maths**************************************************************

console.log(Math);
console.log(Math.abs(-4)); //will give absolute value of provided number
console.log(Math.round(467.98723637282)); //will round off the number with no decimal in it
console.log(Math.ceil(4567.987)); //will always round off the value upto highest the decimal denotes
console.log(Math.floor(435.987)); // will always rounds off the value upto lowest value of decimal
console.log(Math.min(4,3,6,8)); //will return the smallest element among the entered elements

console.log(Math.random()); //it will always generate random values between 0 to 1 and can in decimal format
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

// ****************************************DATE**********************************************************************************************

//temporal is basically a website from where you can the api of date and time

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //notice here that date is a object/

let myTimeStamp = Date.now()

console.log(myTimeStamp); //the value comes in seconds of time






























