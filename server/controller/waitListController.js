import User from "../model/userModel.js";
import { sendEmail } from "../mails/sendEmail.js";
const addWaitListUser = async (req,res) => {
    try {
        const { fullName, email , message } = req.body;
        console.log("Received data:", req.body);
        if (!fullName || !email) {
            console.error("Full name or email is missing");
            return res.status(400).json({ message: "Full name and email are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.error("User already exists in the waitlist:", email);
            return res.status(400).json({ message: "User already exists in the waitlist" });
        }
        const newUser = new User({ fullName, email , message });
        await sendEmail(email, fullName);
        await newUser.save();
        res.status(201).json({ message: "User added to waitlist successfully" });

    } catch (error) {
        console.log("Error adding user to waitlist:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getWaitListUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching waitlist users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export { addWaitListUser, getWaitListUsers};