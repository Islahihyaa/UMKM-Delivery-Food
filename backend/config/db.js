import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://EAI7:kelompok7@cluster0.c1ei4nl.mongodb.net/food-del').then(()=>console.log("Database Connected"))
}