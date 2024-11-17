//declaration of function
function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}

//calling a function
addTwoNumbers(3,null)


//making function that will return the value
function multiply(num1,num2){
    return num1*num2
}

//calling function
const result = multiply(45,2)

console.log(result);

//in functions if we pass more then number of variable than passed in declared function then we use ... which is combine 
function calculate(...num1){
    return num1
}
console.log(calculate(200,300,400));


//basically the thing is the rest all values will go in combine part of 
function CalculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(CalculateCartPrice(200,300,400,500,600));


//passing object in function
const user = {
    username : "muskan",
    price : 199
}

function hadleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

hadleObject(user)
//or you can pass whole object inside hadleObject function