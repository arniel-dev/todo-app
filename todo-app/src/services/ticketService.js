import axiosPrivate from "../api/useAxiosPrivate";
const axios = axiosPrivate();
export const fetchCategories = async (userId) => {
  try {
    const response = await axios.get(`api/categories?user_id=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchTickets = async (userId) => {
  try {
    const response = await axios.get(`api/tickets?user_id=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createTicket = async (ticket) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/ticket",
      ticket
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const handleTicketUpdate = async (ticketId, ticket) => {
  try {
    const response = await axios.put(`api/ticket/${ticketId}`, ticket);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const updateTicket = async ({ id, ticket }) => {
  try {
    const response = await axios.put(`api/ticket/${id}`, ticket);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCategoryOrder = async ({ categoryId, order }) => {
  try {
    const response = await axios.put(`api/categories/${categoryId}/order`, {
      order,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
