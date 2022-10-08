import axios from "axios";
import { FAIL_ORDERS, GET_ORDERS, LOAD_ORDERS, ADD_ORDER } from "../ActionTypes/order";

export const getOrders = () => async (dispatch) => {
    dispatch({ type: LOAD_ORDERS });
    try {
      let result = await axios.get("/api/order/allOrders");
      dispatch({ type: GET_ORDERS,payload:result.data });
    } 
    catch (error) {
      dispatch({ type: FAIL_ORDERS, payload: error.response });
    }
  };
export const addOrder = (newOrder) => async (dispatch) => {
    dispatch({ type: LOAD_ORDERS });
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      await axios.post("/api/order/addOrder", newOrder,config);
      dispatch({type:ADD_ORDER});
    }
    catch (error) {
        dispatch({ type: FAIL_ORDERS, payload: error.response });
      }
    };
export const deleteOrder = (id) => async (dispatch) => {
        dispatch({ type: LOAD_ORDERS });
        try {
          const config = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
          await axios.delete(`/api/order/${id}`,config);
          dispatch(getOrders());
        } 
        catch (error) {
          dispatch({ type: FAIL_ORDERS, payload: error.response });
        }
      }; 