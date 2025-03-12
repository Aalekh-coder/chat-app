import express, { json, urlencoded } from 'express'
import dotenv from "dotenv"
import connectDB from './Config/db.js';
import userRoute from "./Routes/userRoute.js"
import cookieParser from "cookie-parser"
import messageRoute from "./Routes/messageRoute.js"
import cors from "cors"

dotenv.config()

const app = express();

const PORT = process.env.PORT || 8080

const corsOption = {
    origin: "http://localhost:5173",
    credentials:true
}
app.use(urlencoded({extended:true}))
app.use(json());
app.use(cookieParser())
app.use(cors(corsOption))


app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

app.listen(PORT, () => {
    connectDB()
    console.log("server is running", PORT);
})