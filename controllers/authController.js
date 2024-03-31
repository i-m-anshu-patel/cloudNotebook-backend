const User = require('../models/User');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'AnshuIsTheKingHere001';
const jwt = require('jsonwebtoken')

exports.createNewUser = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(req.body.password, salt);
    const userData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword
    });

    const data = {
        user: {
            id: userData.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET)
    // const verifyToken = jwt.verify(authToken, JWT_SECRET);
    // console.log(verifyToken);
    res.send(authToken);
}

exports.signInUser = async (req, res, next) => {
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Incorrect email entered"})
        }
        const matchingPassword = await bcrypt.compare(password, user.password);
        if(!matchingPassword){
            return res.status(400).json({error: "Incorrect password entered"});
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.send(authToken);
    }
    catch (err){
       return res.status(401).json({error: "Incorrect credentials entered"})
    }
    
    
}