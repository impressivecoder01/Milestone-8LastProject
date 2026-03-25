import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Layouts from "../Layouts/Layouts";
import Errorpage from "../ErrorPage/Errorpage";
import Product from "../Product/Product";
import WishList from "../WishList/WishList";

 const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <Errorpage></Errorpage>,
    children:[
        {   index: true,
           
            Component: Home
        },
        {
          path: '/products',
          Component: Product
        },
        {
          path: `/wishList`,
          Component: WishList
        }
    ]
  },
]);
export default router