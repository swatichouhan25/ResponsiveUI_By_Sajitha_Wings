var numberSet = new Set();
numberSet.add(1);
numberSet.add(2);
numberSet.add(1);
numberSet.add(3);
console.log(numberSet);

//console.log(numberSet.size());
console.log(numberSet.entries());

for(x in numberSet){
    console.log(x);

}
console.log("____________________");
console.log(numberSet.entries());

numberSet.delete(2);

console.log(numberSet.entries());


numberSet.add(22);
numberSet.add(13);
numberSet.add(32);
console.log("____________________");
console.log(numberSet.entries());

console.log("____________________KEYS");
console.log(numberSet.keys());

console.log("____________________VALUES");
console.log(numberSet.values());

var ele = numberSet.values();
console.log(ele.next().value);



numberSet.forEach(element =>{
    element*10 ;
    console.log(element);

})

console.log(numberSet.entries());

console.log(numberSet.has(32));
