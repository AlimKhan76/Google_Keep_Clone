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

module.exports=mongoose.model("notes",NoteSchema)