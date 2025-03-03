import { pool } from "../config/db.js";

const createTicketsTableQuery = `CREATE TABLE IF NOT EXISTS tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  expiry_date DATETIME,
  priority VARCHAR(50),
  category_id INT,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);`;

const createCategoriesQuery = `CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  \`order\` INT,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`;

const createUsersQuery = `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firebase_uid VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createHistoryQuery = `CREATE TABLE IF NOT EXISTS history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('BOARD_UPDATE', 'TICKET_UPDATE') NOT NULL,
  action VARCHAR(50) NOT NULL,
  details JSON NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
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
    await createTable("users", createUsersQuery);
    await createTable("categories", createCategoriesQuery);
    await createTable("tickets", createTicketsTableQuery);
    await createTable("history", createHistoryQuery);

    console.log(`all tables created successfully.`);
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
};
