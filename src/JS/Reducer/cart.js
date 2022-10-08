import { ADD_CART, CURRENT_CART, FAIL_CART, LOAD_CART } from "../ActionTypes/cart";


const initialState = {
    cartItems:[],
    load:false,
    errors:null
};
const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CART:
            return {...state,load:true}
        case FAIL_CART:
            return {...state,errors:payload,load:false}
        case ADD_CART:
            return {...state,cartItems:payload,load:false}
        case CURRENT_CART:
            return {...state,cartItems:payload.cart,load:false};    
            default:
                return state
        }
        };

export default cartReducer;