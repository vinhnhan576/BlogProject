import React from "react";
import Hello from "../assets/image/About/xinchao.png";
import Helmet from "../components/Helmet";
import CategoryCard from "../components/CategoryCard";
import AllCategoryCards from "../components/AllCategoryCards";
import Banner from "../components/Banner";
import { useSelector, useDispatch } from "react-redux";
import PostSlice, {
  getAllBlogsByUserIDAsync,
} from "../features/post/PostSlice";
import { useState, useEffect } from "react";
import { Link,useNavigate, useParams} from "react-router-dom";

function Category() {
	const [userID, setUserID] = useState(2);
	const { slug } = useParams();
	console.log(slug);
//   //const [topicID, setTopicID] = useState(props.id);
//  // console.log(topicID);
//   const allPosts = useSelector((state) => state.post);
//   //const allPostsBytopicID = allPosts.find((post) => post.topicID === topicID);
//   console.log(allPosts);
//   console.log(allPostsBytopicID);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllBlogsByUserIDAsync(userID));
//   }, [dispatch]);
// //   const allPostsElements = allPosts.map((post) => {
// //     return (
// //     );
// //   });
	return (
		<div>
			<Helmet title="Chủ đề">
				<Banner img={Hello} width="100" height="640" />
				<h2>slug</h2>
				<AllCategoryCards />
			</Helmet>
		</div>
	);
}

export default Category;
