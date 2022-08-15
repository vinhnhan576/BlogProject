import { configureStore } from "@reduxjs/toolkit";
import PostReducer from '../features/post/PostSlice'

export default configureStore({
  reducer: {
    post: PostReducer,
  },
});
