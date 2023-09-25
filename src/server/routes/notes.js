const express=require("express");
const NoteSchema = require("../models/NoteSchema");
const router=express.Router()

router.post("/" , async (req,res)=>{
    const title= req.body.title
    const note= req.body.note
    const notes=new NoteSchema({title,note})

    const savedNote= await notes.save();
    res.send(savedNote);

})

module.exports= router;