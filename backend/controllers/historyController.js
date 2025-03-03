import { getHistory } from "../services/historyService.js";

export const retrieveHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getHistory(id);
    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Retriving history failed. Please try again later.",
    });
  }
};
