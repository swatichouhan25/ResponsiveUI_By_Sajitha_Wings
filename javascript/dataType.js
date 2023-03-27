var x=10;

function sample (){
    console.log("x : ",x);
    var y=20;
    console.log("y : ",y);
    x=23;
}
sample();
console.log(" Scope of global x : ", x)

var age=4;
if(age>=18){
    console.log("you are eligible");
}
else{
    console.log("you are not eligible");
}