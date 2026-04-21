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
    profilePic:{
        type:String,
        default:"https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80"
    },

    coverPic:{
        type:String,
        default:'https://timelinecovers.pro/facebook-cover/download/royal-black-luxury-facebook-cover.jpg'
    },
    resetPasswordToken:{
        type:String,
        default:""
    }
})



// const User = mongoose.model('collectionName' ,'StructureToFOllow' )
const User = mongoose.model('users' ,userSchema )
module.exports = User
