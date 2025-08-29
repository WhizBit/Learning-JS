const temp = 41

if(temp<50){
    console.log('Temperature Less than 50')
}
else{
    console.log('Temp more than 50')
}

score=200
if(score >100){
    var power = 'fly'
    console.log(`User Power ${power}`)
}
console.log(`User Power ${power}`) // as Var so can also be used outside the scope

const balance = 1000
if(balance >500) console.log('Yes'), console.log('Test1'); // It is termed as Implicit Scope


if (balance>500){
    console.log('We are having')
} else if(balance<750){
    console.log('Fucked')
} else{
    console.log('Fucking Rich')
}



const UserLoggedIn = true
const DebitCard = true
const LoggedInfromGoogle = false
const LoggedInfromEmail = true

if(UserLoggedIn && DebitCard){
    console.log('Allow Shopping')
}else if(UserLoggedIn){
    console.log('Allow Surfing site')
}else{
    console.log('Please Login to do Shopping')
}

if(LoggedInfromGoogle || LoggedInfromEmail){
    console.log('User Logged In')
}


