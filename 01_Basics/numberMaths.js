const number = 400

const Balance = new Number(number)
console.log(Balance)

console.log(Balance.toString().length)
console.log(Balance.toFixed(2)) // Gives precison for the numbers
console.log(typeof Balance)
console.log(Balance)


const OtherNumber = 23.8966
console.log(OtherNumber.toFixed(2))
console.log(OtherNumber.toPrecision(3))

const Hundereds = 1000000
console.log(Hundereds.toLocaleString('en-IN')) // In Indian Number System 

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math) // It is Object type with many properties

// console.log(Math.abs(-4))

// console.log(Math.round(-4.2))
// console.log(Math.ceil(-4.2))
// console.log(Math.floor(4.2))

// console.log(Math.min(4,3,2,1))
// console.log(Math.max(4,3,2,1))
// Always in between 0 and 1
 
console.log((Math.random()*10)+1)  // Value will always be bigger than 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min) // Giving integer more than 10 , addition of 1 to ignore 0 value 


