import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authenticateUserAsync } from "../features/account/accountSlice";
import { getUserByUsernameAsync } from "../features/user/userSlice";
import { selectUser } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

import loginImage01 from "../assets/image/login/login-image-01.png";
import logo from "../assets/image/login/login-logo.png";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	console.log(user);

	const initialUserState = {
		username: "",
		password: "",
	};

	const [account, setAccount] = useState(initialUserState);

	const handleChange = (input) => (event) => {
		setAccount({ ...account, [input]: event.target.value });
	};

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("form submitted");

		Promise.all([
			dispatch(
				authenticateUserAsync({
					username: account.username,
					password: account.password,
				})
			),
			dispatch(
				getUserByUsernameAsync({
					username: account.username,
				})
			),
		]).then(() => {
			console.log(user);
			navigate(`/${user.alias}`);
		});

		console.log(user.alias);
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
