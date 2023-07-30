import { Router } from "express";

import { auth } from "../middlewares/auth";

const router = Router();

router.get("/", auth, (req, res) => {
    res.json({ message: "verify-ok" });
});

export default router;
