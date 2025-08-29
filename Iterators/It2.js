// forof for Map and forin for objects

const Lang = {
    Python : 'py',
    Cpp : 'cpp',
    rb :'rb',
    swift : 'swift'
}

for (const key in Lang) {
    // if (Object.prototype.hasOwnProperty.call(Lang, key)) {
    //     const element = Lang[key];
    //     console.log(element) // Element is having Values
    // }
    console.log(`${key} is having Value ${Lang[key]}`)
}

const myArr1 = [1,2,3,4,5]
for (const value in myArr1) { // value is comprising of indexing here, as array keys are there indexes
    console.log(myArr1[value])
}

const MyMap = new Map()
MyMap.set('Naman', 'Garg')
MyMap.set('Naman1', 'Garg1')

for (const key in MyMap) {
    console.log(key)
} // Maps are not iterable 
