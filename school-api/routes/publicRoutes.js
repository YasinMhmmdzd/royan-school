import { Router } from "express";
import jwt from "jsonwebtoken";

import { Admin } from "../model/adminModel.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: `api is running` });
});

router.post("/login/admin", async (req, res) => {
    try {
        console.log(req.body);
        const { userName, password } = req.body;

        const isMatch = await Admin.findOne({ userName });
        if (!isMatch || password != isMatch.password) {
            return res.json({ message: "not-valid" });
        }
        jwt.sign(isMatch, process.env.JWT_SECRET, { expiresIn: "6d" }, (err, token) => {
            if (err) return console.log(err);

            res.json({
                token,
            });
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;
