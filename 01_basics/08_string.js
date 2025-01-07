const name="siddhi"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(1));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)//negtive index starts from behind
console.log(anotherString);

//trim
const newString1="  siddhi  "
console.log(newString1);
console.log(newString1.trim());

const url="https://sid.com/sid%20bhujbal"
console.log(url.replace('%20','-'));


const msg="hwllo-world-how-are-u"
console.log(msg.split('-'));
