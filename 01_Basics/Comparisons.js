console.log(2>1);
console.log('Naman' == 'Naman')

console.log('05'>1) // here js is converting -5 into number and then after comparison giving true
console.log(null == 0) // == donot convert null to 0 for comparison 
console.log(null > 0)
console.log(null >= 0) // > and >= or<,<= do convert it to number for comparison
console.log(undefined >= 0) // Always give False
 
// == is equality check that work differently from other comparison operators
console.log('1' == 1)
// For strict check we use ===
console.log('1' === 1) // will also check for the datatype 
