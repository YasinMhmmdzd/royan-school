import { Router } from "express";
import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const router = Router();

const s3 = new AWS.S3({
    endpoint: process.env.LIARA_ENDPOINT,
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
    region: "default",
});

const upload = multer({
    storage: multerS3({
        bucket: process.env.LIARA_BUCKET_NAME,
        s3,
        key: (req, file, cb) => {
            console.log(file);
            cb(null, file.originalname);
        },
    }),
});

router.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.file);
});

export default router;
