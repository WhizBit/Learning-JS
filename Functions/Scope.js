// If {} used other than object then it is termed as Scope

var c=300
let a= 300

if (true) {
    let a = 20
    const b =20
    c = 30 //Even if var is not used with c in the Scope even then the value for our variable will be overWritten
}

console.log(a) // Global Variable Outside the Scope
//console.log(b)
console.log(c) // Able to access var even outside the scope
// Overwriting of c

// Scopes are different when working with node and with Browser 

//Closure -> Varible inside can access variables that are Globally Available
// function one(){
//     const username = 'Naman'
//     function two(){
//         const website = 'Youtube'
//         console.log(username)
//     }
//     two()
//     // console.log(website)
    
// }
// one()

if(true){
    const username = 'Naman'
    if (username === 'Naman'){
        const website = 'Youtube'
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)

// console.log(addone(5))
// Giving Cannot access value before declaration 

console.log(Addone(3)) 
// It is working Correctly 
function Addone(b){
    return b+1
}

const addone = function(a){ // Holding Function in Variable
    return a + 1
}