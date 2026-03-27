import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Layouts from "../Layouts/Layouts";
import Errorpage from "../ErrorPage/Errorpage";
import Product from "../Product/Product";
import WishList from "../WishList/WishList";
import AllProducts from "../AllProducts/AllProducts";
import ProductDetails from "../ProductDetails/ProductDetails";

 const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <Errorpage></Errorpage>,
    hydrateFallbackElement: <p>Loading....</p>,
    children:[
        {   index: true,
           loader: ()=> fetch(`furnitureData.json`),
            Component: Home
        },
        {
          path: '/products',
          element: <Product></Product>
        },
        {
          path: `/allProducts`,
          Component: AllProducts
        },
        {
          path: `/wishList`,
          Component: WishList
        },
        {
          path: `/product/:id`,
          element: <ProductDetails></ProductDetails>
        }
    ]
  },
]);
export default router