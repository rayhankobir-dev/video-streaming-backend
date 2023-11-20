import { Router } from "express";
import userRoutes from "./user.route.js";

const router = new Router();

router.use("/users", userRoutes);

export default router;
