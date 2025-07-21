import express from "express";
import { checkAuth, login, logout, signup } from "../controllers/auth.controller.js";
import { updateProfile } from "../controllers/profile.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

//auth
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/check", protectedRoute, checkAuth);

//profile
router.put("/updateProfile", protectedRoute, updateProfile);
export default router;
