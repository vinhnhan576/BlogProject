import React, { useRef, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccount } from "../features/account/accountSlice";

import Banner from "../assets/image/banner/banner.png";
import pfp from "../assets/image/user/pfp.jpg";
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
		path: "/topic",
	},
];

function Header() {
	const params = useParams();
	const pathName = useLocation().pathname;
	const activeNav = mainNav.findIndex(
		(e) => `/${params.alias}`.concat(e.path) === pathName
	);

	const headerRef = useRef(null);
	const logoRef = useRef(null);
	const containerRef = useRef(null);

	const account = useSelector(selectAccount);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add("shrink");
				logoRef.current.classList.add("shrink");
				containerRef.current.classList.add("shrink");
			} else {
				headerRef.current.classList.remove("shrink");
				logoRef.current.classList.remove("shrink");
				containerRef.current.classList.remove("shrink");
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
			<div className="container" ref={containerRef}>
				<div className="header__logo" ref={logoRef}>
					<Link to="/BlogProject/">
						<p>Huong Le Blog</p>
					</Link>
				</div>
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
								onClick={menuToggle}
								key={index}
								className={`header__menu__left__item header__menu__item ${
									activeNav === index ? "active" : ""
								}`}>
								<Link to={`/${params.alias}${item.path}`}>{item.display}</Link>
							</div>
						))}
					</div>
					<div className="header__menu__right">
						<div className="header__menu__right__item header__menu__item">
							<i className="bx bx-search"></i>
							<i className="bx bx-wrench"></i>
							<i className="bx bx-bell"></i>
						</div>
						{account ? (
							<div className="header__menu__right__pfp">
								<img src={pfp} alt="" />
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
