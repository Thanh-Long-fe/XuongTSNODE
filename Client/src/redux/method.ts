import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT, SET_BRAND, SET_PRODUCT } from "./const";
import Product, { Brand } from "../interface";

interface SetBrandAction {
  type: typeof SET_BRAND;
  payload: Brand[];
}

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface EditProductAction {
  type: typeof EDIT_PRODUCT;
  payload: Product;
}

interface SetProductAction {
  type: typeof SET_PRODUCT;
  payload: Product[];
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: number; // assuming payload is the ID of the product to be removed
}

// Tạo một kiểu union cho tất cả các action types


// Action creators
export const setBrand = (payload: Brand[]): SetBrandAction => ({
  type: SET_BRAND,
  payload
});

export const addProduct = (payload: Product): AddProductAction => ({
  type: ADD_PRODUCT,
  payload
});

export const editProduct = (payload: Product): EditProductAction => ({
  type: EDIT_PRODUCT,
  payload
});

export const setProduct = (payload: Product[]): SetProductAction => ({
  type: SET_PRODUCT,
  payload
});

export const removeProduct = (payload: number): RemoveProductAction => ({
  type: REMOVE_PRODUCT,
  payload
});
