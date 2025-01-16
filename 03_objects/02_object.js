//singleton
const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUserlogged=false

//non-singelton object
//const tinderUser={}
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"siddhi",
            lastname:"bhujbal"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);//used dot to avoid nesting

//c0mbinig object
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}//so this gives obj inside obj
console.log(obj3);

//to avoid obj inside obj
const obj4=Object.assign({},obj1,obj2)//assign is a static method
console.log(obj4);

//spread//mostly used
const obj5={...obj1,...obj2}
console.log(obj5);

//syntax used
//when u get value from database
const users=[
    {
        id:1,
        email:"sid@gmail"
    },
    {
        id:2,
        email:"kid@gmail"
    },
    {
        id:3,
        email:"gid@gmail"
    }
]
console.log( users[1].email);

//finding key and values
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


