import { Router } from "express";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.get("/", auth, async (req, res) => {
    res.json({ message: "verify-ok", user: req.user });
});

export default router;
