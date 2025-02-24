import { pool } from "../config/db.js";

export const getCategories = async (user_id) => {
  try {
    const query = "SELECT * FROM categories WHERE user_id = ?";
    const [categories] = await pool.query(query, [user_id]);

    // Insert Default Categories if none exist
    if (categories.length === 0) {
      const insertQuery = `INSERT INTO categories (name, user_id) VALUES ?`;
      const values = [
        ["To Do", user_id],
        ["In Progress", user_id],
        ["Done", user_id],
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

    throw new Error(error.message);
  }
};

export const addCategory = async (name) => {
  try {
    const query = "INSERT INTO categories (name) VALUES (?)";

    await pool.query(query, [name]);

    return { success: true, message: "Category added successfully" };
  } catch (error) {
    throw new Error();
  }
};
