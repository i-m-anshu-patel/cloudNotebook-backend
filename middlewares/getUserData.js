const jwt = require('jsonwebtoken');
const JWT_SECRET = 'AnshuIsTheKingHere001';


const getUserData = (req, res, next) => {
    try{
        const token = req.header('auth-token');
        if(!token){
            res.status(401).send("Auth Token Required")
        }
        const verifyToken = jwt.verify(token, JWT_SECRET);
        req.user  = verifyToken.user;
        next();
    }
    catch (err){
        console.log("Authentication error")
        res.status(401).send("Authentication failed")
    }
    
}

module.exports = getUserData