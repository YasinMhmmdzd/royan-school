import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import { connectDB } from "./utils/db.js";
import publicRoutes from "./routes/publicRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
//* config
if (process.env.NODE_ENV == "development") {
    dotenv.config({ path: "./config/config.env" });
    app.use(morgan("dev"));
}
connectDB();

//? routes
app.use(publicRoutes);
app.use("/admin", adminRoutes);

app.listen(process.env.PORT, () => console.log(`server is runing on port ${process.env.PORT} and mode ${process.env.NODE_ENV}`));
