import express from 'express';
import mongoose from 'mongoose';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './utils/connectDb.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
app.use(cors({
    origin: "https://guided-wailist.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Routes
app.use('/api/v1/waitlist', userRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT ;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
