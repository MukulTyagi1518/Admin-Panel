// src/services/customAlertService.js
import axios from "axios";

const CustomAlertService = {
  // Get all custom alerts
  getAllAlerts: async () => {
    try {
      const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/custom-alert");
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch alerts"
      );
    }
  },

  // Get a single alert by ID
  getAlertById: async (id) => {
    try {
      const response = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/custom-alert/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch alert");
    }
  },

  // Create a new alert
  createAlert: async (alertData) => {
    try {
      const formData = new FormData();

      // Append all fields to formData
      Object.keys(alertData).forEach((key) => {
        if (key === "image" && alertData[key]) {
          formData.append("image", alertData[key]);
        } else if (alertData[key] !== null && alertData[key] !== undefined) {
          formData.append(key, alertData[key]);
        }
      });

      const response = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/custom-alert", formData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to create alert"
      );
    }
  },

  // Update an existing alert
  updateAlert: async (id, alertData) => {
    try {
      const formData = new FormData();

      // Append all fields to formData
      Object.keys(alertData).forEach((key) => {
        if (key === "image" && alertData[key]) {
          formData.append("image", alertData[key]);
        } else if (alertData[key] !== null && alertData[key] !== undefined) {
          formData.append(key, alertData[key]);
        }
      });

      const response = await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/custom-alert/${id}`, formData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to update alert"
      );
    }
  },

  // Delete an alert
  deleteAlert: async (id) => {
    try {
      const response = await axios.delete(`https://e-commerce-backend-1-0.onrender.com/api/custom-alert/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to delete alert"
      );
    }
  },
};

export default CustomAlertService;
