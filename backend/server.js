import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config.js"
import cookieParser from "cookie-parser";


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
app.use(cookieParser());

connectDB();

app.use("/api/food", foodRouter)
app.use("/images", exprss.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res)=>{
    res.send("API Berjalan")
});

app.listen(port,()=>{
    console.log(`Server Berjalan di http://localhost:${port}`)
});
