import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const userIsLoggedIn = !!initialToken;

const initialState = {
  token: initialToken,
  isLoggedIn: userIsLoggedIn,
};

const Authslice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const Authactions = Authslice.actions;
export default Authslice.reducer;
