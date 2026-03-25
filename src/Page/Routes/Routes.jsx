import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Layouts from "../Layouts/Layouts";
import Errorpage from "../ErrorPage/Errorpage";

 const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <Errorpage></Errorpage>,
    children:[
        {   index: true,
           
            Component: Home
        }
    ]
  },
]);
export default router