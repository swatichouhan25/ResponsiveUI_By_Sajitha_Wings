var zipcodes = new Map();
zipcodes.set(5001,'Delhi');
zipcodes.set(5002,'Mumbai');
zipcodes.set(5001,'Delhi');
zipcodes.set(5003,'pune');
zipcodes.set(5004,'indore');
zipcodes.set(5005,'chennai');

zipcodes.set(5006,'banglore');


console.log(zipcodes);

 console.log(zipcodes.get(5003));

console.log(zipcodes.entries());
 console.log("value:",zipcodes.values());
 console.log("keys:",zipcodes.keys());
console.log("values:",zipcodes.values());

zipcodes.forEach((k,v)=> {
    console.log(`${k} : ${v}`)
})