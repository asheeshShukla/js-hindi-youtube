// data types
// 2 types of datatypes in javascript
// a-> primitive datatypes(call by value) 
//    string
//    Number
//    Boolean
//    BigInt
//    String
//    Symbol
//    undefined
const score=100//return number
const scoreValue=100.3// return number
const isloggedIn=false
const outsideTemp=null// return as a object
let userEmail;//return undefined
//console.log(typeof outsideTemp)

// how to use symbol it gives unique value
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)//return false
// b- Non-primitive datatypes(refrence type)
// Array
// function
// object
// array
const heros=["shaktiman","naagraj","doga"];
//object
myobject={
    name:"hitesh",
    age: 22,
}
//**************** stack and heap memory in java script***************
//stack=> all primitive datatypes comes under stack

//eg
let myYoutube="asheeshshukla"
let anotherName="myYoutube"
anotherName="chai aur code"
console.log(myYoutube)
console.log(anotherName)
//heap=>all primitive Non-datatypes comes under stack
let user1={
    Email: "asheeshshukla2k17@gmail.com",
    UPI:"user@ybl"
}
let user2=user1
user2.Email="asheeshshukla2k17@gmail.com"//return as a refrence not copy 
console.log(user1.Email)
console.log(user2.Email)
console.log(myobject)


//functions
const Myfunction=function(){
    console.log(" Hello World");
}
