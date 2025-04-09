import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Signup from "./components/component/Signup"
import Login from "./components/component/Login"
import Home from "./components/component/Home"
import AddProduct from "./components/component/AddProduct"
import EditProduct from "./components/component/EditProduct"



const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/add" element={<AddProduct />}></Route>
      <Route path="/edit/:name" element={<EditProduct />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
      <RouterProvider router={route}/>
  </React.StrictMode>
);