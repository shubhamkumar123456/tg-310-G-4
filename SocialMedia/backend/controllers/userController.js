const userCollection = require('../models/userModel')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')
const jwt_secret = 'jackSparrow@123'

const createUser = async(req,res)=>{
    // res.send("create function is running")
    const {name, email, password} = req.body

    let existingUser = await userCollection.findOne({email:email})  //{_id, name,email,password} or null

    if(existingUser){
        return res.status(401).json({msg:"user already registered"})
    }
    else{
        let hashedPassword = await bcrypt.hash(password,salt) //12345-->%@#$%^&*(LKJHGFDFGHJK)
        let data = await userCollection.insertOne({name:name,email,password:hashedPassword})
        res.status(201).json({msg:"user registered successfully"})
    }

    
}

const loginUser = async(req,res)=>{
    // res.send("login function is running")
    const {email, password} = req.body;
    const getUser = await userCollection.findOne({email}) ////{_id, name,email,password} or null
    if(getUser){
        let comparePassword = await bcrypt.compare(password,getUser.password)//true or false
        if(comparePassword){
            let token = jwt.sign({_id:getUser._id} , jwt_secret)
            res.status(200).json({msg:"user login successfully", data:getUser, token})
        }
        else{
            res.status(401).json({msg:"wrong password"})
        }
    }
    else{
        return res.status(401).json({msg:"user not found please signup"})
    }

}

const updateUser = async(req,res)=>{
    // console.log(req.params)
    // console.log(req.params.id)
    let {id} = req.params
    let {name, password} = req.body;
    // updateOne({}  , {$set:{}})
    if(password){
        var hashedPassword = await bcrypt.hash(password, salt)
    }


    let data = await userCollection.updateOne({_id:id} , {$set:{name:name, password:hashedPassword}})

    res.status(200).json({msg:"user updated successfully"})


    
}

const deleteUser = async(req,res)=>{
    // res.send("delete function is running")
    // console.log(req.params)
   try {
    let token = req.headers.authorization;
    console.log(token)

    let decoded = jwt.verify(token, jwt_secret);
    // console.log(decoded)
    //  let {id} = req.params
    // let data = await userCollection.deleteOne({_id:decoded._id})
    let data = await userCollection.findByIdAndDelete(decoded._id)
    res.status(200).json({msg:"user deleted successfully"})
   } catch (error) {
    res.status(500).json({msg:"error in deleting user", error:error.message})
   }
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}
