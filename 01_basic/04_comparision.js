console.log(2>1)

console.log(2>=1)

console.log(2<1)

console.log(2==1)

console.log(2!=0)

console.log(null>0)

console.log(null==0)

console.log(null>=0)
//with the null ,the reason is that an equality check(==) and comparision(<,>,>=.<=) work differently
//comparision convert null to the number treating it as a zero(0) that's why null>=0 give true and null>= give false

console.log(undefined==0)//gives false for all comparisions with undefined

// === (triple equal treat like check value and also its data type)

console.log(2===2)

console.log(2==="2")

console.log("2"===2)
