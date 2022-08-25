import { FAIL_ORDERS, GET_ORDERS, LOAD_ORDERS,ADD_ORDER } from "../ActionTypes/order";

const initialState = {
    listOrders:[],
    errors: null,
    load: false,
    orderToAdd :{}
};
const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ORDERS:
            return { ...state, load: false, listOrders: payload.listOrders };
        case ADD_ORDER:
            return { ...state, load: false, orderToAdd: payload };
        case LOAD_ORDERS:
            return { ...state, load: true };
        case FAIL_ORDERS:
            return { ...state,load: false, errors: payload };
        default:
            return state;
            }
          };
          
 export default orderReducer;