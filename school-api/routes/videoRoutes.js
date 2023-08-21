import { Router } from "express";
import multer from "multer";

import { s3Upload, s3Download, s3Delete } from "../utils/s3.js";
import { auth } from "../middlewares/auth.js";
import { Video } from "../model/videoModel.js";

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.split("/")[0] === "video") {
            cb(null, true);
        } else {
            cb("not valid", false);
        }
    },
});

// @desc   upload video
// @route  POST /videos/upload
// @access private admin
router.post("/upload", auth, upload.any(), async (req, res) => {
    try {
        if (!req.body.studyField || !req.body.grade || !req.body.name || !req.body.title) {
            return res.json({ message: "input-notvalid" });
        }
        await Video.create({
            studyField: req.body.studyField,
            grade: req.body.grade,
            name: req.body.name,
            title: req.body.title,
        });
        await s3Upload(req.files[0], req.body.name);
        res.json({ message: "success" });
    } catch (error) {
        res.json({ message: error });
    }
});

// @desc   get list video
// @route  GET /videos/list
// @access private admin
router.get("/list", auth, async (req, res) => {
    try {
        res.json({ message: "success", list: await Video.find() });
    } catch (error) {
        res.json({ message: error });
    }
});

// @desc   delete video
// @route  DELETE /videos/delete/:name
// @access private admin
router.delete("/delete/:name?", auth, async (req, res) => {
    try {
        console.log(req.params.name);
        await Video.findOneAndDelete({ name: req.params.name });
        await s3Delete(req.params.name);
        res.json({ message: success });
    } catch (error) {
        res.json({ message: "not-video" });
    }
});

export default router;
