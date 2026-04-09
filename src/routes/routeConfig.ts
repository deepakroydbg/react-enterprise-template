import { lazy } from "react";

export const publicRoutes = [
  { path: "/", element: lazy(() => import("@/pages/Home")) },
  { path: "/about", element: lazy(() => import("@/pages/About")) }, // ✅ ADD THIS
  { path: "/login", element: lazy(() => import("@/pages/Login")) },
];

export const privateRoutes = [
  { path: "/dashboard", element: lazy(() => import("@/pages/Dashboard")) },
  { path: "/profile", element: lazy(() => import("@/pages/Profile")) },
];