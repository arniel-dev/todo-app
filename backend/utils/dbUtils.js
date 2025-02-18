import { pool } from "../config/db.js";

const createTaskTableQuery = `CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category ENUM('To Do', 'In Progress', 'Done') DEFAULT 'To Do',
    priority ENUM('Low', 'Medium', 'High') DEFAULT 'Medium',
    expiryDate DATETIME NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);;`;

const createCategoriesQuery = `CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createTable = async (tableName, query) => {
  try {
    await pool.query(query);
    console.log(`table ${tableName} was successfully created.`);
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
};

const createAllTable = async () => {
  try {
    await createTable("tasks", createTaskTableQuery);
    await createTable("categories", createCategoriesQuery);
    console.log(`all tables created successfully.`);
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
};

export default createAllTable;
