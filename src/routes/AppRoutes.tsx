import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { publicRoutes, privateRoutes } from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "@/layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map((route, i) => {
          const Component = route.element;
          return <Route key={i} path={route.path} element={<Component />} />;
        })}

        {/* Private Routes with Layout */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {privateRoutes.map((route, i) => {
            const Component = route.element;
            return (
              <Route key={i} path={route.path} element={<Component />} />
            );
          })}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;