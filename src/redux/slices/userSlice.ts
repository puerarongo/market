import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
  email: null,
  isReady: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdd: (state, action) => {
      const { user, email } = action.payload;
      state.user = user;
      state.email = email;
    },

    setIsReady: (state, action) => {
      state.isReady = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
