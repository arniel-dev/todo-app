import TaskModel from "../models/taskModel.js";
import {
  addTask,
  getTask,
  deleteTask,
  taskUpdate,
} from "../services/taskService.js";

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
    const response = await addTask(task);
    if (response.success) {
      return res.status(201).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in create task:", error);
    return res.status(500).json({
      success: false,
      message: "Create task failed. Please try again later.",
    });
  }
};

export const retrieveTask = async (req, res) => {
  try {
    const response = await getTask();
    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in retriving tasks:", error);
    return res.status(500).json({
      success: false,
      message: "Retriving task failed. Please try again later.",
    });
  }
};
export const removeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteTask(id);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in deleting task:", error);
    return res.status(500).json({
      success: false,
      message: "Deleting task failed. Please try again later.",
    });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, description, priority, title, expiryDate } = req.body;
    const task = new TaskModel({
      category,
      description,
      priority,
      title,
      expiryDate,
    });

    const response = await taskUpdate(id, task);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in updating task:", error);
    return res.status(500).json({
      success: false,
      message: "Updating task failed. Please try again later.",
    });
  }
};
