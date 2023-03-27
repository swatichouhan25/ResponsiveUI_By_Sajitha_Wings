// const today = new Date();
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());

// const doj = new Date(2021,1,12);
// console.log(doj);
// console.log(doj.toDateString());
// console.log(doj.toString());
// console.log(doj.toTimeString());
// console.log(doj.getTime());

const today= new Date();
const currentDay = today.getDate();
today.setDate(currentDay +21);
console.log("Three weeks from today" , today);


var dob = new Date("01/25/1993");
var years = today.getFullYear()-dob.getFullYear();

console.log("Age is:", years);


