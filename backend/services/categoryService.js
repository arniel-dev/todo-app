import { pool } from "../config/db.js";
import { logHistory } from "./historyService.js";

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

    const result = await pool.query(query, [name, user_id, order]);
    await logHistory({
      type: "BOARD_UPDATE",
      action: "CATEGORY CREATED",
      details: {
        ticketId: result.insertId,
        category_name: name,
        user_id,
        order,
      },
      user_id,
    });
    return { success: true, message: "Category added successfully" };
  } catch (error) {
    throw new Error();
  }
};

export const updateCategoryDetails = async (id, name, order, user_id) => {
  try {
    let columnsToUpdate = [];
    let values = [];

    const selectCategoryQuery = "SELECT * FROM categories WHERE id = ?";
    const [oldCategory] = await pool.query(selectCategoryQuery, [id]);

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

    await logHistory({
      type: "BOARD_UPDATE",
      action: "CATEGORY UPDATED",
      details: {
        category_id: id,
        oldData: {
          ...oldCategory[0],
        },
        newData: {
          category_name: name,
          user_id,
          order,
        },
      },
      user_id,
    });
    return { success: true, message: "Update Category was successfully" };
  } catch (error) {
    return { success: false, message: "Failed to update category" };
  }
};

export const deleteCategory = async (id) => {
  try {
    const selectCategoryQuery = "SELECT * FROM categories WHERE id = ?";
    const [oldCategory] = await pool.query(selectCategoryQuery, [id]);
    const { name, order, user_id } = oldCategory[0];
    const deleteQuery = `DELETE FROM categories WHERE id=?`;

    await pool.query(deleteQuery, [id]);

    await logHistory({
      type: "BOARD_UPDATE",
      action: "CATEGORY DELETED",
      details: {
        category_id: id,
        category_name: name,
        order,
        user_id,
      },
      user_id,
    });

    return { success: true, message: "Category deleted successfully" };
  } catch (error) {
    throw new Error();
  }
};
