const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"siddhi"
}

const{courseInstructor}=course
console.log(courseInstructor);

//but if u want to keep different name
const{courseInstructor:instrurtor}=course
 console.log(instrurtor);

 //related to api

 //json
 //here key and value both are string

//  {
//     "name":"siddhi",
//     "coursename":"powerbi",
//     "price":"free"
//  }