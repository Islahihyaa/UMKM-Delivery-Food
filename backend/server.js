import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Berjalan")
});

app.listen(port,()=>{
    console.log(`Server Berjalan di http://localhost:${port}`)
});
