import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Ensure this import is present
import { AdminProvider } from "./adminContext";
import reportWebVitals from "./reportWebVitals";
import ProductProvider from "./productContex";
import CategoryProvider from "./categoryContext";
import CustomerProvider from "./context/customerContext";
import { EmailTemplateProvider } from "./context/EmailTemplateContext";
import OrdersProvider from "./context/ordersContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AdminProvider>
    <ProductProvider>
      <OrdersProvider>
        <CategoryProvider>
          <EmailTemplateProvider>
            <CustomerProvider>
              <React.StrictMode>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </React.StrictMode>
            </CustomerProvider>
          </EmailTemplateProvider>
        </CategoryProvider>
      </OrdersProvider>
    </ProductProvider>
  </AdminProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
