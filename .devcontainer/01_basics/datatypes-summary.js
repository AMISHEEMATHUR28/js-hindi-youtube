// Primitive 

//  7 types : String, Number, Bollean, null, undefined, Symbol,BigInt

const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol()
const anotherId = Symbol('123')

console.log( id==anotherId);

//const bigNumber =34588955443212345n


// Non Primitive also known as Reference type
// Reference (Non primitive)

//Array, Objects,Functions

const heros =["shaktiman","naagraj","doga"];
let myObj={
    name: "Amsihee",
    age:22,
}

 const myfunction =function(){
    console.log("Hello world");
 }

 console.log(typeof anotherId);

 //https://262.ecma-international.org/5.1/



 //+++++++++++++++++++++++++++++++++++++++

 // Stack (Primitive), Heap (Non-Primitive)

 let myYoutubename = "amisheemathurcom"

 let anothername = myYoutubename
anothername ="anniemathur"
 
console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@goggle.com",
    upi: "user@ybl"
};

let userTwo = userOne

userTwo.email ="amishee@goggle.com"

console.log(userOne.email);
console.log(userTwo.email);