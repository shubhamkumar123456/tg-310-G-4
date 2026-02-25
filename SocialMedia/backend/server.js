const express = require('express');
const app = express();
const port = 8090;
const connection = require('./config/db')  //function
connection()

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welcome page')
})


app.use('/users' ,userRouter);
app.use('/posts' , postRouter);


// example -->http://localhost:8090/users/register


app.listen(port, ()=>{
    console.log( `server is running on http://localhost:${port}`)
})