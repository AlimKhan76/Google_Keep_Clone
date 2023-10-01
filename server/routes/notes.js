const express = require("express");

// Importing Note from the model to perform Mongo Operations
const Note = require("../models/NoteSchema");

const router = express.Router()

// This endpoint create a note with the user linked to the note 
router.post("/create", async (req, res) => {
    // Getting values through destructring
    const { title, note, user } = req.body
    const notes = new Note({ title, note, user })
    // Saving the note in the db
    const savedNote = await notes.save();
    // Sending the response
    res.send(savedNote);
})

//This get all Notes from the database linked to to the userId
router.get("/getnotes", async (req, res) => {
    try {
        // Getting the userid through destructing object 
        const { userid } = req.headers;
        // Finding any notes that have userid in it 
        const allNotes = await Note.find({ user: userid });
        // Sending all the fetched notes as response
        res.send(allNotes);
    }
    catch (error) {
        // If any errors send the error as response
        res.send(error)
    }
})


// This get the note according to the id of the note 
router.get("/get/:_id", async (req, res) => {
    // Destructing id from the url 
    const { _id } = req.params;
    try {
        // Finding note of the id in the db
        const note = await Note.findOne({ _id: _id })
        // Sending the note as the response
        res.send(note);
    }
    catch (error) {
        // If any errors send the error as response
        res.send(error);
    }
})


// This endpoint updates the note according to its id 
router.put("/update", async (req, res) => {
    // Destructing values from the request
    const { _id, title, note } = req.body.data;
    try {
        // Updating user corresponding with the id
        const updatedUser = await Note.updateOne({ _id }, {
            $set: {
                title, note
            }
        })
        // Sending response
        res.send(updatedUser)
    }
    catch (err) {
        // If any errors send the error as response
        res.send(err)
    }
})

// This endpoint deletes the note from the DB 
router.delete("/delete/:_id", async (req, res) => {
    // Destructing id from the url 
    const { _id } = req.params
    try {
        // Deleting the note with the corresponding id 
        const deleteNote = await Note.deleteOne({ _id })
        res.send(deleteNote)
    }
    catch (err) {
        // If any errors send the error as response
        res.send(err)
    }
})


// Endpoint for search in notes
router.post("/search", async (req, res) => {
    // Destructing data from the request 
    const  data  = req.body.data  ;
    try{
    // Finding the note in the db, $regex works like sql %data% and options: i means search id case insensitive
    const searchNote = await Note.find({$or:[{ title: { $regex: data, $options: "i" } },
        { note: { $regex: data, $options: "i" }}]})
    res.send(searchNote)
    }
    catch(error){
        res.send(error)
    }
})



//Exports all the api endpoints to index.js
module.exports = router;