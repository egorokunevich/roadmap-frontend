import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import RoadmapPage from "./pages/RoadmapPage/RoadmapPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
  },
  {
    path: "/crud",
    element: <RoadmapPage />,
  },
]);
