import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECT);
        console.log(`database is connect on ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};
