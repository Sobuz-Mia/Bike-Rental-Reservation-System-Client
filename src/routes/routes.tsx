import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.js";
import Login from "../pages/login/Login.js";
import SignUp from "../pages/signUp/SignUp.js";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);
