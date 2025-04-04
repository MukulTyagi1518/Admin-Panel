import { createContext, useContext, useEffect, useState } from "react";
import apiInstance from "../utils/axios";

const EmailTemplateContext = createContext();

export const EmailTemplateProvider = ({ children }) => {
  const [adminTemplates, setAdminTemplates] = useState([]);
  const [sellerTemplates, setSellerTemplates] = useState([]);
  const [customerTemplates, setCustomerTemplates] = useState([]);
  const [commonTemplates, setCommonTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Admin Email Templates
  const fetchAdminTemplates = async () => {
    try {
      const { data } = await apiInstance.get("/adminemail");
      setAdminTemplates(data); 
    } catch (error) {
      console.error("Error fetching admin templates:", error);
    }
  };

  const createAdminTemplate = async (template) => {
    try {
      const { data } = await apiInstance.post("/adminemail", template);
      setAdminTemplates((prev) => [...prev, data]); 
    } catch (error) {
      console.error("Error creating template:", error);
    }
  };

  // Fetch Seller Email Templates
  const fetchSellerTemplates = async () => {
    try {
      const { data } = await apiInstance.get("/seller-templates");
      setSellerTemplates(data); 
    } catch (error) {
      console.error("Error fetching seller templates:", error);
    }
  };

  const createSellerTemplate = async (template) => {
    try {
      const { data } = await apiInstance.post("/seller-templates", template);
      setSellerTemplates((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error creating seller template:", error);
    }
  };

  // Fetch Customer Email Templates
  const fetchCustomerTemplates = async () => {
    try {
      const { data } = await apiInstance.get("/customer-templates");
      setCustomerTemplates(data); 
    } catch (error) {
      console.error("Error fetching customer templates:", error);
    }
  };

  const createCustomerTemplate = async (template) => {
    try {
      const { data } = await apiInstance.post("/customer-templates", template);
      setCustomerTemplates((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error creating customer template:", error);
    }
  };

  // Fetch Common Email Templates
  const fetchCommonTemplates = async () => {
    try {
      const { data } = await apiInstance.get("/common-templates");
      setCommonTemplates(data); 
    } catch (error) {
      console.error("Error fetching common templates:", error);
    }
  };

  const createCommonTemplate = async (template) => {
    try {
      const { data } = await apiInstance.post("/common-templates", template);
      setCommonTemplates((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error creating common template:", error);
    }
  };

  useEffect(() => {
    fetchAdminTemplates();
    fetchSellerTemplates();
    fetchCustomerTemplates();
    fetchCommonTemplates(); 
    setLoading(false);
  }, []);

  return (
    <EmailTemplateContext.Provider
      value={{
        adminTemplates,
        setAdminTemplates,
        sellerTemplates,
        setSellerTemplates,
        customerTemplates,
        setCustomerTemplates,
        commonTemplates,
        setCommonTemplates,
        createAdminTemplate,
        createSellerTemplate,
        createCustomerTemplate,
        createCommonTemplate,
        loading,
        setLoading,
      }}
    >
      {children}
    </EmailTemplateContext.Provider>
  );
};

export const useEmailTemplates = () => {
  return useContext(EmailTemplateContext);
};
