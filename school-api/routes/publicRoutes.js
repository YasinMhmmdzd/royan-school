import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { Admin } from "../model/adminModel.js";
import { User } from "../model/userModel.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: `api is running` });
});

router.post("/login/admin", async (req, res) => {
    try {
        const { userName, password } = req.body;
        const isMatch = await Admin.findOne({ userName });
        if (!isMatch || !(await bcrypt.compare(password, isMatch.password))) {
            return res.json({ message: "not-valid" });
        }
        jwt.sign(
            { id: isMatch._id, role: isMatch.role, fullName: isMatch.fullName, userName: isMatch.userName, password: isMatch.password },
            process.env.JWT_SECRET,
            { expiresIn: "6d" },
            (err, token) => {
                if (err) return console.log(err);

                res.json({
                    token,
                    message: "success",
                });
            }
        );
    } catch (error) {
        console.log(error);
    }
});

router.post("/login/user", async (req, res) => {
    try {
        const { uniqueCode, phoneNumber } = req.body;
        const isMatch = await User.findOne({ uniqueCode });
        if (!isMatch || phoneNumber != isMatch.phoneNumber) {
            return res.json({ message: "not-valid" });
        }
        const userPayload = {
            id: isMatch._id,
            fullName: isMatch.fullName,
            uniqueCode: isMatch.uniqueCode,
            motherNumber: isMatch.motherNumber,
            fatherNumber: isMatch.fatherNumber,
            Grade: isMatch.Grade,
            studyField: isMatch.studyField,
            role: "user",
        };
        jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: "6d" }, (err, token) => {
            if (err) return console.log(err);

            res.json({
                token,
                message: "success",
            });
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;
