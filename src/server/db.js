const mongoose = require("mongoose")
const monogoURI = "mongodb://0.0.0.0:27017/Google_Keep";

const connectToMongoDB = () => {

    mongoose.connect(monogoURI)

        console.log("Connected To MongoDB")
    
}

 module.exports =connectToMongoDB;

