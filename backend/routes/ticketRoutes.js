import { Router } from "express";
const router = Router();
import {
  createTicket,
  retrieveTickets,
  removeTicket,
  ticketUpdate,
} from "../controllers/ticketController.js";

router.post("/ticket", createTicket);
router.get("/tickets", retrieveTickets);
router.delete("/ticket/:id", removeTicket);
router.put("/ticket/:id", ticketUpdate);

export default router;
