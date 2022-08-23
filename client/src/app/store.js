import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/post/PostSlice";
import userReducer from "../features/user/userSlice";
import accountReducer from "../features/account/accountSlice";
import topicReducer from '../features/topic/topicSlice'

export default configureStore({
	reducer: {
		post: PostReducer,
		user: userReducer,
		account: accountReducer,
		topic: topicReducer,
	},
});
