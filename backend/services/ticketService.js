import { pool } from "../config/db.js";
import { logHistory } from "./historyService.js";

export const addTicket = async (task) => {
  try {
    const {
      title,
      description,
      expiry_date,
      priority,
      category_id,
      user_id,
      category_name,
    } = task;
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
    const result = await pool.query(query, values);
    // Log history
    await logHistory({
      type: "TICKET_UPDATE",
      action: "TICKET_CREATED",
      details: {
        ticketId: result.insertId,
        title,
        description,
        expiry_date,
        priority,
        category_id,
        category_name,
      },
      user_id,
    });
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
export const updateTicket = async (id, ticket) => {
  try {
    const { title, description, priority, category_id } = ticket;
    const selectTicketQuery = "SELECT * FROM tickets WHERE id = ?";
    const selectCategoryQuery = "SELECT * FROM categories WHERE id = ?";
    const updateQuery = `UPDATE tickets
    SET title = ?, description = ?, priority = ?, category_id = ?
    WHERE id = ?`;

    const [oldTicket] = await pool.query(selectTicketQuery, [id]);
    const [oldCategory] = await pool.query(selectCategoryQuery, [
      oldTicket[0].category_id,
    ]);
    const [newCategory] = await pool.query(selectCategoryQuery, [category_id]);

    const values = [title, description, priority, category_id, id];

    await pool.query(updateQuery, values);

    // Log history
    await logHistory({
      type: "TICKET_UPDATE",
      action: "TICKET_UPDATED",
      details: {
        ticketId: id,
        oldData: {
          ...oldTicket[0],
          category_name: oldCategory[0].name,
        },
        newData: {
          title,
          description,
          priority,
          category_id,
          category_name: newCategory[0].name,
        },
      },
      user_id: ticket.user_id,
    });

    return { success: true, message: "Ticket update successfully" };
  } catch (error) {
    throw new Error(error);
  }
};
