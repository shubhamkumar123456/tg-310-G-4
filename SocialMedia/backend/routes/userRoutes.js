const express = require('express');
const { createUser, loginUser, updateUser, deleteUser, followUser, getLoggedInUSer, forgetPassword, passwordToken, updatePassword } = require('../controllers/userController');
const verifyToken = require('../middleware/checkToken');
const router = express.Router();

router.post('/register',createUser);
router.post('/login',loginUser);
router.put('/update',verifyToken,updateUser);
router.delete('/delete',verifyToken, deleteUser);
router.put('/follow/:friendId',verifyToken,followUser);
router.get('/loggedInUser',verifyToken, getLoggedInUSer)
router.post('/forgetpassword',forgetPassword)
router.get('/resetToken/:token',passwordToken)
router.post('/updatePassword/:token', updatePassword)

module.exports = router;