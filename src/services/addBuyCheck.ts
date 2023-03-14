import { store } from "../redux/store";

const addBuyCheck = (productItems: any) => {
  const state = store.getState().personal;
  const objProducts = [...state.allProducts];
  productItems.forEach((el: any) => {
    const exitingProducts = state.allProducts.findIndex(
      (prod: any) => el.id === prod.id
    );
    if (exitingProducts >= 0) {
      const oldProd = state.allProducts[exitingProducts];
      objProducts[exitingProducts] = {
        ...oldProd,
        quantity: oldProd.quantity + el.quantity,
        totalPrice: oldProd.totalPrice + el.totalPrice,
      };
    } else
      objProducts.push({
        id: el.id,
        image: el.image,
        title: el.title,
        description: el.description || "someText",
        quantity: el.quantity,
        totalPrice: el.totalPrice,
      });
  });
  return objProducts;
};

export default addBuyCheck;
