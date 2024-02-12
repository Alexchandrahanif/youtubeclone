import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../components/HomePage";
import DetailPage from "../components/DetailPage";
import ChanelPage from "../components/ChanelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:id",
    element: <DetailPage />,
  },
  {
    path: "/:chanel",
    element: <ChanelPage />,
  },
]);

export default router;
