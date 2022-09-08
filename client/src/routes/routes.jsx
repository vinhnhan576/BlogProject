import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Blog from "../pages/Blog";
import NewBlog from "../pages/NewBlog";

function routes(props) {
  return (
    <Routes>
      <Route path="/" exact element={<Home blogger={props.blogger} />} />
      <Route path="/about" element={<About />} />
      <Route path="/topic/:slug" element={<Category />} />
      <Route path="/blog/:slug" element={<Blog />} />
      <Route
        path="/newBlog"
        element={<NewBlog alias={props.blogger.alias} />}
      />
    </Routes>
  );
}

export default routes;
