import { Router } from "express";
import bcrypt from "bcrypt";

import { auth } from "../middlewares/auth.js";
import { Admin } from "../model/adminModel.js";

const router = Router();

// @desc signup admin for SuperAdmin
// @route /admin/signup
// @access private

router.get("/", auth, (req, res) => {
    res.json({ message: "verify-ok", user: req.user });
});

// @desc get list admins
// @route /admin/getAll
// @access private

router.post("/signup", auth, async (req, res) => {
    try {
        if (req.user.role == "admin") return res.json({ message: "admin-not-valid" });
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

// @desc delete admin
// @route /admin/delete
// @access private

router.delete("/delete/:userName?", auth, async (req, res) => {
    try {
        console.log("delete");
        if (req.user.role == "admin") return res.json({ message: "admin-not-valid" });
        await Admin.findOneAndDelete({ userName: req.params.userName });
        res.json({ message: "delete-ok" });
    } catch (error) {
        console.log(error);
    }
});
export default router;
