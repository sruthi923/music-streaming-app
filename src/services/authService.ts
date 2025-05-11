import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Your backend URL

// Register function
export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
    });
    return response; // Return the response from the backend
  } catch (error: any) {
    throw error; // Handle the error in the component (as done in your form)
  }
};

// Login function (if needed in the future)
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    // Assuming the token is in response.data.token
    return response.data; // Return the data (token, user info, etc.)
  } catch (error: any) {
    throw error; // Handle the error in the component
  }
};
