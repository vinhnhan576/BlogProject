import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { authenticateUserAsync } from "../features/account/accountSlice";
import { createNewAccountAsync } from "../features/account/accountSlice";
import { Link } from "react-router-dom";

import loginImage01 from "../assets/image/login/login-image-01.png";
import loginImage02 from "../assets/image/login/signup-image.jpg";
import logo from "../assets/image/login/login-logo.png";

const Login = () => {
	const dispatch = useDispatch();

	const initialAccountState = {
		name: "",
		alias: "",
		gender: true,
		date: "",
		tel: "",
		job: "",
		address: "",
		email: "",
		profilepic: "",
		username: "",
		password: "",
	};

	const [account, setAccount] = useState(initialAccountState);

	const handleChange = (input) => (event) => {
		setAccount({ ...account, [input]: event.target.value });
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		console.log("form submitted");
		dispatch(createNewAccountAsync({ account }));
	};

	return (
		<div className="login">
			<div className="login__image signup">
				<img src={loginImage01} alt="" />
			</div>
			{/* <div className="login__image login__image__after signup">
				<img src={loginImage02} alt="" />
			</div> */}
			<form className="login__form" onSubmit={handleSignUp}>
				<div className="login__form__item">
					<div className="login__form__item__whole__small__title">
						<div className="login__form__item__small__title">
							<div className="login__form__item__title"> Họ</div>
							<input
								type="text"
								name="username"
								id="username"
								onChange={handleChange("username")}
								placeholder={"Cẩm".toString()}
							/>{" "}
						</div>
						<div className="login__form__item__small__title">
							<div className="login__form__item__title"> Tên</div>
							<input
								type="text"
								name="username"
								id="username"
								onChange={handleChange("username")}
								placeholder={"Sục".toString()}
							/>
						</div>
					</div>
				</div>
				<div className="login__form__item">
					<div className="login__form__item__title">Tên tài khoản </div>
					<input
						type="text"
						name="username"
						id="username"
						onChange={handleChange("username")}
						placeholder={"huongleehere".toString()}
					/>{" "}
				</div>

				<div className="login__form__item">
					<div className="login__form__item__title">Mật khẩu</div>
					<input
						type="password"
						name="password"
						id="password"
						onChange={handleChange("password")}
						placeholder={"Abc_123456".toString()}
					/>
				</div>
				<div className="login__form__item">
					<div className="login__form__item__title">Gmail </div>
					<input
						type="text"
						name="email"
						id="email"
						onChange={handleChange("email")}
						placeholder={"Bloggit@gmail.com".toString()}
					/>
				</div>
				<div className="login__form__item">
					<div className="login__form__item__title">Số điện thoại </div>
					<input
						type="text"
						name="tel"
						id="tel"
						onChange={handleChange("tel")}
						placeholder={"0123456789".toString()}
					/>
				</div>
				<div className="login__form__item">
					<div className="login__form__item__title">Ngày sinh </div>
					<input
						type="text"
						name="date"
						id="date"
						onChange={handleChange("date")}
						placeholder={"02/11/2002".toString()}
					/>
				</div>
				<div className="login__form__item">
					<div className="login__form__item__title">Địa chỉ </div>
					<input
						type="text"
						name="location"
						id="location"
						onChange={handleChange("location")}
						placeholder={"ex: Thủy Phương, Hương Thủy".toString()}
					/>
				</div>

				<div className="login__form__item">
					<div className="login__form__item__title"> Nghề nghiệp </div>
					<input
						type="text"
						name="job"
						id="job"
						onChange={handleChange("job")}
						placeholder={"Má thiên hạ".toString()}
					/>
				</div>
				<button type="submit" className="login__form__button">
					Đăng ký
				</button>
			</form>
		</div>
	);
};

export default Login;
