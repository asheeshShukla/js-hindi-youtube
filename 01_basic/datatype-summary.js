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
console.log(myobject)


//functions
const Myfunction=function(){
    console.log(" Hello World");
}