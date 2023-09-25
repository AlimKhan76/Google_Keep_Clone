const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
    email:{
        type: email,
        required :true,
        unique:true
    },
    password:{
        type : String,
        required: true
    }
})
const user=mongoose.model(user,UserSchema)
user.createIndexes();
