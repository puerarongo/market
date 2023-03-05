import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  allProducts: [],
  allAmount: 0,
  allQuantity: 0,
};

const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    addBuy: (state, action) => {
      const { allQuantity, allAmount, allProducts } = action.payload;
      state.allQuantity = state.allQuantity + allQuantity;
      state.allAmount = state.allAmount + allAmount;
      state.allProducts = allProducts;
    },

    allDelete: () => initialState,
  },
});

export const personalActions = personalSlice.actions;

export default personalSlice.reducer;
