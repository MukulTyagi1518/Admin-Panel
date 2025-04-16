// src/services/notificationService.js
import apiInstance from "../utils/axios";

export const notificationService = {
  sendCustomNotification: async (payload) => {
    try {
      const response = await apiInstance.post(
        "/customnotification",
        payload
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || error.message;
    }
  },

  getCustomNotification: async () => {
    try {
      const response = await apiInstance.get(
        "/customnotification"
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || error.message;
    }
  },

  getCustomNotificationById: async (id) => {
    try {
      const response = await apiInstance.get(
        `/customnotification/${id}`
      );
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || error.message;
    }
  },
};