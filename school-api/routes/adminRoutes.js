import { Router } from "express";
import bcrypt from "bcrypt";

import { auth } from "../middlewares/auth.js";
import { Admin } from "../model/adminModel.js";
import { User } from "../model/userModel.js";

const router = Router();

// @desc get about admin
// @route GET /admin
// @access private

router.get("/", auth, (req, res) => {
    res.json({ message: "verify-ok", admin: req.user });
});

// @desc get list admins
// @route GET /admin/getAll
// @access private
router.get("/getAll", auth, async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        console.log(error);
    }
});

// @desc  signup admin for SuperAdmin
// @route POST /admin/signup
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

// @desc signup user for SuperAdmin
// @route POST /admin/user/signup
// @access private
router.post("/user/signup", auth, async (req, res) => {
    try {
        const { fullName, uniqueCode, motherNumber, fatherNumber, phoneNumber, Grade, studyField, fatherName } = req.body;

        if (!fullName || !uniqueCode || !motherNumber || !fatherNumber || !phoneNumber || !Grade || !studyField || !fatherName) {
            return res.json({ message: "input-not-valid" });
        }
        const unique = await User.findOne({ uniqueCode });
        if (unique) {
            res.json({ message: "user-used" });
        }
        await User.create({
            fullName,
            fatherName,
            uniqueCode,
            motherNumber,
            fatherNumber,
            phoneNumber,
            Grade,
            studyField,
        });
        res.json({ message: "user-created" });
    } catch (error) {
        console.log(error);
    }
});

// @desc get list of users
// @route GET /admin/user/getAll
// @access private

router.get("/user/getAll", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});

// @desc get info for users&admin
// @route GET /admin/getInfo
// @access private
router.get("/getinfo", auth, async (req, res) => {
    try {
        const countOfUser = await User.count();
        const countOfAdmin = await Admin.count();
        res.json({
            userCount: countOfUser,
            adminCount: countOfAdmin,
        });
    } catch (error) {
        console.log(error);
    }
});

// @desc delete admin
// @route DELETE /admin/delete
// @access private

router.delete("/delete/:userName?", auth, async (req, res) => {
    try {
        if (req.user.role == "admin") return res.json({ message: "admin-not-access" });
        await Admin.findOneAndDelete({ userName: req.params.userName });
        res.json({ message: "delete-ok" });
    } catch (error) {
        console.log(error);
    }
});

// @desc delete user
// @route DELETE /admin/delete
// @accsess private

router.delete("/delete/:uniqueCode?", auth, async (req, res) => {
    try {
        if (req.user.rolee == "admin") return res.json({ message: "admin-not-access" });
        await User.findOneAndDelete({ uniqueCode: req.params.uniqueCode });
        res.json({ message: "delete-ok" });
    } catch (error) {
        console.log(error);
    }
});
export default router;
