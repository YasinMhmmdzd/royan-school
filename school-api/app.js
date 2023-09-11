import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import { connectDB } from "./utils/db.js";
import publicRoutes from "./routes/publicRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import path from "path";

const app = express();
if (process.env.NODE_ENV == "development") {
    dotenv.config({ path: "./config/config.env" });
}
app.use(morgan("dev"));
connectDB();

//?custom middleware
app.use(cors());
app.use(express.json());

//? routes
app.use(publicRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/videos", videoRoutes);
app.get("/*", (req, res) => {
    console.log(path.json(path.resolve(), "index.html"));
    res.sendFile(path.json(path.resolve(), "index.html"), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(process.env.PORT, () => console.log(`server is runing on port ${process.env.PORT} and mode ${process.env.NODE_ENV}`));
