let MyDate =  new Date() // Using Date Object 
console.log(MyDate.toDateString());
console.log(MyDate.toString());
console.log(MyDate.toLocaleString())
console.log(MyDate.toJSON())
console.log(MyDate.toISOString())

console.log(MyDate.toTimeString())
console.log(typeof MyDate);

let MyCreatedDate = new Date(2023,1,23,5,3) // 0 for january, 1 for feb and so on , Year, Month, Date, Hour, Minute, Second
console.log(MyCreatedDate.toLocaleString())


let MyCreatedDate1 = new Date("01-13-2025") // Can use both format YYYY-MM-DD or DD-MM-YYYY
console.log(MyCreatedDate1)

let MyTimeStamp = Date.now() // Gives current date in Milisec
console.log(MyTimeStamp)
console.log(MyCreatedDate1.getTime())

console.log(Math.floor(MyTimeStamp/1000))
console.log(MyDate.getMonth())
console.log(MyDate.getDay())

console.log(MyDate.toLocaleString('default', {
    weekday : 'long',
    timeZone : 'UTC'
})) // It has Many Parameters 