import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    role: String,
    fullName: {
        type: String,
        trim: true,
    },
    userName: {
        unique: true,
        type: String,
        trim: true,
    },
    password: {
        trim: true,
        type: String,
    },
});

export const Admin = model("Admin", adminSchema);
