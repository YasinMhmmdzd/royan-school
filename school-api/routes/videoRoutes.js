import { Router } from "express";
import multer from "multer";

import { s3Upload, s3Download } from "../utils/s3.js";

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.split("/")[0] === "image") {
            cb(null, true);
        } else {
            cb("not valid", false);
        }
    },
});

router.post("/upload", upload.any(), async (req, res) => {
    console.log(req.body.title, req.files);
    try {
        await s3Upload(req.files[0]);
        res.json({ message: "success" });
    } catch (error) {
        res.json({ message: error });
    }
});

export default router;
