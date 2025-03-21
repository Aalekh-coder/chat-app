import { Router } from "express";
import { getMessage, sendMessage } from "../Controllers/messageController.js";
import isAuthenticated from "../Middleware/isAuthenticated.js"


const router = Router();

router.route("/send/:id").post(isAuthenticated, sendMessage)
router.route("/:id").get(isAuthenticated, getMessage)

export default router