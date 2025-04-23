const User = require("../models/user");

// User Signup
const signup = async (req, res) => {
    const { name, email, password } = req.body;

    console.log("Received Data:", req.body); // Debugging

    try {
        // Validate Inputs
        if (!name) {
            return res.status(400).json({ error: "Name is required" });
        }
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        if (!password || password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Check if User Already Exists
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Create New User
        const newUser = await User.create({ name, email, password });

        return res.status(201).json({
            message: "User registered successfully",
            user: { id: newUser._id, name: newUser.name, email: newUser.email }
        });

    } catch (error) {
        console.error("Error in signup function:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// User Login
const loggin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate Inputs
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        if (!password || password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Find User in DB
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(400).json({ error: "User not found" });
        }

        // Check Password (since no hashing is used)
        if (checkUser.password !== password) {
            return res.status(400).json({ error: "Invalid password" });
        }

        return res.status(200).json({ message: "Login Successful", user: { id: checkUser._id, name: checkUser.name, email: checkUser.email } });

    } catch (error) {
        console.error("Error in login function:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};




const getData = (req,res) => {
    const data = req.body;
    return res.json(data)
}
module.exports = { signup, loggin, getData };
