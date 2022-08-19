import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";



import Layout from "./Layout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { selectAccount } from "../features/account/accountSlice";

const App = () => {
	const account = useSelector(selectAccount);

	return (
		<div className="App">
			{account ? (
				<Layout />
			) : (
				<HashRouter>
					<Routes>
						<Route path="/signup" element={<Signup />} />
						<Route path="/" element={<Login />} />
					</Routes>
				</HashRouter>
			)}
		</div>
	);
};

export default App;
