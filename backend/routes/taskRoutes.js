import { Router } from "express";
const router = Router();
import { createTask, retrieveTask } from "../controllers/taskController.js";

router.post("/task", createTask);
router.get("/tasks", retrieveTask);

export default router;
