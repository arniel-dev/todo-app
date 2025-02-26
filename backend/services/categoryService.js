import { pool } from "../config/db.js";

export const getCategories = async (user_id) => {
  try {
    const query = "SELECT * FROM categories WHERE user_id = ?";
    const [categories] = await pool.query(query, [user_id]);

    // Insert Default Categories if none exist
    if (categories.length === 0) {
      const insertQuery = `INSERT INTO categories (name, user_id, \`order\`) VALUES ?`;
      const values = [
        ["To Do", user_id, 1],
        ["In Progress", user_id, 2],
        ["Done", user_id, 3],
      ];

      // Insert default categories
      await pool.query(insertQuery, [values]);

      // Fetch the newly inserted categories
      const [newCategories] = await pool.query(query, [user_id]);

      return { success: true, data: newCategories };
    }

    return { success: true, data: categories };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addCategory = async (name, user_id) => {
  try {
    const query = `INSERT INTO categories (name, user_id) VALUES (?, ?)`;

    await pool.query(query, [name, user_id]);

    return { success: true, message: "Category added successfully" };
  } catch (error) {
    throw new Error();
  }
};

export const reOrderCategory = async (id, order) => {
  try {
    const query = "UPDATE categories SET `order` = ? WHERE id = ?";

    await pool.query(query, [order, id]);

    return { success: true, message: "Reoder Category was successfully" };
  } catch (error) {
    return { success: false, message: "Failed to reorder category" };
  }
};
