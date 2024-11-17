//array

const myArr = [0,1,2,3,4,5]
const fruits = ["apple","mango","banana","grapes"]

const myArr2 = new Array(1,2,3,4) //here you only need to write the element in paranthesis not brackets if you use new Array
console.log(myArr[0]);

//array methods

myArr.push(6)
myArr.push(7)
myArr.pop() //pop out the topmost value of array treating it as an array

console.log(myArr);

myArr.unshift(9) //adds the provided value at the first position of array
console.log(myArr);


myArr.shift() //removes the first value of array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

//slice , splice

console.log("A",myArr);

// Note
//  slice will retuen the value after slicing from
//  that given initial index but don't include last indexed element and will not do any change in previous array
const myn1 = myArr.slice(1,3)
console.log("B",myn1);


//note
//splice will return both initial and end indexed value but twist is that
// splice will change the former array by removing spliced valued from it
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


//ADDDING TWO ARRAYS
const new_fruits = ["apple","banana","grapes","orange"]
const new_veg = ["potato","tomato","onion","coriander"]
new_fruits.push(new_veg) //push will insert the new_veg considering whole array(new_veg) as element in the same array(new_fruits) 
console.log(new_fruits);
console.log(new_fruits[4][2]); //you can access the element by this

// another way to join two arrays
// concat will add new array by considering each element of another array as single element
const cartoon = ["ninja hatori","doraemon","sinchan"]
const new_cartoon = ["chhota_bheem","dora","tom and jerry"]
tot_cartoon = cartoon.concat(new_cartoon)
console.log(tot_cartoon); 

//but if you want to add more than two arrays use spread method
const add_cartoon = ["singham","little krishna"]
const all_new_cartoon = [...tot_cartoon,...add_cartoon]
console.log(all_new_cartoon);

//if there is array inside another array then you can make them all as a single element by using
const another_array = [1,2,3,[6,9,6],[[1,2],[4,8]]]
const real_array = another_array.flat(Infinity) //infinity denotes the depth of making all sub array as single element
console.log(real_array);

//making of array 
console.log(Array.isArray("muskan"));
console.log(Array.from("muskan"));
console.log(Array.from({name:"muskan"})); 
//it will return empty brackets as in case of objects you need to specify whether you want to make array of keys of values 

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3));