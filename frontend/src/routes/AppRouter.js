import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Component/SignUp";
import PrivateComponent from "../Component/PrivateComponent";
import Login from "../Component/Login";
import AddProduct from "../Component/AddProduct";
import ProductList from "../Component/ProductList";
import UpdateComponent from "../Component/UpdateComponent";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateComponent />} />
          <Route path="/logout" element={<h1>Logout Listing Component</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
