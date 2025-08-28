const Course = {
    coursename : 'JS Learning',
    price : 0,
    CourseLearner :'Naman'
}

//DeStructuring
const {CourseLearner : Learner} = Course // const {key} = Object, can extract value using the name of the key 
//Renaming the key to access value globally

console.log(Learner)