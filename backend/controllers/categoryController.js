import { getCategories, addCategory } from "../services/categoryService.js";

export const retrieveCategories = async (req, res) => {
  try {
    const response = await getCategories();
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
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }
    const response = await addCategory(name);
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
