import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token"); // simple auth check
};

const ProtectedRoute = ({ children }: any) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;