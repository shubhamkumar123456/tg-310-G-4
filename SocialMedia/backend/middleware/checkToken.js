
const jwt = require('jsonwebtoken')
const jwt_secret = 'jackSparrow@123'

const verifyToken = async(req,res, next)=>{
    try {
         let token = req.headers.authorization;
         console.log(token)
        let decoded = jwt.verify(token, jwt_secret) //{_id:4567}
        console.log(decoded)
        req.user = decoded._id
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({msg:"unauthorized"})
    }

}

module.exports = verifyToken