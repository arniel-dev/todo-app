import { pool } from "../config/db.js";

const createTaskTableQuery = `CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255) NOT NULL,
    priority VARCHAR(255) NOT NULL,
    expiryDate DATETIME NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

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

export const createAllTable = async () => {
  try {
    await createTable("tasks", createTaskTableQuery);
    await createTable("categories", createCategoriesQuery);
    console.log(`all tables created successfully.`);
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
};

export const insertDefaultValues = async () => {
  try {
    const [row] = await pool.query("SELECT * FROM categories");
    if (row.length === 0) {
      await pool.query(
        `INSERT INTO categories (name) VALUES 
        ("Todo"),
        ("In Progress"),
        ("Done")`
      );
    }
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
};
