import React from "react";
import { useSelector } from "react-redux";

import Layout from "./Layout";
import Login from "../pages/Login";
import { selectAccount } from "../features/account/accountSlice";

const App = () => {
	const account = useSelector(selectAccount);

	return <div className="App">{account ? <Layout /> : <Login />}</div>;
};

export default App;
