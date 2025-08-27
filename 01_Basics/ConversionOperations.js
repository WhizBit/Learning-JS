let score = true
console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber); //It will give NaN , stands for Not a Number
// For string will get NaN
// NaN for undefined TYPE 
// If value in score is null then valueInNumber will hold 0
// for true will be 1 for False 0

let IsLoggedIn = ""
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn) //conatin false in case of null, empty string and undefined else true

let Num1 = 'Naman'
let StrNum = String(Num1)
console.log(typeof StrNum)
console.log(StrNum) //Converting all the enteries in the form of a string only 

let Obj1= 13
let Objtype = Object(Obj1)
console.log(typeof Objtype)
console.log(Objtype)
// When string input [String: 'Naman'], for empty string also
// When Null Value or Undefined {}
// For Number -> [Number: 13]

