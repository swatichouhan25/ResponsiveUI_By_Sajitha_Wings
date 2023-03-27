function main()
{
console.log("From main begning");
add(2,3);
console.log("From main");
console.log("Fetching api");
sub(5,3);
console.log("From main end");

}

function print(data){
    console.log("printing data ", data);
}

function add(x,y){
    console.log("Adding two elements:")
   var res = x+y;
   print(res);
   console.log("printed from add")
}

function sub(x,y){
    console.log("subtract two elements:")
   var res = x-y;
   print(res);
   console.log("printed from sub")
}
main();