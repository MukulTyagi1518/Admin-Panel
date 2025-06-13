// components/ProtectedLayout.js
import { Outlet, Navigate } from "react-router-dom";

const ProtectedLayout = () => {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;