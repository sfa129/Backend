import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,

        }
    }, 
    {timestamps: true}  //provide two facilities i.e createdAt and updatedAt    
);
//when anything stores in the MongDB, e.g. user, it will store like "users"
export const User = mongoose.model("User", userSchema);

