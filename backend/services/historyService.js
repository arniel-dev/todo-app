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

export const getHistory = async (user_id) => {
  try {
    const query = `
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
        ORDER BY 
          history.timestamp DESC;
      `;
    const [history] = await pool.query(query, [user_id]);

    return { success: true, data: history };
  } catch (error) {
    throw new Error("Failed to fetch history: " + error.message);
  }
};
