import { pool } from "../config/db.js";

export const addTicket = async (task) => {
  try {
    const { title, description, expiry_date, priority, category_id, user_id } =
      task;
    const query = `
    INSERT INTO tickets (title, description, expiry_date, priority, category_id, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
    const values = [
      title,
      description,
      expiry_date,
      priority,
      category_id,
      user_id,
    ];
    await pool.query(query, values);

    return { success: true, message: "Ticket created successfully" };
  } catch (error) {
    throw new Error();
  }
};
export const getTickets = async (user_id) => {
  try {
    const query = `SELECT * FROM tickets WHERE user_id = ?`;

    const [Tickets] = await pool.query(query, [user_id]);

    return { success: true, data: Tickets };
  } catch (error) {
    throw new Error();
  }
};
export const deleteTicket = async (id) => {
  try {
    const query = `DELETE FROM tickets WHERE id=?`;

    await pool.query(query, [id]);

    return { success: true, message: "Ticket deleted successfully" };
  } catch (error) {
    throw new Error();
  }
};
export const updateTicket = async (id, task) => {
  try {
    const { title, description, expiry_date, priority, category_id } = task;

    const updateQuery = `UPDATE tickets
      SET title = ?, description = ?, expiry_date = ?, priority = ?, category_id = ?
      WHERE id = ?`;

    const formattedExpiryDate = new Date(expiry_date)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const values = [
      title,
      description,
      formattedExpiryDate,
      priority,
      category_id,
      id,
    ];

    await pool.query(updateQuery, values);

    return { success: true, message: "Ticket update successfully" };
  } catch (error) {
    throw new Error(error);
  }
};
