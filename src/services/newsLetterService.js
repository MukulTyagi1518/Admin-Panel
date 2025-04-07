import apiInstance from '../utils/axios';

export const newsletterService = {
  saveNewsletter: async (newsletterData) => {
    try {
      const response = await apiInstance.post('/newsletter', newsletterData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getAllNewsletters: async () => {
    try {
      const response = await apiInstance.get('/newsletter');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getNewsletterById: async (id) => {
    try {
      const response = await apiInstance.get(`/newsletter/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  updateNewsletter: async (id, newsletterData) => {
    try {
      const response = await apiInstance.put(`/newsletter/${id}`, newsletterData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  deleteNewsletter: async (id) => {
    try {
      const response = await apiInstance.delete(`/newsletter/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};