const User = require('../models/User')

exports.createNewUser = async (req, res, next) => {
    const user = User(req.body);
    const userData = await user.save();
    res.send(userData);
}