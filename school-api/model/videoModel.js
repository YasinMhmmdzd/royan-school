import { Schema, model } from "mongoose";

const videoSchema = new Schema({
    feild: {
        type: String,
        required: true,
        trim: true,
    },
    grade: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
});

export const Video = model("Video", videoSchema);
