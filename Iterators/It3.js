const  coding = ['js','ruby', 'python']
coding.forEach( function (item){// As it is a callback it will not have any name , as will iterate over the array so just name the parameter 
    console.log(item)
})

coding.forEach((item) => {
    console.log(item)
})

function Printme(item){
    console.log(item)
}

coding.forEach((item) => Printme(item))
//or
coding.forEach(Printme)

coding.forEach((item, index, arr) => { // Parameters comming in arrow function
    console.log(item)
    console.log(index)
    console.log(arr)
})


const myCoding = [
    {
        languageName : 'javascript',
        langaugeFileName :"js"
    },
        {
        languageName : 'java',
        langaugeFileName :"java"
    },
        {
        languageName : 'C++',
        langaugeFileName :"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langaugeFileName)
    console.log(item.languageName)
})
