// const add =(x,y)=>x+y;
// const pi=3.14;
// let findArea=(r)=>2*pi*r*r;

// let message ="welcome";

// console.log(findArea(4))

// // module.exports= {msg:message, area: findArea,add:add}
// module.exports= {message, findArea,add}


//also write like:
const add =(x,y)=>x+y;
const pi=3.14;
let findArea=(r)=>2*pi*r*r;

exports.message ="welcome";

console.log(findArea(4))

// module.exports= {msg:message, area: findArea,add:add}
module.exports= { findArea,add}