// Singleton -> Not made when defined as literals 
// When with constructor it is made 
// Object.create is by Constructor 

// Object Literals

const MySymb = Symbol('Key 1')

const JsUser = { // By Itself taking name and age as string 
    name : 'Naman',
    'Full Name' :'Naman Garg',
    [MySymb] : 'MyKey',// If want to use symbol here, need to put it in square brackets 
    age : 21,
    location :'Naya Raipur',
    email : 'naman23100@iiitnr.edu.in',
    IsLoggedIn : false,
    LastLoginDays : ['Monday', 'Tuesday']
}

// console.log(JsUser.email) // We cannot access Full Name by any chance using this methord 
// console.log(JsUser['email'])
// console.log(typeof JsUser[MySymb])

// JsUser.email = 'namaniiitnr@gmail.com'
// console.log(JsUser.email)

// Object.freeze(JsUser) //Cannot change the values in this Object 
// console.log(JsUser)

JsUser.greeting = function(){
    console.log('Hey we are there')
} // IF oBJECT IS Freezed cannot even make a function 
console.log(JsUser.greeting()) //WITHOUT (), gives the referance of the function 
//.assert writes the value only if it is false if not then donot write anything 

JsUser.greeting2 = function(){
    console.log(`Hey,${this.name}, How are you doing?`) //using ` is called strng interpolation 
} // Use this to referance the same object
console.log(JsUser.greeting2())