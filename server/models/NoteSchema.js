const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    user:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
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
module.exports= Note
