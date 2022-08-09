import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  updateSent: false,
};

const Sentslice = createSlice({
  name: "sent",
  initialState: initialState,
  reducers: {
    replace(state, action) {
      state.items = action.payload.items;
      state.updateSent = action.payload.updateSent;
    },
    addsent(state, action) {
      const newItem = action.payload;
      state.updateSent = true;
      state.items.push({
        id: Math.random().toString(),
        key: Math.random().toString(),
        date: newItem.date,
        seen: newItem.seen,
        sub: newItem.sub,
        email: newItem.email,
        text: newItem.text,
      });
    },
  },
});

export const Sentactions = Sentslice.actions;
export default Sentslice.reducer;
