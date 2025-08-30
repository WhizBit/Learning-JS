// const coding = ['python', 'java', 'javascript', 'c++']
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item 
// });
// console.log(values) // Here ForEach is not returning anything

const nums = [1,2,3,4,5,6,7,8,9,10]

const newnums = nums.filter( (num) => num>5) // It do returns values 

const newnums1 = nums.filter( (num) => { return num>5 }) // as we have started scope here so we have to use return keyword
console.log(newnums1)

const newNums = []
nums.forEach((item) => {
    if(item >5){
        newNums.push(item)
    }
})
console.log(newNums)

const Books = [
    {
        name : 'Book One', genre :'Fiction', publish : 1980, edition: 2000
    },
    {
        name : 'Book Two', genre : 'Non Fiction' , publish : 1990, edition : 2001
    }, 
    {
        name : 'Book Three', genre : 'Fiction' , publish : 1987 , edition : 2004
    }
]

FilteredBooks = Books.filter((item)=> item.genre === 'Fiction')
console.log(FilteredBooks)

BookAfter2000 = Books.filter((item) => item.publish >1985)
console.log(BookAfter2000)

FictionBookAfter1989 = Books.filter((item) => item.genre === 'Non Fiction' && item.publish>1989)
console.log(FictionBookAfter1989)


// map function 

const newnums2 = [1,2,3,4,5,6,7,8,9]
const Nums = newnums2.map( (nums) => nums+10)
console.log(Nums) 

// Chaining 
const Numbers = newnums2
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) => num>50)
console.log(Numbers)


// Takes Cummulative sum of numbers
initialval =0
const ReduceFun = newnums2.reduce(
    (acc, curval) => acc + curval,initialval    
)

// takes acc initially as 0 and then adding surval in acc and substituting that value in acc
const RedVal = newnums2.reduce(function (acc, curval) {
    console.log(acc)
    console.log(curval)
    return acc + curval
}, initialval)
// console.log(ReduceFun)
console.log(RedVal)


const shoppingcart = [
    {
        name : 'Banana', price: 30
    },
    {
        name : 'Apple' , price: 40
    },
    {
        name: 'cherry', price : 70
    }
]
const Total = shoppingcart.reduce((acc, item) => item.price + acc ,0)
console.log(Total)