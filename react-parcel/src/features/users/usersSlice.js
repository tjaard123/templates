import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

// Async API calls are handled via redux middleware (thunk)
// The word "thunk" is a programming term that means "a piece of code that does some delayed work"
// https://redux.js.org/tutorials/essentials/part-5-async-logic
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://62f73d52ab9f1f8e89fa86c0.mockapi.io/users");
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
