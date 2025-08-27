//Primitive 
// They are call by value that is when we make changes in some where the changes are made in the copy of the data not in the actual data 

// 7 Types -> String, Number, Boolean, null, undefined, Symbol, BigInt

let useremail;
// It will be conatining undefined value

// Referance Type / Non Primitive 
// Array, Objects, Functions 


const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id)
console.log(anotherid)
console.log(id == anotherid)

const Number1 = 3242527282910082n
// Putting n at the end of the number makes it the big int type data 
console.log(Number1)

let names = ['naman', 'garg'] // Array
// for objects data is in key value pairs
let Object1 = {
    name : 'Naman',
    age: 21
}
console.log(Object1)

const myFunction = function(){
    console.log('Hello India')
}
myFunction()
console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++

//Memory in Js
// Stack(Primitive), Heap (Non-Primitive)
//When we take copy from heap it gives the referance to the origional value 


// This will go in Stack
let MyYotubeName = 'NamanGarg'
let anotherName = MyYotubeName
anotherName = 'ChaiAndSutta'
console.log(anotherName)
console.log(MyYotubeName) // Here Copy is being made for MyYotubeName 

// This will go in Heap
let UserOne = {
    email : 'naman23100@gmail.com',
    upi : 'namangarg@hdfcok'
}
let UserTwo = UserOne // Here pointing to the origional value Location 
UserTwo.email = 'NamanGargIIITNR@gmail.com'
console.log(UserOne.email)


