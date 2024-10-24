import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    // Check if error response exists
    const errorMessage =
      error.response?.data?.error || "Error registering user";
    throw new Error(errorMessage);
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    // Check if error response exists
    const errorMessage = error.response?.data?.error || "Error logging in";
    throw new Error(errorMessage);
  }
};
