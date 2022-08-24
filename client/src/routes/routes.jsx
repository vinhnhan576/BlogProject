import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Blog from "../pages/Blog";

function routes(props) {
	console.log(props.blogger);
	return (
		<Routes>
			<Route path="/" exact element={<Home blogger={props.blogger} />} />
			<Route path="/about" element={<About />} />
			<Route path="/topic/:slug" element={<Category />} />
			<Route path="/blog/:slug" element={<Blog />} />
		</Routes>
	);
}

export default routes;
