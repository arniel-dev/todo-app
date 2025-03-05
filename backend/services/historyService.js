import { pool } from "../config/db.js";

export const logHistory = async (historyEntry) => {
  try {
    const { type, action, details, user_id } = historyEntry;
    const query = `
      INSERT INTO history (type, action, details, user_id)
      VALUES (?, ?, ?, ?)
    `;
    const values = [type, action, JSON.stringify(details), user_id];
    await pool.query(query, values);
    return { success: true, message: "History logged successfully" };
  } catch (error) {
    throw new Error("Failed to log history: " + error.message);
  }
};

export const getHistory = async (
  user_id,
  page = 1,
  limit = 10,
  searchQuery = "",
  filter = "all"
) => {
  try {
    const offset = (page - 1) * limit;

    // Base query
    let query = `
        SELECT 
          history.*, 
          users.display_name
        FROM 
          history 
        LEFT JOIN 
          users 
        ON 
          history.user_id = users.id 
        WHERE 
          history.user_id = ?
    `;

    // Apply filter (ticket or board updates)
    if (filter !== "all") {
      query += ` AND history.type = ?`;
    }

    // Apply search filter
    if (searchQuery) {
      query += ` AND (history.details LIKE ? OR history.action LIKE ?)`;
    }

    query += ` ORDER BY history.timestamp DESC LIMIT ? OFFSET ?;`;

    // Query params
    const params = [user_id];

    if (filter !== "all") params.push(filter);
    if (searchQuery) {
      params.push(`%${searchQuery}%`, `%${searchQuery}%`);
    }
    params.push(limit, offset);

    const [history] = await pool.query(query, params);
    return { success: true, data: history };
  } catch (error) {
    throw new Error("Failed to fetch history: " + error.message);
  }
};
