import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.header("token");
    if (!token) return res.json({ message: "token-error" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role == "user") return res.json({ message: "not-admin" });
    req.user = decoded;
    next();
};

export const authUser = (req, res, next) => {
    const token = req.header("token");
    if (!token) return res.json({ message: "token-error" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role == "user") {
        req.user = decoded;
        next();
    } else {
        return res.json({ message: "not-user" });
    }
};
