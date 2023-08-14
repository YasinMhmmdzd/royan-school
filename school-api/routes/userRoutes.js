import { Router } from "express";
import { authUser } from "../middlewares/auth.js";
// import multer from "multer";
// import multerS3 from "multer-s3";
// import AWS from "aws-sdk";

const router = Router();

router.get("/", authUser, async (req, res) => {
    res.json({ message: "verify-ok", user: req.user });
});

export default router;
