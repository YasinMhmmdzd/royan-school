import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.header("token");
    if (!token) return res.json({ message: "token-error" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
};
