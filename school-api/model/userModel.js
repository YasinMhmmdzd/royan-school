import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    uniqueCode: {
        type: Number,
        unique: true,
        required: true,
        trim: true,
    },
    motherNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    fatherNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    Grade: {
        type: Number,
        required: true,
        trim: true,
    },
    studyFeild: {
        type: Number,
        required: true,
        trim: true,
    },
});

export const User = model("User", userSchema);
