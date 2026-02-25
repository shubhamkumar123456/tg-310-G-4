const express = require('express');
const { createPost, getAllPost, updatePost, deletePost } = require('../controllers/postController');
const verifyToken = require('../middleware/checkToken');
const router = express.Router();

router.post('/create',verifyToken, createPost);
router.get('/all', getAllPost);
router.put('/update/:id' , updatePost)
router.delete('/delete/:id' , deletePost)

module.exports = router