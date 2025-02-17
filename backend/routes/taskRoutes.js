import { Router } from "express";
const router = Router();
import {
  createTask,
  retrieveTask,
  removeTask,
  updateTask,
} from "../controllers/taskController.js";

router.post("/task", createTask);
router.get("/tasks", retrieveTask);
router.delete("/task/:id", removeTask);
router.put("/task/:id", updateTask);

export default router;
