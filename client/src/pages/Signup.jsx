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
          <div className="login__form__item__title">Tên tài khoản </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"huongleehere".toString()}
          />
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
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"Bloggit@gmail.com".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Số điện thoại </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"0123456789".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Ngày sinh </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"02/11/2002".toString()}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title">Địa chỉ </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
            placeholder={"ex: Thủy Phương, Hương Thủy".toString()}
          />
        </div>

        <div className="login__form__item">
          <div className="login__form__item__title"> Nghề nghiệp </div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange("username")}
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
