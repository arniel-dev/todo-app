import { Router } from "express";
const router = Router();
import {
  retrieveCategories,
  createCategory,
} from "../controllers/categoryController.js";

router.get("/categories", retrieveCategories);
router.post("/category", createCategory);

export default router;
