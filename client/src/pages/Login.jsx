import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authenticateUserAsync } from "../features/account/accountSlice";
import { getUserByUsernameAsync } from "../features/user/userSlice";
import { selectUser } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

import loginImage01 from "../assets/image/login/login-image-01.png";
import logo from "../assets/image/login/login-logo.png";
import { unwrapResult } from "@reduxjs/toolkit";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	const initialUserState = {
		username: "",
		password: "",
	};

	const [account, setAccount] = useState(initialUserState);

	const handleChange = (input) => (event) => {
		setAccount({ ...account, [input]: event.target.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		console.log("form submitted");
		dispatch(
			authenticateUserAsync({
				username: account.username,
				password: account.password,
			})
		);
		const result = await dispatch(
			getUserByUsernameAsync({
				username: account.username,
			})
		);
		const originalPromiseResult = unwrapResult(result);
		navigate(`/${originalPromiseResult.tasks.alias}`);
	};

	return (
		<div className="login">
			<div className="login__image">
				<img src={loginImage01} alt="" />
			</div>
			<form className="login__form" onSubmit={handleLogin}>
				<div className="login__logo">
					<img src={logo} alt="" />
				</div>
				<div className="login__form__item">
					<div className="login__form__item__title">tài khoản</div>
					<input
						type="text"
						name="username"
						id="username"
						onChange={handleChange("username")}
					/>
				</div>
				<div className="login__form__item">
					<div className="login__form__item__title">mật khẩu</div>
					<input
						type="password"
						name="password"
						id="password"
						onChange={handleChange("password")}
					/>
				</div>
				<button type="submit" className="login__form__button">
					đăng nhập
				</button>
				<Link to="signup">
					<button type="submit" className="login__form__button">
						đăng ký
					</button>
				</Link>
			</form>
		</div>
	);
};

export default Login;