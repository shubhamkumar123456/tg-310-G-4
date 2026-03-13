const jwt = require('jsonwebtoken');

const varifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(token)
    if(!token){
        res.status(401).json({message: 'No token provided'});
    }
    else{
        jwt.verify(token, 'SECRETKEY', (err, decoded) => {
            if(err){
                res.status(401).json({message: 'Invalid token'});
            }
            else{
                req.user = decoded;
                next();
            }
        });
    }
}

const isAdmin = (req, res, next) => {
    if(req.user.role === 'admin'){
        next();
    }
    else{
        res.status(401).json({message: 'Unauthorized, Admin only'});
    }
}

module.exports = {
    varifyToken,
    isAdmin
}