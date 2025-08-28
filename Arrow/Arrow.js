const user = {
    username : 'Naman',
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to my Page`) // this is used to refer to the current context 
        console.log(this)
    }
}

user.welcomeMessage()
user.username = 'Naman123' // Here we have changed the context 
user.welcomeMessage()

console.log(this) // Here it is in node env and refering to current context, that is not having any global so it is empty 


function chai(){
    let Myname = 'Naman'
    console.log(this.Myname); // Cannot use this like this in a function, it only works inside a Object 
}
chai()

const chai1 = function(){
    let UserName = 'Naman'
    console.log(this.username)
} // It will also give undefined 
chai1()

const chai2 = () => {
    let username = 'Naman'
    console.log(this.username)
} // Here also it is undefined 
chai2()

 // () => {} Arrow Function 

const addTwo = (num1, num2) => {
    console.log(num1+num2)
}
addTwo(3,4)

const addTwo1 = (num1, num2) => (num1+num2) // Implicit Return 
console.log(addTwo1(3,4)) // When using {} need to write return key word, but not with ()

const addTwo2 = (num1, num2) => console.log(num1+num2)
addTwo2(3,4)

const WriteName = () => console.log({username:'Naman Garg'}) // Even to return the object it is supposed to be in the parenthesis 
WriteName()
 