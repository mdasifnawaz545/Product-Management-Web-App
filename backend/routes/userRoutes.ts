import { register, logout, login,verify } from "../controllers/userController";
import { Router } from "express";
const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/verify", verify);

export default router;