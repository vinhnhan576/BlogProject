import React from "react";
import Helmet from "../components/Helmet";
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
<<<<<<< HEAD
				<Banner img={Hello} width="100" height="640" />
				<h2>slug</h2>
=======
>>>>>>> 91c8cc2a00c859c8d7c99f24833d7eec099f63c0
				<AllCategoryCards />
			</Helmet>
		</div>
	);
}

export default Category;
