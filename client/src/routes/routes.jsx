import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Blog from "../pages/Blog";

function routes() {
	return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/topic" element={<Category />} />
      <Route path="/topic/params/:slug" element={<Category/>} />
      <Route path="/topic/:slug" element={<Blog />} />
    </Routes>
  );
=======
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/topic" element={<Category />} />
			<Route path="/blog/:slug" element={<Blog />} />
		</Routes>
	);
>>>>>>> 91c8cc2a00c859c8d7c99f24833d7eec099f63c0
}

export default routes;
