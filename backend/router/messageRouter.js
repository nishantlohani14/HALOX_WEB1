import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";

import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//send krne pe jo func run krega ussey bhejna h yha
router.post("/send", sendMessage);
// router.get("/getall", getAllMessages);

export default router;