import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/app";

const store = configureStore({
  reducer: {
    app,
  },
});

export default store;
