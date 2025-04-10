import apiInstance from "../utils/axios";

const DeliveryPartnerService = {
  // Register a new delivery partner
  register: async (formData) => {
    try {
      const response = await apiInstance.post(
        "/delivery-partner/register",
        formData
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get all delivery partners
  getAll: async () => { 
    try {
      const response = await apiInstance.get("/delivery-partner/");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get pending delivery partners
  getPending: async () => {
    try {
      const response = await apiInstance.get("/delivery-partner/pending");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get a single delivery partner by ID
  getById: async (id) => {
    try {
      const response = await apiInstance.get(`/delivery-partner/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
 
  // Update a delivery partner
  update: async (id, updates) => {
    try {
      const response = await apiInstance.put(
        `/delivery-partner/${id}`,
        updates
      );
      return response.data;
    } catch (error) {
      // Enhanced error logging
      console.error("Update Error Details:", {
        url: error.config?.url,
        method: error.config?.method,
        data: error.config?.data,
        status: error.response?.status,
        response: error.response?.data,
      });

      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to update delivery partner";

      throw new Error(errorMessage);
    }
  },
  // Delete a delivery partner
  delete: async (id) => {
    try {
      const response = await apiInstance.delete(`/delivery-partner/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Approve a delivery partner
  approve: async (id) => {
    try {
      const response = await apiInstance.put(`/delivery-partner/approve/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Reject a delivery partner
  reject: async (id) => {
    try {
      const response = await apiInstance.put(`/delivery-partner/reject/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default DeliveryPartnerService;
