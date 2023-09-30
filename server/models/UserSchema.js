const mongoose=require("mongoose")

// Creating a Schema(modal) for the userData
const UserSchema= new mongoose.Schema({
    email:{
        type: String,
        required :true,
        unique:true
    },
    password:{
        type : String,
        required: true
    }
})
const user=mongoose.model("users",UserSchema)
user.createIndexes();
module.exports=user
