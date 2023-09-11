import { Schema, model } from "mongoose";

const videoSchema = new Schema({
    studyField: {
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
    title: {
        type: String,
        required: true,
        trim: true,
    },
});

export const Video = model("Video", videoSchema);
