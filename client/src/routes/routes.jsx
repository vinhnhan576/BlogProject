import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Blog from "../pages/Blog";

function routes() {
	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/topic" element={<Category />} />
			<Route path="/blog/:slug" element={<Blog />} />
		</Routes>
	);
}

export default routes;
