let product=[
       {name:'KeyBoard', price:1500},
      { name:'Mouse', price:1000},
    {name:'Head Phone', price:2500}
]
    // for(ele in product){
    //          console.log(product[ele]);
    //          }

             
    // for(ele of product){
    //     console.log(product(ele));
    //     }

    let search="KeyBoard"
    //var pdt=product.find(x=>if(x.name===search)?console.log(pdt): console.log("Item not found"))

    var pdt=product.find(x=>
      {
        if(x.name===search){
        
           console.log(pdt);
        }
        else{
          console.log("not found")
        }
      });

           console.log("***************************");


//            var pdt=product.filter(x=>(x.name===search))
// console.log(pdt);


  //  product.map(product=> {
  //      if (product.name===search){

  //        return (console.log(product.object))
  // }
  // else{
  //   return (console.log("false"))
  // }

//})

  