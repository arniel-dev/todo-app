import { Router } from "express";
const router = Router();
import {
  retrieveCategories,
  createCategory,
  updateCategoriesOrder,
} from "../controllers/categoryController.js";

router.get("/categories", retrieveCategories);
router.post("/category", createCategory);
router.put("/categories/:id/order", updateCategoriesOrder);

export default router;
