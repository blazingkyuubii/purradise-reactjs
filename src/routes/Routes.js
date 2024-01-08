//react imports
import React from 'react'

//router imports
import { createBrowserRouter } from "react-router-dom";

//page imports
import Home from "../pages/Home/Home";
import ProductsAccessories from "../pages/Products/ProductsAccessories";
import ProductsFood from "../pages/Products/ProductsFood";
import ProductsLitter from "../pages/Products/ProductsLitter"
import ProductsToys from "../pages/Products/ProductsToys";
import ProductsVitamins from "../pages/Products/ProductsVitamins";
import ProductView from "../pages/Product-View/ProductView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/accessories",
    element: <ProductsAccessories />,
  },
  {
    path: "/foods",
    element: <ProductsFood />,
  },
  {
    path: "/litters",
    element: <ProductsLitter />,
  },
  {
    path: "/toys",
    element: <ProductsToys />,
  },
  {
    path: "/vitamins",
    element: <ProductsVitamins />,
  },
  {
    path: "/product/:productId",
    element: <ProductView/>
  }
]);


