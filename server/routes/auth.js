const express = require("express")
const User = require("../models/UserSchema")
const router = express.Router();
const bcrypt = require("bcrypt");


router.post("/createuser", async (req, res) => {
    const { email, password } = req.body;
    const salt=await bcrypt.genSalt();
    const cryptedPass= await bcrypt.hash(password,salt);
    const newUser = await User.create({
        email: email,
        password: cryptedPass
    })
    res.send(newUser);

})

module.exports= router