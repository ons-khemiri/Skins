import { FAIL_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, LOAD_PRODUCTS } from "../ActionTypes/product";

const initialState = {
    listProducts:[],
    errors: null,
    load: false,
    productToGet :{}
};
const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS:
            return { ...state, load: false, listProducts: payload.listProducts };
        case GET_PRODUCT:
            return { ...state, load: false, productToGet: payload };
        case LOAD_PRODUCTS:
            return { ...state, load: true };
        case FAIL_PRODUCTS:
            return { ...state,load: false, errors: payload };
        default:
            return state;
            }
          };
          
 export default productReducer;