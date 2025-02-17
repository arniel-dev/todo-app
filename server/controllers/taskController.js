import TaskModel from "../models/taskModel.js";
import { addTask } from "../services/taskService.js";

export const createTask = async (req, res) => {
  const { category, description, priority, title, expiryDate } = req.body;

  // Validate required fields
  if (!title || !category || !priority) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Create task instance
  const task = new TaskModel({
    category,
    description,
    priority,
    title,
    expiryDate,
  });

  try {
    // Create task
    const response = await addTask(task, res);
    if (response.success) {
      return res.status(201).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in user create task:", error);
    return res.status(500).json({
      success: false,
      message: "Create task failed. Please try again later.",
    });
  }
};
