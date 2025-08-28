function MyName(){
    console.log('N')
    console.log('A')
    console.log('M')
    console.log('A')
    console.log('N')
}

// MyName //Referance
// MyName() //Execution 

function Sumof2(a, b){ // a and b are parameters but when we replace them with value for parameters they are called as Arguments 
    console.log(a+b)
}

function Sumof2Num(a,b){
    return (a+b) 
    //Anything after return is unreachable
    //console.log('Naman')
}

let Sum1 = Sumof2Num(2,3)// If Not passing Prameter will return NaN
console.log(Sum1) // It is containing undefined
Sumof2('2', 3)

// function LoginUserMessage(username){
//     if(username === undefined){
//         console.log('Please Enter the name')
//         return //just using return to get out of the function
//     }
//     let time = new Date()
//     let RealTime = time.toDateString()// Cannot access these function without taking Date as a Object
//     return `Hey, ${username}, you logged in on ${RealTime}`
// }

function LoginUserMessage(username = "Sam"){ // Putting Default Value
    if(!username){ //if not given then it will have undefined and !undefined is true so will enter in if condn
        console.log('Please Enter the name')
        return //just using return to get out of the function
    }
    let time = new Date()
    let RealTime = time.toDateString()// Cannot access these function without taking Date as a Object
    return `Hey, ${username}, you logged in on ${RealTime}`
}

let NUllStatus = LoginUserMessage()
let LoginStatus=LoginUserMessage('Naman')
console.log(LoginStatus)
console.log(NUllStatus) // It will take empty parameter as Undefined

const Sum3 = function (a,b){ // Naming Function in Different Manner
    return a+b  // It is also termed as Expression
}
const Suming = Sum3(1,2)
console.log(Suming)

function CalculateCartPrice(val1, val2,...num1){ //Here... are called as Rest Operator, but when used with concatenation are termed as Spread Operator 
    return num1 // Rest operators bunder the data given as the parameters 
}
console.log(CalculateCartPrice(200,300,400)) //val1 carry 200, val2 carry 300 and num1 carry 400

const user = {
    username : 'Naman',
    price : 200
}

function HandleObject(anyObject){
    console.log(`User Name is ${anyObject.username} and Price is ${anyObject.price}`)
}

HandleObject(user) // If Not pass the object it will give us error
HandleObject({
    username : 'Naman1',
    price : 200
})

const Array1 = [20,30,40,50]

function ArrayReturner(ArrayName){
    return `Second element of the Array is ${ArrayName[1]}`
}
console.log(ArrayReturner(Array1))