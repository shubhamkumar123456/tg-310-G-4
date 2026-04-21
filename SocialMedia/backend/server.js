const express = require('express');
const app = express();
const port = 8090;
const connection = require('./config/db')  //function
const cors = require('cors')
connection()

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')



app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welcome page')
})

app.use('/uploads', express.static('uploads'))

app.use('/users' ,userRouter);
app.use('/posts' , postRouter);


// example -->http://localhost:8090/users/register


app.listen(port, ()=>{
    console.log( `server is running on http://localhost:${port}`)
})