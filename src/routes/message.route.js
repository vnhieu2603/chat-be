import express from "express";
import { protectedRoute } from "../middleware/auth.middleware";
import {
  getMessages,
  getUserForSidebar,
  sendMessage,
} from "../controllers/message.controller";

const router = express.Router();

router.get("/users", protectedRoute, getUserForSidebar);

router.get("/:id", protectedRoute, getMessages);

router.post("/send/:id", protectedRoute, sendMessage);

export default router;
