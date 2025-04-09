import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import productRoute from './routes/productRoutes'
import userRoute from './routes/userRoutes'
import DBConnect from './lib/database';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

DBConnect()
    .then(() => {
        console.log("Database is Connected")
    })
    .catch((error) => {
        console.log("Database is not Connected", error);
    })

app.use("/", productRoute);

app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Listen at ${process.env.PORT}`);
});


