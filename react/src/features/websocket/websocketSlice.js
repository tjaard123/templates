import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  websocketMessages: [],
};

export const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    websocket(state, action) {
      console.log(action);
      state.websocketMessages = state.websocketMessages.concat(action.payload);
    },
  }
});

export default websocketSlice.reducer;
