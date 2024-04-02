const Note = require("../models/Note")

exports.createNote = async (req, res) => {
    const note = await Note.create({
        user: req.user.id,
        title: req.body.title,
        description: req.body.description,
        tag: req.body?.tag
    })

    res.status(201).json({ message : "Note Created Successfully"})
}

exports.fetchAllNotes = async (req, res) => {
    try{
        const notes = await Note.find({ user : req.user.id});
        if(notes.length === 0){
            return res.status(200).json({ message : "No notes available"})
        }
        return res.status(200).json({notes});
    }
    catch (err){
        return  res.status(500).json({error: err})
    }
}

exports.editNote = async (req, res) => {
    try{
        const noteId = req.params.noteId;
        const updateParams = {
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag
        }
        const notes = await Note.updateOne({id: noteId}, updateParams);
        return  res.status(500).json({message: "Note updated"})
    }
    catch (err){
        return  res.status(500).json({error: err})
    }
}

exports.deleteNote = async (req, res) => {
    try{
        const noteId = req.params.noteId;
        User.deleteOne({ id: noteId });
        return  res.status(500).json({message: "Note deleted"})
    }
    catch (err){
        return  res.status(500).json({error: err})
    }
}