import express from "express";
import { loginUser, signUpUser, logoutUser } from "./../controllers/auth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.post("/logout", logoutUser);

export default router;
