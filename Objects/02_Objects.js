const TinderUser = new Object()

TinderUser.id = "123abc"
TinderUser.name = 'Naman'
TinderUser.isLoggedin = false

console.log(TinderUser)

const RegularUser = {
    email : 'namangarg@gmail.com',
    fullname :{
        userfullname:{
            firstname :'Naman',
            lastname : 'Garg'
        }
    }
}

console.log(RegularUser.fullname.userfullname.firstname)

const obj1 = {1:'apple', 2:'mango', 3:'banana'}
const obj2 = {1 : 'a', 2:'b'}

// const obj3 = obj1.concat(obj2) // Not working 
const obj3 = Object.assign({},obj1, obj2) // overwrite the values corresponding to keys in object 1
console.log(obj3) // {} is a optional thing, but  giving this with assign is a good practice, {}  ACT like a target and after it they act as a source

const target = {1 :'a', 2:'b'}
const source = {3 :'c', 4: 'd'}
const Final_Obj = Object.assign(target, source)
console.log(Final_Obj === target)
console.log(target) // Here as objects work by referance then the target is also being modifies while combining the objects 

const obj5 = {...obj1, ...obj2}
console.log(obj5) // Here our origional object is not being updates by concatenating the objects 
console.log(obj1)

// Usually from databse we get array of objects
console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser)) // All this data is stored in arrays 
console.log(Object.entries(TinderUser)) // Key value pair as array in array

console.log(TinderUser.hasOwnProperty('isLoggedin')) // Tells if the key is in the object or not 

//propertyIsEnumerable -> Tells if the Object element can be accessed using a loop or not

