import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import Axios from "axios";
import Hello from "../../assets/image/about/upper-pic.png";

export const getAllTopicsByUserIDAsync = createAsyncThunk(
	"blogs/getAllTopicssByUserIDAsync",
	async (userID) => {
		const response = await Axios.get(
			`http://localhost:5000/api/topic/query?userID=${userID}`
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
