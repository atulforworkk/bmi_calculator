import HomePageLayout from "@/layout/homePageLayout/HomePageLayout";
import Contribute from "@/page/contribute/Contribute";
import Home from "@/page/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contribute",
        element: <Contribute />,
      },
    ],
  },

]);

export default router;
