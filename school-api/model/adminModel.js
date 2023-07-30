import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    role: { type: String, default: "admin" },
    fullName: { type: String, trim: true, required: true },
    userName: { unique: true, type: String, trim: true, required: true },
    password: { trim: true, type: String, required: true },
});

export const Admin = model("Admin", adminSchema);
