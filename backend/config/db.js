import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://delivery-food:dbDeliveryFood@cluster0.0zedtpb.mongodb.net/food-umkm-delivery').then(()=>console.log("Database Connected"))
}