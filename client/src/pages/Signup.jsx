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
        <div className="login__form__item">
          <div className="login__form__item">
            <div className="login__form__item__title">Full name </div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange("username")}
              placeholder={"Cẩm Lan Sục".toString()}
            />
          </div>
          <div className="login__form__item__title">Gmail</div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"bloggit@gmail.com".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Phone number </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"0123456789".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Job </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"Má thiên hạ".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Address </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"ex: Thủy Phương, Hương Thủy".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Date of birth </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"Nhập đây nè má".toString()}
          />
        </div>

        <div className="login__form__item">
          <div className="login__form__item__title"> Account </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"Nhập đây nè má".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Password</div>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange("password")}
            placeholder={"Nhập đây nè má".toString()}
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
