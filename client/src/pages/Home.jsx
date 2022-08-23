import React from "react";
import CategoryCard from "../components/CategoryCard";
import Helmet from "../components/Helmet";
import Topic from "../components/Topic";
import Category from "./Category";
import { useSelector, useDispatch } from "react-redux";
import PostSlice, {
  getAllTopicsByUserIDAsync,
} from "../features/topic/topicSlice";
import { useState, useEffect } from "react";

function Home() {
  const allPosts = useSelector((state) => state.topic);
  const [userID, setUserID] = useState(2);
  console.log(allPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTopicsByUserIDAsync(userID));
  }, [dispatch]);
  const allTopicIDElements = allPosts.map((post) => {
    return <Topic topicName={post.topicName} id={post.id} slug={post.slug} />;
  });
  console.log(allTopicIDElements);
  return (
    <div>
      <Helmet title="Trang chủ">Trang chủ</Helmet>
      {allTopicIDElements}
    </div>
  );
}

export default Home;
