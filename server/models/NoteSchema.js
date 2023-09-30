const mongoose = require("mongoose")

// Creating a schema(modal) for the note data
const NoteSchema = new mongoose.Schema({
    // Contains the id of the user that the note belongs to 
    user:{
        type :mongoose.Schema.Types.ObjectId,
        // Name of the modal present in UserSchema
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
