//note 
// if we declare object by literals then it does not form in singleton


const mySym = Symbol("key1")

const JUser = {
    name : "muskan",
    "full name" : "muskan sharma",
    [mySym]: "mykey1",//way to insert symbol as a key
    age : 19,
    location:"ghaziabad",
    email:"muskansharmax124@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["monday","saturday"]
}
console.log(JUser);


//we can access any element of object by dot method but use this only if keys are not string
console.log(JUser.email);
//another way to access any key is square bracketshere you always treat key as string
console.log(JUser["email"]);
console.log(JUser["full name"]);


//accessing the symbol
// console.log(JUser.mySym); //here it will return the value by considering the mysym as key of object not as predefined symbol


//the correct way to access symbol is 
console.log(JUser[mySym]);

JUser.email = "muskan@gmail.com"
// Object.freeze(JUser) //this will lock the object
JUser.email = "muskan@chatgpt.com"
console.log(JUser);

JUser.greeting = function(){
    console.log(`Hello JS User,${this.name}`); //you have to use this.(name_of_entity)
}
console.log(JUser.greeting()); //don't forget to use () here as this is function here is confused that which object it is taking as reference


//second method
//declaring object as object.create the object as singleton
//const User = new Object()
const User = {}

User.id = "25783"
User.name = "muskan"
User.isLoggedIn = false

console.log(User);

//nesting in object
const RegularUser = {
    email: "muskansharma@gmail.com",
    fullname: {
        userfullname : {
            firstname:"muskan",
            lastname:"sharma"
        }
    }
}
console.log(RegularUser);


// accessing of element in nested object
console.log(RegularUser.fullname.userfullname.firstname);

//adding two objects
//method1
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}
console.log(obj3);

//method2
const obj6 = {1:"a",2:"b"}
const obj7 = {3:"c",4:"d"}

Object.assign(obj6,obj7) //here the SYNTAX is Object.assign(target,object_name)
console.log(obj6);
//target means the added final object will be stored in that object

//method 3
const obj8 = {1:"a",2:"b"}
const obj9 = {3:"c",4:"d"}

const obj10 = {...obj8,...obj9}
console.log(obj10);

//to access keys and values of object
console.log(Object.keys(JUser));
console.log(Object.values(JUser));
console.log(Object.entries(JUser));

//return these values in array
console.log(JUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// JSON File format
{
}
