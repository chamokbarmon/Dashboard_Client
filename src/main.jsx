import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "./Pages/DashboardLayOut/DashboardLayOut.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard.jsx";
import Chart from "./Pages/Dashboard/Chart/Chart.jsx";
import DashboardDetails from "./Pages/Dashboard/Dashboard/DashboardDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayOut />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Users />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
      {
        path: "/productDetails/:productID",
        element: <DashboardDetails></DashboardDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </RouterProvider>
);
