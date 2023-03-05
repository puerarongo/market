import IProductsFirebase from "./productsFirebase.interface";

interface IPersonalFirebase {
  allProducts: IProductsFirebase[];
  allAmount: Number;
  allQuantity: Number;
}

export default IPersonalFirebase;
