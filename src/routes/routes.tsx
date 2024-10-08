import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.js";
import Login from "../pages/login/Login.js";
import SignUp from "../pages/signUp/SignUp.js";
import UserDashboardLayout from "../components/layout/UserDashboardLayout.js";
import { UserRoutes } from "./userRoutes.js";
import { AdminRoutes } from "./adminRoutes.js";
import ProtectedRoute from "./ProtectedRoute.js";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserDashboardLayout />,
    children: UserRoutes,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <UserDashboardLayout />
      </ProtectedRoute>
    ),
    children: AdminRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);
