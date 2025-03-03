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

export const updateTicket = async ({ id, ticket }) => {
  try {
    const response = await axios.put(`api/ticket/${id}`, ticket);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTicket = async (id) => {
  try {
    const response = await axios.delete(`api/ticket/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createCategory = async ({ category, userId }) => {
  try {
    const response = await axios.post("http://localhost:5000/api/category", {
      ...category,
      user_id: userId,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const updateCategory = async ({ categoryId, order, name }) => {
  try {
    const response = await axios.put(`api/category/${categoryId}`, {
      order,
      name,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`api/category/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchHistories = async (userId) => {
  try {
    const response = await axios.get(`api/histories/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
