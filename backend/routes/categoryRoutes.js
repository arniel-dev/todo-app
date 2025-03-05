import { Router } from "express";
const router = Router();
import {
  retrieveCategories,
  createCategory,
  updateCategory,
  removeCategory,
  generateDefaultCategories,
} from "../controllers/categoryController.js";

router.get("/categories", retrieveCategories);
router.get("/generate-categories", generateDefaultCategories);
router.post("/category", createCategory);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", removeCategory);
export default router;
