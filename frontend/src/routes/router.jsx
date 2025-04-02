import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
//Agregar una pagina
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Closet from "../pages/Closet";
import Marketplace from "../pages/Marketplace";
import Mix from "../pages/Mix"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout envuelve las páginas
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {path: "/closet", element: <Closet/>},
      {path: "/marketplace", element: <Marketplace/>},
      {path: "/mix", element: <Mix /> },
    ],
  },
]);

export default router;
