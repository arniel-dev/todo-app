import { Router } from "express";
const router = Router();
import { registerUser, retrieveUser } from "../controllers/userController.js";

router.post("/register", registerUser);
router.get("/user", retrieveUser);

export default router;
