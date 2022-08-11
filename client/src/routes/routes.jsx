import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Title from "../pages/Title";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="category" element={<Category />} />
      <Route path="/title" element={<Title />} />
    </Routes>
  );
}

export default routes;
