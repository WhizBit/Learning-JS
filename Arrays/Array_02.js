const Arr1 = ['Naman', 'Naman1', 'Naman2']
const Arr2 = ['Garg', 'Garg1', 'Garg2']

const Arr3 = Arr1.concat(Arr2)
// Arr1.push(Arr2) // It will make array in array 
console.log(Arr3)

const Arr4 = [...Arr1, ...Arr2] // ... Spreads elemnets individually 
console.log(Arr4)

const another_Array = [1,2,3,[4,5,6],7,[8,9, [10,11]]]

const Open_Array = another_Array.flat(Infinity) // Write concatinatring the elements of subarray and array in single array 
// Need to give the deapth upto which arrays are needed to be sepearted , By Default it is 1
console.log(Open_Array)

const name = 'Naman'
const name1 = Array(name)
console.log(Array.isArray(another_Array)) // Tells if the element is an array or not 
console.log(Array.isArray(name1))
console.log(Array.from(name)) // Making array from the string of elements 

console.log(Array.from({'name':'Naman', 'age': 21}))  // Here unable to make the array so will give a empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Writes new array from the set of elements 