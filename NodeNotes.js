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


// Destructuring -->