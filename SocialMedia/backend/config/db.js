const mongoose = require('mongoose');

async function connection(){
   try {
    await mongoose.connect('mongodb://localhost:27017/projectG4')
   console.log("mongodb connected")
   } catch (error) {
console.log("error in connecting mongodb")
   }
}

module.exports = connection