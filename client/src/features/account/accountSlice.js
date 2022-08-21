import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const authenticateUserAsync = createAsyncThunk(
	"auth/authenticateUserAsync",
	async (user) => {
		console.log();
		const response = await Axios.post("http://localhost:5000/auth", user);
		const tasks = response.data;
		return { tasks };
	}
);

export const accountSlice = createSlice({
	name: "account",
	initialState: {
		account: null,
	},
	reducers: {
		// login: (state, action) => {
		// 	const data = {
		// 		username: action.payload.username,
		// 		password: action.payload.password,
		// 	};
		// 	Axios.post("http://localhost:5000/auth", { data })
		// 		.then((res) => {
		// 			if (res) {
		// 				state.account = action.payload;
		// 				console.log(state.account);
		// 			} else state.account = null;
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
		// },
		logout: (state) => {
			state.account = null;
		},
	},
	extraReducers: {
		[authenticateUserAsync.fulfilled]: (state, action) => {
			console.log("authenticate user successfully");
			if (action.payload.tasks) state.account = action.payload.tasks;
			else state.account = null;
			console.log(state.account);
		},
	},
});

export const { logout } = accountSlice.actions;

export const selectAccount = (state) => state.account.account;

export default accountSlice.reducer;
