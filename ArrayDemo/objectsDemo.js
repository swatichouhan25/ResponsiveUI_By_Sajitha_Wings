//creating an object
//1. using object literals
 
var obj={};
 obj.class='Class1';
 obj.rank=2;
 console.log(obj.class);
 console.log(obj.rank)

 var student={
    name:'Alice',marks:78,
    name:'heera',marks:98
 }
 console.log(student)
 student.mark=56;
 console.log(student);

//2. using object constructor

 var obj=new Object();
 var student =new Object(
    {
        name:'Alice',
        marks:78
    }
 )
console.log(student)

 //3. function Constructor

 function Person(name,desig){
    this.name=name;
    this.desig=desig;

 }
 var bob= new Person('Bob','Manager');
 console.log(bob);

 //4.Using the object.create() method

 var student={
        name:'Alice',marks:78,
        name:'heera',marks:98
     }
 

var stu2= Object.create(student);
 var point1=Object.create({X:10,Y:20})
 console.log(point1)
 console.log(stu2)

 //5. create a class and instanstiate an object by calling the constructor
  
//  console.log(Object.getOwnPropertyDescriptors(b,'name'));

//  Object.defineProperty(this,{qualification:'BTECH'},{company:'ITECH',configurable:false});
 
//  //var p=new Person('')
//  console.log(Object.getOwnPropertyNames(b));
//  Object.getOwnPropertyNames(b).forEach(x2 => console.log(x2));
 
//  var point1={X:10,Y:20,Z:30};
//  console.log(Object.keys(point1));
 
//  console.log(Object.values(point1));

// var res = bob.hasOwnProperty('name')
// var sales1={a:78,b:67,c:60}
// var sales2={a:78,b:60}
// var res=Object.assign(sales1,sales2);
// console.log(res)


//spread operator
//prevent an object from modify
//1. freeze
// var robot1 = {
//     type :'Autoboot',
//     vehicle: 'Truck'
// }

// var robot2 = {
//     type :'Autoboot',
//     vehicle: 'Truck'
// }

// var robot3 = {
//     type :'Autoboot',
//     vehicle: 'Truck'
// }
// Object.freeze(robot1);
// console.log(robot1);
// robot1.vehicle='Drone'//not modify bca we make it freeze

// //2.seal

// Object.seal(robot2)
// robot2.type='manual';
// console.log(robot2);

// //3. preventExtension

// Object.preventExtensions(robot3);
// robot3.weight=675;
// console.log(robot3);//prevent from extension not allow us to add other properties

// console.log(Object.isFrozen(robot2));

//

//object distructoring
// var empList =[ 
// {name:'Alice' , designation:'Manager' ,age : 45},
//  {name:'Bob' , designation:'It Support',age : 25},
//  {name:'Charles' , designation:'HR', age : 33},
//   {name:'Rita' , designation:'HR', age:29},
// {name:'Bina' , designation:'Developer', age : 30},] ;

//classes and objects

// class Dog{
//  constructor(name,weight,color,breed){
//     this.name=name;
//     this.weight=weight;
//     this.color=color;
//     this.breed=breed;
//  }

//  display(){
//     console.log(`Name: ${this.name}, weight: ${this.weight}, color: ${this.color}, breed: ${this.breed}`)
// }
// }

// let dog1= new Dog('jhony',2.3,'brown','Labrador');
// console.log(dog1);

// let dog2= new Dog('jhony','brown','Labrador');
// console.log(dog2);
// console.log(dog2.hasOwnProperty('owner'));
// dog2.display();

// class Person1{
//     #firstName;
//     #lastName;
//     constructor(fname,lname)
//     {
//         this.#firstName=fname;
//         this.#lastName=lname;
//     }

//     get fullName(){
//         return this.#firstName + "."+ this.#lastName
//     }
//     set firstName(fname){
//         this.#firstName=fname;
//     }
// }

// var p = new Person1("Joe","Biden")
// console.log( "Full Name: "+p.fullName);

// p.firstName="Jhon";

// console.log( "Full Name: "+p.fullName);


//inheritance

// class Vehicle{
//     constructor (color,currentSpeed, maxSpeed){
//     this.color=color;
//     this.currentSpeed=currentSpeed;
//     this.maxSpeed=maxSpeed
// }
// move(){
//     console.log("Moving at a speed of "+ this.currentSpeed +"Km/hr")
// }
// accelerate(amount){
//     this.currentSpeed+= amount
// }
// }
// class MotorCycle extends Vehicle{
//     constructor (color,currentSpeed, maxSpeed,fuel){
//         super(color,currentSpeed, maxSpeed);
//         this.fuel=fuel;
//     }

//     doWheelie(){
//         console.log("Driving on one Wheel")

//     }
// }

// let motor = new  MotorCycle('Black',0,250,'Petrol');
// console.log(motor.color)
// console.log(motor)








