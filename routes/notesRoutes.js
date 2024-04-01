const express = require('express');
const User = require('../models/User')
const router = express.Router();
const getUserData = require("../middlewares/getUserData")
const notesController = require("../controllers/notesController")


router.post('/createNote', getUserData, notesController.createNote);

router.get('/fetchAllNotes', getUserData, notesController.fetchAllNotes);

module.exports = router;