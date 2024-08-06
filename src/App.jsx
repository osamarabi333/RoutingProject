import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import NotFound from "./Components/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
