const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:250
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
   

})

userSchema.add({
    DOB:{
        type:Date
    },
    followers:[{type:String,ref:'users'}],
    followings:[{type:String,ref:'users'}],
})



// const User = mongoose.model('collectionName' ,'StructureToFOllow' )
const User = mongoose.model('users' ,userSchema )
module.exports = User
