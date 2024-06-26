const User = require('../models/User')

const createUserValidation = async (req, res, next) => {
        if(req.body.name.length <= 3){
            return res.status(400).json({ errors: "Name cannot be less than three characters"})
        }
        if(!isEmail(req.body.email)){
            return res.status(400).json({ errors: "Enter a valid email address"}) 
        }
        if(req.body.password.length < 5){
            return res.status(400).json({ errors: "Password invalid"})
        }
        const emailAlreadyExists = await User.findOne({email: req.body.email});
        if(emailAlreadyExists){
            return res.status(400).json({errors: "E-mail already exists in our system"})
        }
        next()
}

function isEmail(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) { return true; }
    return false;
}

const loginUserValidation = async (req, res, next) => {
    if(!isEmail(req.body.email)){
        return res.status(400).json({ errors: "Enter a valid email address"}) 
    }
    if(req.body.password.length < 1){
        return res.status(400).json({ errors: "Password invalid"})
    }
    next()
}

exports.createUserValidation = createUserValidation;
exports.loginUserValidation = loginUserValidation;