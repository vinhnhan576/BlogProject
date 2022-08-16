import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/post/PostSlice";
import userReducer from "../features/user/userSlice";
import accountReducer from "../features/account/accountSlice";

export default configureStore({
	reducer: {
		post: PostReducer,
		user: userReducer,
		account: accountReducer,
	},
});
