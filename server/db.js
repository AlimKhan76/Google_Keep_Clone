// Importing Mongoose, it makes doing Operations with Mongo easier and simpler
const mongoose = require("mongoose")

// The url found at the starting page of MongoDbCompass, replace the localhost with 0.0.0.0 and after the / write the name of the collection in which you want to store the data, in this case it is "Google_Keep"
// const monogoURI = "mongodb://0.0.0.0:27017/Google_Keep";
const monogoURI = "mongodb+srv://coder34521:x9lEHQ2lNnpWb14z@cluster0.pq9euua.mongodb.net/Google_Keep";


const connectToMongoDB = () => {
    // inbuilt mongoose function to connect to MongoDb
    mongoose.connect(monogoURI)
        console.log("Connected To MongoDB")
}

// Exporting the function to index
 module.exports =connectToMongoDB;

