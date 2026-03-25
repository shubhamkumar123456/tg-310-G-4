const express = require('express');
const app = express();
const port = 8090;
const {graphqlHTTP}  = require('express-graphql');
const connection = require('./config/db');
connection()

const Auth = require('./middleware/Auth')

app.use('/graphql',graphqlHTTP((req)=>({
    schema,
    graphiql:true,
    context:{
        user:Auth(req) //{id}
    }
})))


app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)   
})