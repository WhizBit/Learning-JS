const account_Id = 144552   //const keyword cannot be changed
let account_Email = "namaniiitnr@gmail.com"
var account_Password = "123"  //var has issue of block scope and functional scope, changing it changes all the locations having same variable name
account_City = 'Ghaziabad' // can even assign varibale without even assiging var or let in front of varibale name
let account_State; // Need to use let if not assigning any vale to the variable
/* Comment */
//ccount_Id = 2
account_Email = 'naman23100@gmail.com'
account_Password = '21'
account_City = 'Noida'

console.log(account_Id); 

console.table([account_Id, account_Email, account_Password, account_City, account_State])  //Not need to run console.log again and again 