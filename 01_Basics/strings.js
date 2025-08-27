const name = 'Naman'
const repoCount = 50

// console.log(name + repoCount+ 'Naming') 
// This methord is outdated

//Instead use ``
// It causes String Interpolation

console.log(`Hello My Name is ${name}  and my repo count is ${repoCount}`);

const gameName = new String('Naman') // When use new, we use objects in JS
// It will contain key value pairs as N-> 0, a ->1, m-> 2, etc
console.log(typeof gameName)
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());// No Updation in the Origional Value
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n')); // Will gives the first comming of the character

const newStr = gameName.substring(0,4) // SUbstring donot work with negative values the way slice do
// If Negative values given for indexing it gives nothing as output 
console.log(newStr)

const anotherstr = gameName.slice(0,-1)
console.log(anotherstr)

const newStringOne = '  Naman.   '
console.log(newStringOne)
console.log(newStringOne.trim()); // trimStart -> remove from front
// trim.End() -> remove from end 

const url = "https://naman.com/naman%20garg"
console.log(url.replace('%20', '-'))

let newVar = 'Naman-Garg'
console.log(url.includes('naman'));
console.log(newVar.split('-',1))// Spliting values by - 
// 1 is the limit of splitting after 1 split no words will be included in the array




