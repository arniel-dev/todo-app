import { Router } from "express";
const router = Router();
import { retrieveHistory } from "../controllers/historyController.js";

router.get("/histories/:id", retrieveHistory);

export default router;
