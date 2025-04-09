import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

async function DBConnect() {
    await mongoose.connect(process.env.DB_URL as string)
}

export default DBConnect;