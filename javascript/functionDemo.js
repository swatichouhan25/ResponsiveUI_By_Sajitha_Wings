function add(x,y){
    return x+y;
}
function add(x,y,z){
    console.log("from function 2 " );
    console.log("z: " +z );
    return x+y;
}
function add(name,...prices){
    console.log("price list for " +name)
    var sum=0;
    for(var i =0;i<prices.length;i++){
        sum=sum+prices[i]
    }
    return sum;
}


function display(name){
    console.log(`Welcome ${name}`)
}
display("Alice")
var res=add(2,3,4)
console.log("Add result= "+res );