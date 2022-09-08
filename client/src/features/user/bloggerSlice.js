import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getBloggerByAliasAsync = createAsyncThunk(
	"api/user/getBloggerByAliasAsync",
	async (alias) => {
		const response = await Axios.get(
			`https://blogprojectpbl3.herokuapp.com/api/user/getuserbyalias?alias=${alias}`
		);
		const tasks = response.data;
		return { tasks };
	}
);

export const bloggerSlice = createSlice({
	name: "blogger",
	initialState: {
		blogger: null,
	},
	reducers: {},
	extraReducers: {
		[getBloggerByAliasAsync.fulfilled]: (state, action) => {
			console.log("get blogger by alias successfully");
			// state.user = action.payload.tasks;
			return action.payload.tasks;
		},
	},
});

export const {} = bloggerSlice.actions;

export const selectBlogger = (state) => state.blogger.blogger;

export default bloggerSlice.reducer;
