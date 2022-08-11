import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import searchIcon from "../assets/icon/searchIcon.png";

const mainNav = [
  {
    display: "TRANG CHỦ",
    path: "/",
  },
  {
    display: "TỚ LÀ?",
    path: "/about",
  },
  {
    display: "CHỦ ĐỀ",
    path: "/category",
  },
];

function Header() {
  const pathName = useLocation().pathname;
  const activeNav = mainNav.findIndex((e) => e.path === pathName);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">Huong Le Blog</div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-x"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__left__item header__menu__item ${
                  activeNav === index ? "active" : ""
                }`}>
                <Link to={item.path}>{item.display}</Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__item header__menu__item">
              <i class="bx bx-search-alt-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
