const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connection(){
   try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@socialmediag4.gxyjfou.mongodb.net/?appName=SocialmediaG4`)
   console.log("mongodb connected")
   } catch (error) {
console.log("error in connecting mongodb")
   }
}

module.exports = connection