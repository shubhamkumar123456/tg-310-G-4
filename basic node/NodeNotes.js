// Js --> is a scripting language used to write logics and functinality
// used to create dynamic web pages
// before node js javascript was used to create client side only(frontend only)

// javascript code runs on browser because browsers have javascript engine 

// in chrome the name of JS engine --> V8 engine


// Node Js --> Node js is a run time environment for js ( runs javascript code out side the browser)
//  it uses the same V8 to run js code


// Javascript is synchronous or asynchronous  --> 

// example -1 -->synchronous

// console.log("one");
// console.log("two")
// console.log("three")


// example -2 -->ASync

// console.log("one")

// setTimeout(()=>{
//     console.log("two")
// },6000)

// setTimeout(()=>{
//     console.log("three")
// },2000)

// console.log("four")


// event loop --> it pulls the stuff from call back queue and pusheh into the call stack , whenever the call stack is empty

//Node Js is Single Threaded Language because it have only one call stack , in place of web Api's node js uses a library LibUv (which is written in C language  and C is multithread ) 


// Callback function -->  functions that are passed into another function as an argument are known as Call back function 

// HOF(higher order function) --> functions that take another function as an argument are known as higher order function

// function xyz(){
//     console.log("hello")
// }

// console.log(xyz)  //
// xyz()


// function B(a, b, c, d , e){
//     console.log(a)
//     console.log(ab)
//     e()
// }

// B(10 , "hello" , [11, 2, ,3 ] , {name:"one",age:2} , xyz)


// example -->

// setTimeout(cb function , time in ms)
// setInterval(cb function , time in ms)

// function A(){
//     console.log("hello i am a")
// }

// setInterval(A, 2000);



// How to import and export file in node Js --> 
// old method --> module.exports (for exporting ) , require() for importing
// new method (ES6) --> import and export keyword


// Command to create package.json --> npm init -y
// to use ES6 syntax in node js create a package.json  file and change the value to type to module (if the value is commonJs) Es6 syntax will not run

// https://github.com/shubhamkumar123456/tg-310-G-4.git

// Destructuring -->

// let obj = {
//     name: "one",
//     age:45,
//     course:"fullstack"
// }

// destructure from object
// let {name, age, course} = obj
// console.log(name)
// console.log(age)
// console.log(course)

// let a = obj.name
// let b = obj.age
// let c = obj.course
// console.log(a)
// console.log(b)
// console.log(c)



// example 2 destructure from array

// let arr = [10, 20 ,30 ,50];
// let [a,...b] = arr  // ...b is rest operator
// console.log(a)
// console.log(b)


// let x = 10
// let b = x
// console.log(b)  

// let a = [10, 20, 30]
// let b = a;
// let c = [...a]

// console.log(b)
// console.log(c)




// try push and pop 
// let a = [10, 20, 30]

// let b = [...a]

// b.pop()
// b.pop()
// console.log(b)
// console.log(a)

// let b = a

// b.pop()
// b.pop()

// console.log(b)  //[10]
// console.log(a)  //[10]


// Spread Operator --> used to the element of array or object into new Array or object using (...)


// Type of Module -->
// a) core module --> these are inbuilt module present in node js we can directly import from node and use it
// Examples --> fs module , http , __dirname ,__filename

// b) local module --> created by user to expand our app

// c) Third party module--> module that need to install from outside of node
// example --> nodemon , express



