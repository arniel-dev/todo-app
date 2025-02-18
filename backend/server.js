import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { checkConnection } from "./config/db.js";
import { createAllTable, insertDefaultValues } from "./utils/dbUtils.js";
import { createDatabase } from "./config/createDatabase.js";
import taskRoutes from "./routes/taskRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
config();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type",
  credentials: false,
};

app.use(cors(corsOptions));
app.use(json());

app.use("/api", taskRoutes);
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await createDatabase();
    await checkConnection();
    await createAllTable();
    await insertDefaultValues();
  } catch (error) {
    console.log("fail connection mysql DB", error);
  }
});
