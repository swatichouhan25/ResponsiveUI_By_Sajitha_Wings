// var arr=[23,45,67,21,91,56];
//var arr2=new Array();
// console.log(arr2.length);
// var res1=arr.push(43);
// console.log(arr);
// //console.log(res1);
// var res=arr.pop();
// console.log(res);

// var a1=[5];
// console.log(a1);

// for(var i=0;i<=arr2.length; i++)
// {
//     console.log(arr2[i]);
// }
// var a3=new Array(2,3);
// console.log(a3);
// console.log(a3.length);
//both below declaration are same
//var a4=[2,3,4];
//var a4=new Array(2,3,4)

// var arr=[1,2,3,4,5];
// //var arr1=new Array();
// console.log(arr)
// arr.fill(5,0,2);
// console.log(arr)
// arr.fill('*',1,3);
// console.log(arr)

//append an array to the end 

// var a=[1,2,3,4];
// console.log(a)
// var b=[5,6,7,8];
// console.log(b)
// var res=a.concat(b);
// console.log(res);
// console.log(res.reverse())
// console.log(res)
// res.unshift('#',9,'A');
// console.log(res);
// res.shift();
// console.log(res)

// res.splice(2,1);
// console.log(res);
// res.splice(1,2,'Apple','Orange');
// console.log(res);

// res.slice(0,3);
// console.log(res.slice(1,4));

var fruits=['PineApple','Mango','Peach','Plum','Orange','Guava'];
console.log(fruits.indexOf('Guava'));
//console.log(fruits);
//console.log(fruits.indexOf('guava'));//case sensitive so it return -1
//console.log(fruits.find('Mango'));

// for(var i=0;i<=fruits.length;i++)
// {
//     console.log(fruits[i]);
// }

// for...in..index
// for ....of... value

//  for(ele in fruits){
//  console.log(ele);
//  }

for(ele in fruits){
    console.log(fruits[ele]);
    }
console.log("****************************")
    for(ele of fruits){
        console.log(ele);
        }

//         var ar=[1,2,{},[],'elert']
//        for(x of ar ){
//         console.log(typeof x);
//        }
    //    ar.forEach(function()

    //    fruits.forEach(function(x,i)
    //    {
    //     console.log(`${i} -> ${x}`)

    //    })
       
    







