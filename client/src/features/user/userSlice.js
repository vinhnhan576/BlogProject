import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getUserByUsernameAsync = createAsyncThunk(
	"api/user/getUserByUsernameAsync",
	async (username) => {
		const response = await Axios.post(
			"http://localhost:5000/api/user/getuserbyusername",
			username
		);
		const tasks = response.data;
		return { tasks };
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {},
	extraReducers: {
		[getUserByUsernameAsync.fulfilled]: (state, action) => {
			console.log("get user by username successfully");
			if (action.payload.tasks)
				// state.user = action.payload.tasks;
				return action.payload.tasks;
			return null;
		},
	},
});

export const {} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
