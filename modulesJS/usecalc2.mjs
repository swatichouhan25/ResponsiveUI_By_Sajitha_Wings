//way:1
 import message,  {findArea as area,add} from './calc2.mjs'// use like this also

// console.log("Using Calculator")

// console.log("message 1: " + area(4))

// console.log("message 2:" +message)

// console.log("message 3:" +add(5,6))

//way:2
import *as calc from './calc2.mjs'

console.log("Using Calculator")

console.log("message 1: " + calc.findArea(5))

console.log("message 2:" +calc.default)

console.log("message 3:" +calc.add(5,6))
