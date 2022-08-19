import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { authenticateUserAsync } from "../features/account/accountSlice";
import { Link } from "react-router-dom";

import loginImage01 from "../assets/image/login/login-image-01.png";
import logo from "../assets/image/login/login-logo.png";

const Login = () => {
  const dispatch = useDispatch();

  const initialUserState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleChange = (input) => (event) => {
    setUser({ ...user, [input]: event.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("form submitted");

    dispatch(
      authenticateUserAsync({
        username: user.username,
        password: user.password,
      })
    );
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
		<Link to='signup'>
        <button type="submit" className="login__form__button">
          đăng ký
        </button>
		</Link>
      </form>

    </div>
  );
};

export default Login;
