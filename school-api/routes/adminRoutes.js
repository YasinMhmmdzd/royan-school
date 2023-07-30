import { Router } from "express";
import bcrypt from "bcrypt";

import { auth } from "../middlewares/auth.js";
import { Admin } from "../model/adminModel.js";

const router = Router();

router.get("/", auth, (req, res) => {
    res.json({ message: "verify-ok" });
});

router.post("/signup", async (req, res) => {
    try {
        const { password, userName, fullname } = req.body;
        const hash = await bcrypt.hash(password, 10);
        await Admin.create({ password: hash, userName, fullname });
    } catch (error) {
        console.log(error);
    }
});

export default router;
