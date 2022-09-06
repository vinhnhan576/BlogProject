import React, { useRef, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount } from "../features/account/accountSlice";
import DropdownMenu from "./DropdownMenu";
import SettingsMenu from "./SettingsMenu";

import pfp from "../assets/image/user/huonglehere.jpg";
import { useState } from "react";
import { getAllTopicsByUserIDAsync } from "../features/topic/topicSlice";
import { getBloggerByAliasAsync } from "../features/user/bloggerSlice";
import { getBlogBySlugAsync } from "../features/post/blogSlice";
import { getAllTopicBySlugAsync } from "../features/topic/topicSlice";
const mainNav = [
	{
		display: "TRANG CHỦ",
		path: "/",
	},
	{
		display: "TỚ LÀ?",
		path: "/about",
	},
	// {
	// 	display: "CHỦ ĐỀ",
	// 	path: "/",
	// },
];

const settings = [
	{
		name: "Đăng xuất",
		slug: "/",
	},
];

function Header(props) {
	const params = useParams();
	const pathName = useLocation().pathname;
	var activeNav = mainNav.findIndex(
		(e) => `/${params.alias}`.concat(e.path) === pathName
	);

	var currentTopic;
	const slug = useRef(params["*"].split("/")[1]);
	console.log(slug);
	const dispatch = useDispatch();
	const blog = useSelector((state) => state.blog);
	const topic = useSelector((state) => state.topic);
	useEffect(() => {
		if (typeof slug !== "object") {
			dispatch(getAllTopicBySlugAsync(slug.current));
			dispatch(getBlogBySlugAsync(slug.current));
		}
	}, [dispatch, slug]);
	const slugType = params["*"].split("/")[0];
	switch (slugType) {
		case "topic":
			if (topic)
				if (!Array.isArray(topic) && typeof topic !== "string") {
					currentTopic = topic.topicName.toUpperCase();
				}
			break;
		case "blog":
			if (blog)
				if (!Array.isArray(blog) && typeof blog !== "string") {
					currentTopic = blog.Topic.topicName.toUpperCase();
				}
			break;
		default:
			break;
	}

	currentTopic && (activeNav = 2);

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

	const [openTopics, setOpenTopics] = useState(false);

	const [openSettings, setOpenSettings] = useState(false);

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
						<div
							onClick={() => {
								// menuToggle();
								setOpenTopics(!openTopics);
							}}
							className={`header__menu__left__item header__menu__item ${
								activeNav === 2 ? "active" : ""
							}`}>
							{params["*"].includes("topic") || params["*"].includes("blog")
								? currentTopic
								: "CHỦ ĐỀ"}
							{openTopics && (
								<DropdownMenu blogger={props.blogger} onclick={menuToggle} />
							)}
						</div>
					</div>
					<div className="header__menu__right">
						<div className="header__menu__right__item header__menu__item">
							<i className="bx bx-search"></i>
							<i className="bx bx-wrench"></i>
							<i className="bx bx-bell"></i>
						</div>
						{account ? (
							<div
								className="header__menu__right__pfp"
								onClick={() => setOpenSettings(!openSettings)}>
								<img src={pfp} alt="" />
								{openSettings && (
									<SettingsMenu
										alias={props.blogger.alias}
										settings={settings}
									/>
								)}
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
