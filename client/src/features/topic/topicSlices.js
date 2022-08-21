import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import Axios from "axios";
import Hello from "../../assets/image/About/xinchao.png";

export const getAllTopicsByUserIDAsync = createAsyncThunk(
  "blogs/getAllBlogsByUserIDAsync",
  async (userID) => {
    const response = await Axios.get(
      `http://localhost:5000/api/blog?userID=${userID}`
    );
    const tasks = response.data;
    return { tasks };
  }
);

const TopicSlice = createSlice({
  name: "topic",
  initialState: [
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
    {
      urlImage: { Hello },
      date: "22/7/2022",
      title: "Đầm Sen cùng Hương Lê",
      content:
        "Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
    },
  ],
  reducers: {},
  extraReducers: {
    [getAllBlogsByUserIDAsync.fulfilled]: (state, action) => {
      console.log("fetching data successfully");
      return action.payload.tasks;
    },
  },
});
export const {} = TopicSlice.actions;
export default TopicSlice.reducer;
