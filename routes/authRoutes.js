const express = require('express')
const router = express.Router();
const authValidator = require('../middlewares/authValidation')
const authController = require('../controllers/authController')

router.get('/', authValidator, (req, res) => {
    console.log("oyeee")
    res.send("Hello from admin");
});

router.post('/createUser', authValidator, authController.createNewUser)

module.exports = router;