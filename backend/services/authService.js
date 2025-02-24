import { pool } from "../config/db.js";

export const createUser = async (firebase_uid, email) => {
  try {
    const checkQuery =
      "SELECT * FROM users WHERE firebase_uid = ? OR email = ?";

    const [existingUser] = await pool.query(checkQuery, [firebase_uid, email]);

    if (existingUser.length > 0) {
      return { success: false, message: "User already exists" };
    }

    const insertQuery = "INSERT INTO users (firebase_uid, email) VALUES (?, ?)";

    await pool.query(insertQuery, [firebase_uid, email]);

    return { success: true, message: "User created successfully" };
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async (firebase_uid) => {
  try {
    const query = "SELECT * FROM users WHERE firebase_uid = ?";
    const [user] = await pool.query(query, [firebase_uid]);
    return { success: true, data: { user: user[0] } };
  } catch (error) {
    throw new Error(error.message);
  }
};
