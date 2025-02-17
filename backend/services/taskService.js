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
export const getTask = async () => {
  try {
    const query = "SELECT * FROM tasks";

    const [tasks] = await pool.query(query);

    return { success: true, data: tasks };
  } catch (error) {
    throw new Error();
  }
};
export const deleteTask = async (id) => {
  try {
    const query = "DELETE FROM tasks WHERE id=?";

    await pool.query(query, [id]);

    return { success: true, message: "Task deleted successfully" };
  } catch (error) {
    throw new Error();
  }
};
