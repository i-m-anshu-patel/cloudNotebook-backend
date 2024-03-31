const express = require('express');
const User = require('../models/User')
const router = express.Router();


router.post('/create', (req, res) => {
    const user = User(req.body);
    user.save();
    res.send(req.body);
})

module.exports = router;