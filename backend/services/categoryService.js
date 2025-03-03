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

export const addCategory = async (name, user_id, order) => {
  try {
    const query =
      "INSERT INTO categories (name, user_id, `order`) VALUES (?, ?, ?)";

    await pool.query(query, [name, user_id, order]);

    return { success: true, message: "Category added successfully" };
  } catch (error) {
    throw new Error();
  }
};

export const updateCategoryDetails = async (id, name, order) => {
  try {
    let columnsToUpdate = [];
    let values = [];

    if (name) {
      columnsToUpdate.push("name = ?");
      values.push(name);
    }

    if (order) {
      columnsToUpdate.push("`order` = ?");
      values.push(order);
    }

    const query = `UPDATE categories SET ${columnsToUpdate.join(
      ", "
    )} WHERE id = ?`;

    values.push(id);

    await pool.query(query, values);

    return { success: true, message: "Update Category was successfully" };
  } catch (error) {
    return { success: false, message: "Failed to update category" };
  }
};

export const deleteCategory = async (id) => {
  try {
    const query = `DELETE FROM categories WHERE id=?`;

    await pool.query(query, [id]);

    return { success: true, message: "Category deleted successfully" };
  } catch (error) {
    throw new Error();
  }
};
