import {
  getCategories,
  addCategory,
  updateCategoryDetails,
  deleteCategory,
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
    const { name, user_id, order } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }
    const response = await addCategory(name, user_id, order);
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

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { order, name } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    if (!name && !order) {
      return res
        .status(400)
        .json({ error: "At least one field (name or order) is required" });
    }

    const response = await updateCategoryDetails(id, name, order);

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

export const removeCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteCategory(id);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.error("Error in deleting category:", error);
    return res.status(500).json({
      success: false,
      message: "Deleting category failed. Please try again later.",
    });
  }
};
