import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Blog from "../pages/Blog";

function routes() {
	return (
		<Routes>
			<Route path="/BlogProject/" element={<Home />} />
			<Route path="/BlogProject/about" element={<About />} />
			<Route path="/BlogProject/topic" element={<Category />} />
			<Route path="/BlogProject/topic/:slug" element={<Blog />} />
		</Routes>
	);
}

export default routes;
