import TicketModel from "../models/TicketModel.js";
import {
  addTicket,
  getTickets,
  deleteTicket,
  updateTicket,
} from "../services/ticketService.js";

export const createTicket = async (req, res) => {
  const {
    title,
    description,
    expiry_date,
    priority,
    category_id,
    user_id,
    category_name,
  } = req.body;

  // Validate required fields
  if (!title || !category_id || !user_id) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Create ticket instance
  const ticket = new TicketModel({
    title,
    description,
    expiry_date,
    priority,
    category_id,
    user_id,
    category_name,
  });

  try {
    // Create ticket
    const response = await addTicket(ticket);
    if (response.success) {
      return res.status(201).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in create ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Create ticket failed. Please try again later.",
    });
  }
};

export const retrieveTickets = async (req, res) => {
  try {
    const { user_id } = req.query;
    const response = await getTickets(user_id);
    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in retriving tickets:", error);
    return res.status(500).json({
      success: false,
      message: "Retriving ticket failed. Please try again later.",
    });
  }
};
export const removeTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteTicket(id);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in deleting ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Deleting ticket failed. Please try again later.",
    });
  }
};
export const ticketUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, expiry_date, priority, category_id, user_id } =
      req.body;

    const ticket = new TicketModel({
      title,
      description,
      expiry_date,
      priority,
      category_id,
      user_id,
    });

    const response = await updateTicket(id, ticket);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in updating ticket:", error);
    return res.status(500).json({
      success: false,
      message: "Updating ticket failed. Please try again later.",
    });
  }
};
