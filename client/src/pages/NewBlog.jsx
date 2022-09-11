import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import namingBlogSlug from "../utils/namingSlugs";
import { createNewBlogAsync } from "../features/post/blogSlice";
import { createNewTopic } from "../features/topic/topicSlice";
import Helmet from "../components/Helmet";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";

const NewBlog = ({ alias, blogger }) => {
	const textareaRef = useRef();
	const imageRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const initialBlogState = {
		title: "",
		content: "",
		quote: "",
		date: new Date().toLocaleDateString(),
		location: "",
		slug: "",
		topicID: "",
		coverImg: "huonglehere_doi-song_danh-bai.jpg",
	};

	const [newBlog, setNewBlog] = useState(initialBlogState);

	const handleChange = (input) => (event) => {
		setNewBlog({ ...newBlog, [input]: event.target.value });
	};

	const handleTitleChange = () => (event) => {
		setNewBlog({
			...newBlog,
			["title"]: event.target.value,
			["slug"]: namingBlogSlug(event.target.value),
		});
	};

	// const [image, setImage] = useState();

	const readImage = (e) => {
		const image = e.target.files[0];
		console.log(image);
	};

	const imageUploadHandler = (e) => {};

	const [topic, setTopic] = useState({
		topicName: "",
		slug: "",
		quote: "",
		img: "",
		userID: blogger.id,
	});

	const handleNewBlog = async (e) => {
		e.preventDefault();
		if (newBlog.topicID === 0) {
			// console.log(topic);
			const res = await dispatch(createNewTopic({ topic: topic }));
			const result = unwrapResult(res);
			newBlog.topicID = result.tasks;
			console.log(newBlog);
		}
		// dispatch(createNewBlogAsync({ blogReqData: newBlog }));
		// navigate(`/${alias}/`);
	};

	function TopicMenu({ topics }) {
		const [newTopic, setNewTopic] = useState("Chủ đề mới");

		const onTopicClick = () => {
			var option = document.getElementById("topic").value;
			if (option === "0") {
				const input = prompt("Nhập chủ đề mới");
				setNewTopic(input);
				topic.topicName = input;
				topic.slug = namingBlogSlug(input);
				newBlog.topicID = 0;
			} else {
				newBlog.topicID = option;
				setNewTopic("Chủ đề mới");
			}
		};

		return (
			<div className="select">
				<select name="topic" id="topic" onChange={onTopicClick}>
					{topics?.map((topic, index) => {
						return (
							<option key={index} value={topic.id}>
								{topic.topicName}
							</option>
						);
					})}
					<option value="0">{newTopic}</option>
				</select>
			</div>
		);
	}

	return (
		<Helmet title="Tạo blog mới">
			<div className="new-blog">
				<form className="new-blog__form" onSubmit={handleNewBlog}>
					<div className="new-blog__form__topic">
						<TopicMenu topics={blogger.Topic}></TopicMenu>
					</div>

					<div className="new-blog__form__container">
						<input
							type="file"
							ref={imageRef}
							onChange={readImage}
							className="new-blog__form__image"
						/>
						<input
							type="text"
							name="quote"
							onChange={handleChange("quote")}
							className="new-blog__form__quote"
							placeholder="Châm ngôn"
						/>
						<input
							type="text"
							name="location"
							className="new-blog__form__place"
							placeholder="Địa điểm"
							onChange={handleChange("location")}
						/>
						<input
							type="text"
							name="title"
							className="new-blog__form__title"
							placeholder="Tiêu đề"
							onChange={handleTitleChange()}
						/>
						<textarea
							type="text"
							name="content"
							className="new-blog__form__body"
							placeholder="Nội dung"
							ref={textareaRef}
							onChange={handleChange("content")}
							onKeyUp={(e) => {
								textareaRef.current.style.height = "200px";
								let height = e.target.scrollHeight;
								if (height > 200) {
									// textareaRef.current.style.height = "auto";
									textareaRef.current.style.height = `${height}px`;
								}
							}}></textarea>
						<input
							type="text"
							className="new-blog__form__signature"
							placeholder="Chữ ký"
						/>
						<button className="new-blog__form__create-button" type="submit">
							Tạo bài viết
						</button>
					</div>
				</form>
			</div>
		</Helmet>
	);
};

export default NewBlog;
