const express = require("express");
const Note = require("../models/NoteSchema");

const router = express.Router()

router.post("/create", async (req, res) => {
    const { title, note, user } = req.body
    const notes = new Note({ title, note, user })

    const savedNote = await notes.save();
    res.send(savedNote);
})

router.get("/getnotes", async (req, res) => {
    try {
        const { userid } = req.headers;
        const allNotes = await Note.find({ user: userid });
        res.send(allNotes);
    }
    catch (error) {
        res.send(error)
    }

})



router.get("/get/:_id", async (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    try {
        const note = await Note.findOne({ _id: _id })
        res.send(note);
    }
    catch (error) {
        res.send(error);
    }

})
router.put("/update",async (req,res)=>{
    const {_id, title,note}=req.body.data;
    try{

        const updatedUser= await Note.updateOne({ _id},{
            $set:{
                title, note
            }
        })
        res.send(updatedUser)
    }
    catch(err){
        res.send(err)
    }

})


router.delete("/delete/:_id",async(req,res)=>{
    const{_id}= req.params
    try{
    const deleteNote= await Note.deleteOne({_id})
    console.log(deleteNote)
    res.send(deleteNote)
    }
    catch(err){
        res.send(err)
    }
})




module.exports = router;