const express = require('express');
const router = express.Router();
const getUserData = require("../middlewares/getUserData")
const notesController = require("../controllers/notesController")


router.post('/createNote', getUserData, notesController.createNote);

router.get('/fetchAllNotes', getUserData, notesController.fetchAllNotes);

router.put('/editNote/:noteId', notesController.editNote);

router.delete('/deleteNote/:noteId', notesController.deleteNote);

module.exports = router;