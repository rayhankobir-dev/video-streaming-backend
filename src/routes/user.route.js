import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = new Router();

router.get("/login", registerUser);

export default router;
