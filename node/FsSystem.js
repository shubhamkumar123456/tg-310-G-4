// import fs from 'fs'


// CRUD --> create , read, update , delete

//1) Create a file using fs module --> 
// fs.writeFileSync('trial.pdf' , 'hello this is dumy text')
// fs.writeFileSync('trial.html' , `<html>
//         <head></head>
//         <body>
//             <h1>THis is heading tag</h1>
//         </body>
//     </html>`)


// 2) read a file using fs module -->
// let ans = fs.readFileSync('trial.pdf','utf-8')
// console.log(ans)

// 3) add text to any existing file  -->  appned method
// fs.appendFileSync('trial.pdf', ' this is additional text')


// 4) rename a file --> 
// fs.renameSync('trial.pdf' , 'trialOne.pdf')

// 5) delete a file -->  unlink method
// fs.unlinkSync('trial.html')

// 6) create a folder( dir) -->
// fs.mkdirSync('newFolder')