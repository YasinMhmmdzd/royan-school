import { Router } from "express";
import bcrypt from "bcrypt";

import { auth } from "../middlewares/auth.js";
import { Admin } from "../model/adminModel.js";

const router = Router();

router.get("/", auth, (req, res) => {
    res.json({ message: "verify-ok", user: req.user });
});

router.post("/signup", auth, async (req, res) => {
    if (req.user.role == "admin") res.json({ message: "admin-not-valid" });
    try {
        const { password, userName, fullName } = req.body;
        if (!password || !userName || !fullName) {
            return res.json({ message: "input-not-valid" });
        }
        const unique = await Admin.findOne({ userName });
        if (unique) {
            return res.json({ message: "admin-used" });
        }
        const hash = await bcrypt.hash(password, 10);
        await Admin.create({ password: hash, userName, fullName });
        res.json({ message: "admin-created" });
    } catch (error) {
        console.log(error);
    }
});

export default router;
