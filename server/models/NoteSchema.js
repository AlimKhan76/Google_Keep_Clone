const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        default:""
    },
    note: {
        type: String,
        default:"",
    }

})

const Note=mongoose.model("notes",NoteSchema)
Note.createIndexes();
module.exports= Note
