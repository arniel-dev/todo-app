import { createUser, getUser } from "../services/authService.js";

export const registerUser = async (req, res) => {
  try {
    const { firebase_uid, email } = req.body;

    if (!firebase_uid || !email) {
      return res
        .status(400)
        .json({ error: "(email and firebase_uid are required" });
    }
    const response = await createUser(firebase_uid, email);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Register user failed. Please try again later.",
    });
  }
};

export const retrieveUser = async (req, res) => {
  try {
    const { firebase_uid } = req.query;
    const response = await getUser(firebase_uid);
    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Retriving user failed. Please try again later.",
    });
  }
};
