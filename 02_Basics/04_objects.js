// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "ayush",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // copying to obj3 else in obj1 

const obj3 = {...obj1, ...obj2} // mostly used
// console.log(obj3);

const users = [  // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // array datatype
// console.log(Object.values(tinderUser)); // array datatype
// console.log(Object.entries(tinderUser)); // array of array

// console.log(tinderUser.hasOwnProperty('isloggedIn')); // bool value

//  +++++++++ object de-structur ++++++++++

const course = {
    courseName: "Js in hindi",
    price: 999,
    courseInstructor: 'Hitesh'

}

// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor); // Hitesh
console.log(instructor);  // Hitesh

// in json both key and value are string
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

{
    {},
    {},
    {}
}

