import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllTopicsByUserIDAsync = createAsyncThunk(
	"topic/getAllTopicssByUserIDAsync",
	async (userID) => {
		const response = await Axios.get(
			`http://blogprojectpbl3.herokuapp.com/api/topic/query?userID=${userID}`
		);
		const tasks = response.data;
		return { tasks };
	}
);

export const getAllTopicBySlugAsync = createAsyncThunk(
	"topic/getAllTopicBySlugAsync",
	async (slug) => {
		const response = await Axios.get(
			`https://blogprojectpbl3.herokuapp.com/api/topic/gettopicbyslug?slug=${slug}`
		);
		const tasks = response.data;
		return { tasks };
	}
);

const topicSlice = createSlice({
	name: "topic",
	initialState: [],
	reducers: {},
	extraReducers: {
		[getAllTopicsByUserIDAsync.fulfilled]: (state, action) => {
			console.log("fetching data successfully");
			return action.payload.tasks;
		},
	},
});
export const {} = topicSlice.actions;
export default topicSlice.reducer;
