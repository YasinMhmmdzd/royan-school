import express from "express";
import dotenv from "dotenv";

const app = express();

if (process.NODE_ENV == "development") {
    dotenv.config({ path: "./config/config.env" });
}
