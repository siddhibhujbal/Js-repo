let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//object ahe

// let myCreatedDate=new Date(2023,0,23)
let myCreatedDate=new Date("01-14-2023")
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));//it is ms to convert in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})