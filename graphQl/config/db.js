const mongoose = require('mongoose');


const connection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/g4Graphql');
        console.log("mongodb connected successfully")
    } catch (error) {
        console.log("error in connecting mongodb")
    }
}

module.exports =  connection