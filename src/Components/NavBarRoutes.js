import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import BlogForm from "../pages/BlogForm";
import Home from "../pages/Home";
const NavBarRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<BlogForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBarRoutes;
