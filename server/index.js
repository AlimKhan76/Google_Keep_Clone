const express = require("express")
const connectToMongoDB = require("./db");
const app = express()
const port = 4000;
const cors = require("cors")

connectToMongoDB();
app.use(cors())
app.use(express.json())

app.use("/notes", require("./routes/notes"))
app.use("/user", require("./routes/auth"))


app.listen(port, () => {
    console.log(`Your server is running at port ${port}`)

})