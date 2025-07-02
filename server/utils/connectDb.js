import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        const dbUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/GuidEdWaitList';
        await mongoose.connect(dbUrl);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}