// const score= 400
// console.log(score)//give number
// const balance=new Number(100)
// console.log(balance)//gives pure number
// console.log(balance.toString())//give 100 as string
// console.log(balance.toString().length)//3

// //tofix()
// console.log(balance.toFixed(2))//return 100.00
// //toprecision
// const anotherNumber=23.8966
// console.log(anotherNumber.toPrecision(3))//return 23.9


// //tolacaleString
// const hundreds=1000000
// console.log(hundreds.toLocaleString())//1,000,000 return Ameriacn standard
// console.log(hundreds.toLocaleString('en-IN'))//10,00,000 return Indian standard

// ****************Maths in JavaScript*****************************************
console.log(Math)//by default work as object
console.log(Math.abs(-4))//give positive value

console.log(Math.ceil(4.5))//give 5

console.log(Math.round(4.3))//4

console.log(Math.floor(4.2))//4

console.log(Math.min(2,4,6,8))//2

console.log(Math.max(2,4,6,8))//8

console.log(Math.random())  //give the value btw 0 to 1 range;

const min =20;
const max=30;
console.log(Math.floor(Math.random()*(max-min+1))+1)


