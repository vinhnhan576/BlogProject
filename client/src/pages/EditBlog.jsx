import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import namingBlogSlug from "../utils/namingSlugs";
import {
  getBlogBySlugAsync,
  createNewBlogAsync,
  updateBlogAsync,
} from "../features/post/blogSlice";
import Helmet from "../components/Helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const EditBlog = ({ alias }) => {
  const textareaRef = useRef();
  const imageRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const slug = params.slug;
  const blogs = useSelector((state) => state.blog);
   const initialBlogState = { ...blogs };
   console.log(initialBlogState);
  useEffect(() => {
    console.log(slug);
    dispatch(getBlogBySlugAsync(slug));
    return () => {
    };
  }, [slug, dispatch]);
  console.log(blogs);
  
  const [newBlog, setNewBlog] = useState(initialBlogState);
  console.log(blogs);
  console.log(newBlog);

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

  const handleNewBlog = (e) => {
    e.preventDefault();
    dispatch(updateBlogAsync({ blogReqData: newBlog }));
    navigate(`/${alias}`);
  };
  console.log(newBlog);

  return (
    <Helmet title="Tạo blog mới">
      <div className="new-blog">
        <form className="new-blog__form" onSubmit={handleNewBlog}>
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
            placeholder="Quote"
            value={newBlog.quote}
          />
          <input
            type="text"
            name="location"
            className="new-blog__form__place"
            placeholder="Địa điểm"
            onChange={handleChange("location")}
            value={newBlog.location}
          />
          <input
            type="text"
            name="title"
            className="new-blog__form__title"
            placeholder="Tiêu đề"
            onChange={handleTitleChange()}
            value={newBlog.title}
          />
          <textarea
            type="text"
            name="content"
            className="new-blog__form__body"
            placeholder="Nội dung"
            ref={textareaRef}
            value={newBlog.content}
            onChange={handleChange("content")}
            onKeyUp={(e) => {
              textareaRef.current.style.height = "200px";
              let height = e.target.scrollHeight;
              if (height > 200) {
                // textareaRef.current.style.height = "auto";
                textareaRef.current.style.height = `${height}px`;
              }
            }}
          ></textarea>
          <input
            type="text"
            className="new-blog__form__signature"
            placeholder="Chữ ký"
          />
          <button className="new-blog__form__create-button" type="submit">
            Sửa bài viết
          </button>
        </form>
      </div>
    </Helmet>
  );
};

export default EditBlog;
