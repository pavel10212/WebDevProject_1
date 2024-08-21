import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Landing from "../Landing.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Cars from "../components/Cars.jsx";
import HighlighedCars from "../components/HighlighedCars.jsx";
import Statistics from "../components/Statistics.jsx";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "highlightedCars",
        element: <HighlighedCars />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
