import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";

// configureStore automatically sets up the thunk middleware by default
// The word "thunk" is a programming term that means "a piece of code that does some delayed work"
export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
