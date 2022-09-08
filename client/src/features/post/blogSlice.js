import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllBlogsByUserIDAsync = createAsyncThunk(
	"blogs/getAllBlogsByUserIDAsync",
	async (userID) => {
		const response = await Axios.get(
			`http://localhost:5000/api/blog?userID=${userID}`
		);
		const tasks = response.data;
		return { tasks };
	}
);

export const getBlogBySlugAsync = createAsyncThunk(
	"blog/getBlogBySlugAsync",
	async (slug) => {
		const response = await Axios.get(
			`http://localhost:5000/api/blog/getblogbyslug?slug=${slug}`
		);
		const tasks = response.data;
		return { tasks };
	}
);
const blogSlice = createSlice({
	name: "blog",
	initialState: [],
	reducers: {},
	extraReducers: {
		[getAllBlogsByUserIDAsync.fulfilled]: (state, action) => {
			console.log("fetching data successfully");
			return action.payload.tasks;
		},
		[getBlogBySlugAsync.fulfilled]: (state, action) => {
			console.log("fetching blog by slug successfully");
			return action.payload.tasks;
		},
	},
});
export const {} = blogSlice.actions;

export const selectPost = (state) => state.blog.blog;

export default blogSlice.reducer;
