const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    bio:{
        type:String
    },
    profilePic:{
        type:String
    },
})

module.exports = mongoose.model('users' , userSchema)