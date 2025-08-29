const userEmail = "" //'N@naman.ai' 
// Empty string is taken False whereas Empty Array is considered True

if(userEmail){ // No Comparison done but co0nsidered that the value in the string is True Value 
    console.log('Got Email')
} else{
    console.log('Not got yet')
}

// Falsy Values
/*
false
0
-0
BigInt 0n
""
null
undefined
NaN
*/ 

// Truthy Values
/*
"0"
'false'
" "
[]
{}
fuction(){} Empty Function
*/ 

const FruitNames = {}

// if(FruitNames.length){
//     console.log('Yeh I Have Fruits')
// } else{
//     console.log('Bucket is Empty')
// }

if(Object.keys(FruitNames).length){ // Object.keys(objectname) gives a array of keys
    console.log('Yeh Fruit')
} else{
    console.log('No Fruits')
}


// Nullish Coalescing Operator(??) : null undefined

let val1;
val1 = 5 ?? 10 // Used when working with FireBase where data may come in different way
val1 = null ?? 10 // Used for safety check with null values
val1 = null ?? undefined // Here taking undefined
val1 = null ?? 15 ?? 20

console.log(val1);
console.log(val1);

// Terniary Operator

//condition ? true : false

const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log('Not Take') : console.log('Have One')
