import express, { json } from 'express'
import dotenv from "dotenv"
import connectDB from './Config/db.js';
import userRoute from "./Routes/userRoute.js"
import cookieParser from "cookie-parser"
import messageRoute from "./Routes/messageRoute.js"

dotenv.config()

const app = express();

const PORT = process.env.PORT || 8080

app.use(json());
app.use(cookieParser())

app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

app.listen(PORT, () => {
    connectDB()
    console.log("server is running", PORT);
})