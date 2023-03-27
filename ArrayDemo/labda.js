// function demo(x,i){
//    let fn1=(x,i)=> console.log(`${i+1}-> ${x.toUpperCase()}`)
//     function add(x,y)
//     return x+y;
// }


// var empList=[
// {name:'Alicce',designation:'Manager'},
// {name:'BOB',designation:'Spport'},
// {name:'Ala',designation:'HR'},
// {name:'nena',designation:'HR'}
// ]

// var emp=empList.find(x=>x.designation==='HR');
// console.log(emp);

// var emp=empList.filter(x=>x.designation==='HR');
// console.log(emp);

// var aa=[3,7,5,1,5,6,34,11];
// console.log(aa);
// console.log(aa.sort());

// var empSort= empList.sort((prev,curr)=> prev.name-curr.name)
// console.log(empSort)

//totest for a false condition in array

var arr=[34,-4,56,78,43,-9]
console.log(arr.every(e => e>0));

arr.every(e => {console.log(e)
     return e>0
    });

    //to test for true condition in array

    console.log(arr.some(x => x<0));