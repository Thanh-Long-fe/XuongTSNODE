import Product, { Brand } from "../interface";
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT, SET_BRAND, SET_PRODUCT } from "./const"
interface State {
    products: Product[];
    brands: Brand[];
  }
export const initState : State = {
    products: [],
    brands: []
}
interface SetBrandAction {
    type: typeof SET_BRAND;
    payload: Brand[];
  }
  
  interface AddProductAction {
    type: typeof ADD_PRODUCT;
    payload: Product;
  }
  
  interface SetProductAction {
    type: typeof SET_PRODUCT;
    payload: Product[];
  }
  
  interface EditProductAction {
    type: typeof EDIT_PRODUCT;
    payload: Product;
  }
  
  interface RemoveProductAction {
    type: typeof REMOVE_PRODUCT;
    payload: number; 
  }
  
  type Action = SetBrandAction | AddProductAction | SetProductAction | EditProductAction | RemoveProductAction;


const reducer = (state : State, action: Action)  => {
    switch (action.type) {
        case SET_BRAND:
            return { ...state, brands: action.payload }
        case ADD_PRODUCT:

            return { ...state, products: [...state.products,  action.payload] };

        case SET_PRODUCT:

            return { ...state, products: action.payload }
        case EDIT_PRODUCT:


            return { ...state, products: state.products.map(product => product.id ===  action.payload.id ?  action.payload : product) };


        case REMOVE_PRODUCT:

            return { ...state, products: state.products.filter(product => product.id !== action.payload) };


    }
}
export default reducer

