import { Router } from "express";
import jwt from "jsonwebtoken";

import { Admin } from "../model/adminModel";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: `api is running` });
});

router.get("/login/admin", async (req, res) => {
    try {
        const { userName, password } = req.body;

        const isMatch = Admin.findOne({ userName });
        if (!isMatch && password != isMatch.password) {
            res.json({ message: "not-valid" });
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
