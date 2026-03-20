const postCollection = require('../models/postModel')

const createPost = async(req, res)=>{
    // res.send("create post is running")
    try {
        console.log(req.body)
        console.log(req.file)
        const {title } = req.body
    const userId = req.user;

    let data = await postCollection.insertOne({title, file:req.file?req.file.filename:'', userId})

    res.status(200).json({msg:"post created successfully"})
    } catch (error) {
       res.status(500).json({msg:"error in creating post", error:error.message}) 
    }

}
const getAllPost = async(req, res)=>{
    let allposts =await postCollection.find().sort({createdAt:-1}).populate({path:'userId', select:'-password'});
    res.json({allposts})
}
const updatePost = async(req, res)=>{
    res.send("update post is running")
}
const deletePost = async(req, res)=>{
    res.send("delete post is running")
}

module.exports = {
    createPost,
    getAllPost,
    updatePost,
    deletePost
}