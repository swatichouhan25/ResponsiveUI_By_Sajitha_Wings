// let promise = new Promise(function (resolve,reject){
//      let x =20;
//      if(x>10){
//         resolve(x);//on success execute
//      }
//      else{
//         reject("Too low value") //on failure execute
//      }
// });

// promise.then(function(value){
//     console.log("Success: ",value);
// },
// function(error){
//     console.log("Error: ", error);
// }
// )

//----------------------------------

let promise2= new Promise((resolve,reject)=>{
    resolve("success!");

})

.then(value =>{
    console.log(value);
    return "We";
})
.then(value =>{
    console.log(value);
    return "can";
})
.then(value =>{
    console.log(value);
    return "Chain";
})
.then(value =>{
    console.log(value);
    return "promise";
})
.then(value => console.log(value))
.catch(value => console.log(value))

//--------------------------

// let promise3= new Promise((resolve,reject)=>{
//     reject("oops something went Wrong");

// })

// .then(value =>{
//     console.log(value);
//     return "We";
// })
// .then(value =>{
//     console.log(value);
//     return "can";
// })
// .then(value =>{
//     console.log(value);
//     return "Chain";
// })
// .then(value =>{
//     console.log(value);
//     return "promise";
// })
// .then(value => console.log(value))
// .catch(value => console.log(value))