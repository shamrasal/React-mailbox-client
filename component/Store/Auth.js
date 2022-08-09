import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const userIsLoggedIn = !!initialToken;
const initialemail = localStorage.getItem("email");

const initialState = {
  token: initialToken,
  email: initialemail,
  isLoggedIn: userIsLoggedIn,
};

const Authslice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const Authactions = Authslice.actions;
export default Authslice.reducer;
