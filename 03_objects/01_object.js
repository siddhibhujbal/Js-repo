//object literals
const mysymbol=Symbol("key1")
const JsUser={
    name:"Siddhi",
    fullname:"Siddhi Bhujbal",
    age:19,
    [mysymbol]:"mykey1",//this how u declare symbol which u defined previously
    location:"pune",
    email:"siddhi@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);//not a very appropriate way
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(JsUser[mysymbol])

//overriting value
JsUser.email="sb@gmail.com"
Object.freeze(JsUser)
JsUser.email="sb@gpt.com"
console.log(JsUser);

//functions in js are treated like variable only
JsUser.greeting=function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting);

