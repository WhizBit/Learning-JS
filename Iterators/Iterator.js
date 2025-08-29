 for(let i = 0;i<10;i++){
    const element = i
    console.log(element) // ctrl + d helps in selecting all the variables with same name and change there name simultaneously 
 }

for(let i = 0;i<10;i++){
    const element = i
    if(i==5){
        console.log('5 Detected')
        continue // here 5 will not get printed, But still in Loop
    }
    console.log(element) 
}

let Array1 = ['Naman', 'Naman1', 'Naman2']
let i = 0
while(i<Array1.length){
    console.log(Array1[i])
    i++;
}

let j = 0
do{
    console.log(Array1[j])
    j++
} while(j<Array1.length)


score= 11
do{
    console.log(`Score is ${score}`)
} while(score<=10)


const arr = {1:1,2:2,3:3,4:4,5:5}
for (const nums of Object.entries(arr)) {
    console.log(nums) // Automatically handle the increment and length factors 
}

const Name = 'Naman'
for (const i of Name){
    console.log(i)
}

//Maps

const map = new Map() // It is a type of a Object Only
map.set('In', 'India')
map.set('US', 'United States')
map.set('In', 'Ind') // Over Writing of Previous Key Value pair's value
// Map are known for Unique Values

console.log(map)

for (const key of map) {
    console.log(key) // Will give key value pairs 
}

for (const [key, Values] of map) { // Destructuring 
    console.log(key)
}

const MyObj = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
}

for (const [key, value] of MyObj) { // Error MyObject is not iteratable 
    console.log(key)
}