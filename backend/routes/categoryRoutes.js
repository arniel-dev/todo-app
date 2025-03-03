import { Router } from "express";
const router = Router();
import {
  retrieveCategories,
  createCategory,
  updateCategory,
  removeCategory,
} from "../controllers/categoryController.js";

router.get("/categories", retrieveCategories);
router.post("/category", createCategory);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", removeCategory);
export default router;
