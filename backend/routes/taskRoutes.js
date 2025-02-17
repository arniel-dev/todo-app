import { Router } from "express";
const router = Router();
import {
  createTask,
  retrieveTask,
  removeTask,
} from "../controllers/taskController.js";

router.post("/task", createTask);
router.get("/tasks", retrieveTask);
router.delete("/task/:id", removeTask);

export default router;
