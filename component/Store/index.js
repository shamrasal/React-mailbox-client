import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Auth";
import Sentslice from "./Sent";

const store = configureStore({
  reducer: {
    Auth: Authslice,
    Sent: Sentslice,
  },
});

export default store;
