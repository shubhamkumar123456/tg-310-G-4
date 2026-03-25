const jwt = require('jsonwebtoken');
const jwtSecret = 'abc@123';


const Auth = (req)=>{
    let token = req.headers.authorization;
    if(!token){
        return null
    }
    let decoded = jwt.verify(token ,jwtSecret)  // {id:}
    return decoded
}

module.exports = Auth