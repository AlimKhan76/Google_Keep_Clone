const express = require("express")
const connectToMongoDB = require("./db");
const app = express()
const port = 4000;
const cors = require("cors")

// Connecting to Mongo Db 
connectToMongoDB();

// Lets us access api originating from another source
app.use(cors())

// Parses data into json
app.use(express.json())

// All the endpoints of note operations 
app.use("/notes", require("./routes/notes"))

// All the endpoints of user operations
app.use("/user", require("./routes/auth"))

// Starts the server
app.listen(port, () => {
    console.log(`Your server is running at port http://localhost:${port}`)

})