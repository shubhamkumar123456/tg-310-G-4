const express = require('express');
const { createUser, loginUser, updateUser, deleteUser, followUser } = require('../controllers/userController');
const verifyToken = require('../middleware/checkToken');
const router = express.Router();

router.post('/register',createUser);
router.post('/login',loginUser);
router.put('/update',verifyToken,updateUser);
router.delete('/delete',verifyToken, deleteUser);
router.put('/follow/:friendId',verifyToken,followUser)

module.exports = router;