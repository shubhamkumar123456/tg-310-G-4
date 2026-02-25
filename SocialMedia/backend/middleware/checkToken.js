
const jwt = require('jsonwebtoken')
const jwt_secret = 'jackSparrow@123'

const verifyToken = async(req,res, next)=>{
    try {
         let token = req.headers.authorization;
        let decoded = jwt.verify(token, jwt_secret) //{_id:4567}
        req.user = decoded._id
        next()
    } catch (error) {
        return res.status(401).json({msg:"unauthorized"})
    }

}

module.exports = verifyToken