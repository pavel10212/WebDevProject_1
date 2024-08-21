import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Landing from "../Landing.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Cars from "../components/Cars.jsx";
import HighlighedCars from "../components/HighlighedCars.jsx";
import Statistics from "../components/Statistics.jsx";

const routes = [
  {
    path: "/WebDevProject_1",
    element: <Landing />,
  },
  {
    path: "/WebDevProject_1",
    element: <App />,
    children: [
      {
        path: "/WebDevProject_1/dashboard",
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
