import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllBlogsByUserIDAsync = createAsyncThunk(
	"blogs/getAllBlogsByUserIDAsync",
	async (userID) => {
		const response = await Axios.get(
			`https://blogprojectpbl3.herokuapp.com/api/blog?userID=${userID}`
		);
		const tasks = response.data;
		return { tasks };
	}
);

export const getBlogBySlugAsync = createAsyncThunk(
	"blog/getBlogBySlugAsync",
	async (slug) => {
		const response = await Axios.get(
			`https://blogprojectpbl3.herokuapp.com/api/blog/getblogbyslug?slug=${slug}`
		);
		const tasks = response.data;
		return { tasks };
	}
);
<<<<<<< HEAD
=======

export const createNewBlogAsync = createAsyncThunk(
	"blog/createNewBlogAsync",
	async (blogReqData) => {
		console.log(blogReqData);
		const response = await Axios.post(
			"https://blogprojectpbl3.herokuapp.com/api/blog",
			blogReqData
		);
		const tasks = response.data;
		return { tasks };
	}
);

>>>>>>> a10179f03953799fcff24f3aa975a3c7e2c5f2b9
const blogSlice = createSlice({
	name: "blog",
	initialState: [],
	reducers: {},
	extraReducers: {
		[getAllBlogsByUserIDAsync.fulfilled]: (state, action) => {
			console.log("fetching blogs by userID successfully");
			return action.payload.tasks;
		},
		[getBlogBySlugAsync.fulfilled]: (state, action) => {
			console.log("fetching blog by slug successfully");
			return action.payload.tasks;
		},
		[createNewBlogAsync.fulfilled]: (state, action) => {
			console.log("added new blog successfully");
			return action.payload.tasks;
		},
	},
});
export const {} = blogSlice.actions;

export const selectPost = (state) => state.blog.blog;

export default blogSlice.reducer;
