import { Router } from "express";
import { authUser } from "../middlewares/auth.js";

const router = Router();

router.get("/", authUser, async (req, res) => {
    res.json({ message: "verify-ok", user: req.user });
});

export default router;
