import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Auth";

const store = configureStore({
  reducer: {
    Auth: Authslice,
  },
});

export default store;
