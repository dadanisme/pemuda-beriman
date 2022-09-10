import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/app";
import user from "./slices/user";

const store = configureStore({
  reducer: {
    app,
    user,
  },
});

export default store;
