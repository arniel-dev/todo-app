import { pool } from "../config/db.js";

export const getCategories = async () => {
  try {
    const query = "SELECT * FROM categories";

    const [categories] = await pool.query(query);

    return { success: true, data: categories };
  } catch (error) {
    throw new Error();
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
