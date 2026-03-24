import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Layouts from "../Layouts/Layouts";

 const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children:[
        {
            path: '/',
            Component: Home
        }
    ]
  },
]);
export default router