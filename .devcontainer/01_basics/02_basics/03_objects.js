// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JSUser ={
    name: "Amishee Mathur",
    "full name": "Amishee Mathur",
    [mySym]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "amishee@goggle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(typeof JSUser[mySym]);

JSUser.email ="amishee@chatgpt.com"
// Object.freeze (JSUser)
JSUser.email ="amishee@microsoft.com"
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS user" );
}
JSUser.greetingTwo= function(){
    console.log(`Hello JS user, ${this.name}`);//String interpolation
}
console.log(JSUser.greeting()); //NO funtion exceution only function reference 
console.log(JSUser.greetingTwo());