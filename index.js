import express from "express";
import fetch from 'node-fetch';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
// import keepAlive from "./routes/keepAlive.js";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()


// app.use("/", keepAlive)
// app.get("/ping", keepAlive)
// app.use("/", express.static(path.join(__dirname, "public")))
app.get('/', function (req, res) {
    res.send("Hello World!, I am server created by expresss");
})


const PORT = process.env.PORT || 6001
app.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log(`The app diligently works at Port: ${PORT}`)
})


const interval = setInterval(async () => {
    try {
        const response = await fetch('https://render-back-end-nikky-pedia.onrender.com/')
        // const body = await response.text();
        console.log(response.ok)
        console.log(response.status)
        // console.log(body)
    } catch (error) {
        console.log(error)
    }
}, 3000);