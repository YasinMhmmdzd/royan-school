import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: `api is running` });
});

router.get("/login", (req, res) => {
    res.json({ message: `api is running` });
});
