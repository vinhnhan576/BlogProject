import React from "react";
import DoiSongImg from "../assets/image/banner/banner.png";
import Topic_Post from "./Topic_Post";
import { useSelector, useDispatch } from "react-redux";
import PostSlice, {
  getAllBlogsByUserIDAsync,
} from "../features/post/PostSlice";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Topic(props) {
  const [userID, setUserID] = useState(1);
  const [topicID, setTopicID] = useState(1);
  const allPosts = useSelector((state) => state.post);
  console.log(allPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogsByUserIDAsync(userID));
  }, [dispatch]);
  const allPostsElements = allPosts.map((post) => {
    return (
      <Topic_Post
        key={post.id}
        id={post.id}
        urlImage={post.coverImg}
        content={post.content}
        title={post.title}
      />
    );
  });
  return (
    <div className="container">
      <div className="topic">
        <Link to={'/topic/${topicID}'}>
          <h2 className="topic-name">{props.topicName}</h2>
        </Link>
        <div className="topic-underline"></div>
      </div>

      <div>{allPostsElements}</div>
    </div>
  );
}
