import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdd: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
