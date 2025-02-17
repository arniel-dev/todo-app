import { Router } from "express";
const router = Router();
import { createTask } from "../controllers/taskController.js";

router.post("/task", createTask);

export default router;
