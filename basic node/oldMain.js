// const ans = require('./oldA') // 10
// console.log(ans)


const ans = require('./oldA') // {x:10 , obj:{}} 
console.log(ans)  //{ x: 10, obj: { name: 'one', age: 10, email: 'one@gmail.com' } }
console.log(ans.x)  // 10
console.log(ans.obj)  //  { name: 'one', age: 10, email: 'one@gmail.com' }
console.log(ans.obj.email) // one@gmail.com