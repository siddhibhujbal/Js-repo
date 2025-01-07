//memory
//1.stack memory(used for primitive type)(it gives copy of variable)
//2.heap memory(used for non-primitve)(it gives reference of original val)

let name="siddhi"
console.log(name);
let anotherName=name
anotherName="riddhi"
console.log(anotherName);
console.log(name);


//non primitive
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="use@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

