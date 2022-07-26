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

export const createNewBlogAsync = createAsyncThunk(
	"blog/createNewBlogAsync",
	async ({ blogReqData }) => {
		const response = await Axios.post(
			"https://blogprojectpbl3.herokuapp.com/api/blog",
			blogReqData
		);
		const tasks = response.data;
		return { tasks };
	}
);

export const updateBlogAsync = createAsyncThunk(
	"blog/updateBlogAsync",
	async ({ blogReqData }) => {
		const id = blogReqData.id;
		const response = await Axios.put(
			`https://blogprojectpbl3.herokuapp.com/api/blog/${blogReqData.id}`,
			blogReqData
		);
		const tasks = response.data;
		console.log(tasks);
		return { tasks };
	}
);

export const deleteBlogAsync = createAsyncThunk(
	"blog/deleteBlogAsync",
	async (id) => {
		const response = await Axios.delete(
			`https://blogprojectpbl3.herokuapp.com/api/blog/${id}`
		);
		window.location.reload(false);
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
		[updateBlogAsync.fulfilled]: (state, action) => {
			console.log("updated blog successfully");
			return action.payload.tasks;
		},
	},
});
export const {} = blogSlice.actions;

export const selectPost = (state) => state.blog.blog;

export default blogSlice.reducer;
