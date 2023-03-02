import { createSlice } from "@reduxjs/toolkit";

interface IProduct {
  id: Number;
  image: String;
  title: String;
  overview: String;
  price: Number;
  quantity: Number;
  totalPrice: Number;
}

const initialState: any = {
  basketItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct: IProduct = action.payload;
      const existingProduct = state.basketItems.find(
        (el: any) => el.id === newProduct.id
      );
      state.totalQuantity += 1;

      if (!existingProduct) {
        state.basketItems.push({
          id: newProduct.id,
          image: newProduct.image,
          title: newProduct.title,
          overview: newProduct.overview,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      } else {
        existingProduct.quantity += 1;
        existingProduct.totalPrice =
          Number(existingProduct.totalPrice) + Number(newProduct.price);
      }
      state.totalAmount = state.basketItems.reduce((total: any, item: any) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },

    deleteProduct: (state, action) => {
      const id = action.payload.id;
      const existingProduct = state.basketItems.find((el: any) => {
        return el.id === id;
      });

      if (existingProduct) {
        console.log("existing into", state.basketItems);
        state.basketItems = state.basketItems.filter((el: any) => el.id !== id);
        state.totalQuantity = state.totalQuantity - existingProduct.quantity;
      }

      state.totalAmount = state.basketItems.reduce((total: any, item: any) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
