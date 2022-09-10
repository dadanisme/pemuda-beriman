import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  snackType: "success",
  snackMessage: "",
  snackOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDarkMode(state, action) {
      state.isDarkMode = action.payload;
    },
    setSnackType(state, action) {
      state.snackType = action.payload;
    },
    setSnackMessage(state, action) {
      state.snackMessage = action.payload;
    },
    setSnackOpen(state, action) {
      state.snackOpen = action.payload;
    },
  },
});

export const { setDarkMode, setSnackType, setSnackMessage, setSnackOpen } =
  appSlice.actions;

export default appSlice.reducer;
