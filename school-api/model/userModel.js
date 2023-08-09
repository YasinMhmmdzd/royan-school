import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    fatherName: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    uniqueCode: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    motherNumber: {
        type: String,
        required: true,
        trim: true,
    },
    fatherNumber: {
        type: String,
        required: true,
        trim: true,
    },
    Grade: {
        type: String,
        required: true,
        trim: true,
    },
    studyField: {
        type: String,
        required: true,
        trim: true,
    },
});

export const User = model("User", userSchema);
