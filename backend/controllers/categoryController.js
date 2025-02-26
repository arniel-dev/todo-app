import {
  getCategories,
  addCategory,
  reOrderCategory,
} from "../services/categoryService.js";

export const retrieveCategories = async (req, res) => {
  try {
    const { user_id } = req.query;

    const response = await getCategories(user_id);
    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Retriving categories failed. Please try again later.",
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, user_id } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }
    const response = await addCategory(name, user_id);
    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Retriving categories failed. Please try again later.",
    });
  }
};

export const updateCategoriesOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { order } = req.body;
    if (!id && !order) {
      return res.status(400).json({ error: "order & id are required" });
    }

    const response = await reOrderCategory(id, order);

    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "ordering categories failed. Please try again later.",
    });
  }
};
