import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
          message:(props) => `${props.value} is not a valid email address!`
        }
    },
    message: {
        type: String,
        required: false, 
        default: ""
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
