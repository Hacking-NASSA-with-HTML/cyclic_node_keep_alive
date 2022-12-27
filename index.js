import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import keepAlive from "./routes/keepAlive.js";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()


app.use("/", keepAlive)
// app.get("/ping", keepAlive)
// app.use("/", express.static(path.join(__dirname, "public")))


const PORT = process.env.PORT || 6001
app.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log(`The app diligently works at Port: ${PORT}`)
})
