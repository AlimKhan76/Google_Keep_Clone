const express = require("express")
const User = require("../models/UserSchema")
const router = express.Router();

// To encrypt the password 
const bcrypt = require("bcrypt");

// API route used to create a  new User in the database 
router.post("/createuser", async (req, res) => {

    // Getting email and password through destructing from the bosy of request 
    const { email, password } = req.body.userData;

    // Searching in Mongo if there is any user with the email provided
    const checkEmail = await User.findOne({ email });

    // If there is a user with the same email in the database then the server sends an error response of code 400 and  a custom message saying that the user already exists 
    if (checkEmail) {
        return res.status(400).json({ message: "This user already exists" });
    }

    // Generating salt to add with to encrypt the password
    const salt = await bcrypt.genSalt(10);

    // Encrypting the password using bcrypt and the generated salt and storing it in a variable 
    const cryptedPass = await bcrypt.hash(password, salt);

    // Creating a New User in mongo by sending email and encrypted password
    const newUser = await User.create({
        email: email,
        password: cryptedPass
    })

    // Sending the id of the newly created User 
    res.send(newUser.id);
})


// Creating a login endpoint 
router.post("/login", async (req, res) => {

    // Destructuring email and apssseord from request body 
    const { email, password } = req.body.data;

    // try and catch to handle any errors 
    try {
        
        // Checking if a user with the email exists in db or not 
        const checkUser = await User.findOne({ email })

        // If there is no user with the provided email then the server send an error along with a message of Invalid credentials
        if (!checkUser) {
            return res.status(404).json({ message: "Invalid Credentials !!" })
        }
        // Comparing the provide password with the encrypted password stored in the database using bcrypt compare 
        const cryptedPass = await bcrypt.compare(password, checkUser.password)

        //  If the password matches then the server send the user id as response 
        if (cryptedPass) {
            res.send(checkUser.id);
        }

        // If the password does not matchs then we send a error from the server with the message invalid credentials 
        else{
            return res.status(404).json({ message: "Invalid Credentials !!" })
        }
    }
    catch (error) {
        // Sends any unhandled errors as response 
        res.send(error)
    }
}
)

// Exporting the router so we can use them in index.js 
module.exports = router