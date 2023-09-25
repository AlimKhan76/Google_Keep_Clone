const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        default:""
    },
    note: {
        type: String,
        default:"",
        required: true
    }

})

module.exports=mongoose.model("notes",NoteSchema)