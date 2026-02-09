import express from 'express';
const app = express();
const port = 8080;
import cors from 'cors'


// 
app.use(cors())
app.use(express.json())  // middleware  that parse the data

// Middleware  --> middleware are functions, that have the acccess of requesting to an object , responding to an object, the can also modify the request and response, they can also used between the routes, it takes a callback function with three arguments request , response and next

// 
// app.use((req, res, next)=>{
   
//     if(req.body.name.length >=3){
//         next()
//     }
//     else{
//         res.send(" i am middleware and the length of name is less than 3")
//     }
    
//     // next()
// })

app.get('/' ,(req, res)=>{
    res.send("welcome page")
})

app.get('/products' , (req, res)=>{
    let arr = [
        {name:"iphone" , price:80000, rating:4.5},
        {name:"MI" , price:20000, rating:3},
        {name:"Samsung" , price:50000, rating:5},
        {name:"Realme" , price:30000, rating:2},
    ]

    res.json({products:arr})
})



app.post('/register',(req, res)=>{
    console.log(req.body);  //object
    res.json({msg:"data recieved"})
})



app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`)
})