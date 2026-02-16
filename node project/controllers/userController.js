const userCollection = require('../models/userModel')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const createUser = async(req,res)=>{
    // res.send("create function is running")
    const {name, email, password} = req.body

    let existingUser = await userCollection.findOne({email:email})  //{_id, name,email,password} or null

    if(existingUser){
        return res.json({msg:"user already registered"})
    }
    else{
        let hashedPassword = await bcrypt.hash(password,salt) //12345-->%@#$%^&*(LKJHGFDFGHJK)
        let data = await userCollection.insertOne({name:name,email,password:hashedPassword})
        res.json({msg:"user registered successfully"})
    }

    
}

const loginUser = async(req,res)=>{
    // res.send("login function is running")
    const {email, password} = req.body;
    const getUser = await userCollection.findOne({email}) ////{_id, name,email,password} or null
    if(getUser){
        let comparePassword = await bcrypt.compare(password,getUser.password)//true or false
        if(comparePassword){
            res.json({msg:"user login successfully", data:getUser})
        }
        else{
            res.json({msg:"wrong password"})
        }
    }
    else{
        return res.json({msg:"user not found please signup"})
    }

}

const updateUser = async(req,res)=>{
    res.send("update function is running")
}

const deleteUser = async(req,res)=>{
    res.send("delete function is running")
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}
