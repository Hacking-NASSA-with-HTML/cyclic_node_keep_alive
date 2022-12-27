import express from "express"
import wakeUp from "../middleware/wakeUp.js"


const router = express.Router()

router.get("/", wakeUp)

export default router
