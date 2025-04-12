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

export const generateDefaultCategories = async (userId) => {
  try {
    const response = await axios.get(
      `api/generate-categories?user_id=${userId}`
    );
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
    const response = await axios.post("api/ticket", ticket);
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

export const createCategory = async ({ category, user_id }) => {
  try {
    const response = await axios.post("api/category", {
      ...category,
      user_id: user_id,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const updateCategory = async ({ categoryId, order, name, user_id }) => {
  try {
    const response = await axios.put(`api/category/${categoryId}`, {
      order,
      name,
      user_id,
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

export const fetchHistories = async (
  userId,
  page = 1,
  searchQuery = "",
  filter = "all"
) => {
  try {
    const response = await axios.get(`/api/histories/${userId}`, {
      params: { page, limit: 10, searchQuery, filter },
    });

    return response;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw new Error("Failed to fetch history");
  }
};
