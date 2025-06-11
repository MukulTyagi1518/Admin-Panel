import axios from 'axios';

export const newsletterService = {
  saveNewsletter: async (newsletterData) => {
    try {
      const response = await axios.post('https://e-commerce-backend-1-0.onrender.com/api/newsletter', newsletterData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getAllNewsletters: async () => {
    try {
      const response = await axios.get('https://e-commerce-backend-1-0.onrender.com/api/newsletter');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getNewsletterById: async (id) => {
    try {
      const response = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/newsletter/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  updateNewsletter: async (id, newsletterData) => {
    try {
      const response = await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/newsletter/${id}`, newsletterData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  deleteNewsletter: async (id) => {
    try {
      const response = await axios.delete(`https://e-commerce-backend-1-0.onrender.com/api/newsletter/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};