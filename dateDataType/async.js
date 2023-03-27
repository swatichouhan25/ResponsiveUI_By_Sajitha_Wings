function saySomething(x){
    return new Promise(resolve =>{
        setTimeout(() => {
          resolve("something..." +x)  
        }, 3000);
    })
}
// var res;
// // var pres=saySomething("Hai...").then (x=>res =x);
// // console.log(pres)
// // console.log(res)


// saySomething("Hai...").then (x=>{
//  res=x;
//  console.log("inside promise", x);
// });

//==================================

async function talk(x){
    let words=await saySomething(x);
//    const words= saySomthig(x)
    console.log("words....",words)

}

talk("hai Alice");
console.log("from main method");
talk("hai bob")