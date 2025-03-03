import { pool } from "../config/db.js";

export const createUser = async (firebase_uid, email, name) => {
  try {
    const checkQuery =
      "SELECT * FROM users WHERE firebase_uid = ? OR email = ?";

    const [existingUser] = await pool.query(checkQuery, [
      firebase_uid,
      email,
      name,
    ]);

    if (existingUser.length > 0) {
      return { success: false, message: "User already exists" };
    }

    const insertQuery =
      "INSERT INTO users (firebase_uid, email, display_name) VALUES (?, ?, ?)";

    await pool.query(insertQuery, [firebase_uid, email, name]);

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
