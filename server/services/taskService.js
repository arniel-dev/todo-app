import { pool } from "../config/db.js";

export const addTask = async (task) => {
  try {
    const query =
      "INSERT INTO tasks (title, description, category, priority, expiryDate) VALUES (?, ?, ?, ?, ?)";
    const values = [
      task.title,
      task.description,
      task.category,
      task.priority,
      task.expiryDate,
    ];
    await pool.query(query, values);

    return { success: true, message: "Task created successfully" };
  } catch (error) {
    throw new Error();
  }
};
