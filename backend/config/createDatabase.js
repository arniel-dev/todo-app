import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
// Database connection configuration
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

// Create database if it doesn't exist
const createDatabase = async () => {
  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS todo_db`);
    console.log("Database 'todo_db' created successfully.");
  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    await connection.end();
  }
};

export { createDatabase };
