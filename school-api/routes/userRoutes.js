import { Router } from "express";
import { authUser } from "../middlewares/auth.js";
import { Video } from "../model/videoModel.js";

const router = Router();

router.get("/", authUser, async (req, res) => {
    res.json({ message: "verify-ok", user: req.user });
});

router.get("/getVideos", authUser, async (req, res) => {
    try {
        res.json({
            message: "success",
            list: await Video.find({ studyField: req.user.studyField, grade: req.user.Grade }),
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;
