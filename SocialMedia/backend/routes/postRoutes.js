const express = require('express');
const { createPost, getAllPost, updatePost, deletePost, likePost } = require('../controllers/postController');
const verifyToken = require('../middleware/checkToken');
const upload = require('../middleware/uploader');
const router = express.Router();

router.post('/create',verifyToken,upload.single('image'), createPost);
router.get('/all', getAllPost);
router.put('/update/:id' , updatePost)
router.delete('/delete/:id' , deletePost)
router.put('/like/:postId',verifyToken , likePost)

module.exports = router