const name = "muskan"
const repoCount = 5

//console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); //notice here we have used blackslash 


const gameName= new String('muskansh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(2,4) //substring index usually starts from zero
console.log(newString);

const anotherString1 = gameName.substring(-8,4) //substring generally don't takes negative index
console.log(anotherString1);

const anotherString = gameName.slice(-8,4) //slice considers negative index 
console.log(anotherString);

const newStringOne = "  muskan_sharma "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://muskan.com/muskan%20sharma"

console.log(url.replace('%20','-'))

console.log(url.includes('sharma'));










