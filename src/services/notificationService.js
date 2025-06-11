// src/services/notificationService.js
import axios from "axios";

export const notificationService = {
  sendCustomNotification: async (payload) => {
    try {
      const response = await axios.post(
        "https://e-commerce-backend-1-0.onrender.com/api/customnotification",
        payload
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || error.message;
    }
  },

  getCustomNotification: async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-backend-1-0.onrender.com/api/customnotification"
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || error.message;
    }
  },

  getCustomNotificationById: async (id) => {
    try {
      const response = await axios.get(
        `https://e-commerce-backend-1-0.onrender.com/api/customnotification/${id}`
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || error.message;
    }
  },
};