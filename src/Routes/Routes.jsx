import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import About from "../Pages/About/About";
import NotFound from "../components/Shared/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
]);
