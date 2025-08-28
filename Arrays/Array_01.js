const MyArr = [1,2,3,3,4] // They are Resizable and Mix of Datatypes 

console.log(MyArr[2])

// Shallow Copy Share the Same Referance and Deep Copy Donot share the same referance 

const MyArr2 = new Array(1,2,3,4)
console.log(MyArr2[1])
console.log(MyArr2.length)

MyArr2.push(5)
// MyArr2.pop()
// MyArr2.pop()
console.log(MyArr2)

MyArr2.unshift(3) // Adding elemenmt from front
MyArr2.shift()// Remove from front 
console.log(MyArr2)

// Different methords to know about the array 

console.log(MyArr2.includes(4))
console.log(MyArr2.indexOf(4)) // If value not in array then the output is -1 

const NewArr = MyArr2.join() // Here type of NewArr is a String Type 
console.log(typeof NewArr)

// Slice and Splice

console.log('A ', MyArr2)
const myn1 = MyArr2.slice(1,3) // Not include the ending index , No change in the origional string 
console.log(myn1)
const myn2 = MyArr2.splice(1,3) // Including last index also and it is modifying the origional array by removing the indexes mentioned
console.log(myn2)
console.log(MyArr2)

