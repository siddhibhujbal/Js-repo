const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//push
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes[3][1]);//so the array eniterly be treated as an element
//and while accessing it you specify element and the inside element you need

//concat
const all_hero=marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);

//spread
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

//flat
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

//isArray
console.log(Array.isArray("siddhi"))

//from
console.log(Array.from("siddhi"))

console.log(Array.from({name:"siddhi"}))//this gives an empty array you have to specify of whether key or value

let score1=100
let score2=200

console.log(Array.of(score1,score2));




