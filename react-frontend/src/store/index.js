import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import ChangePassReducer from "./ChangePassSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ChangePass: ChangePassReducer,
  },
});

export default store;
