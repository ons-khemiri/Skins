import axios from "axios";
import { ADD_CART, CURRENT_CART, FAIL_CART, LOAD_CART } from "../ActionTypes/cart";

export const addToCart = (user_id,product_id) => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
        const result=await axios.get(`/api/cart/${user_id}/${product_id}`)
        dispatch({type:ADD_CART, payload:result.data.user.cart})
    }
     catch (error) {
        dispatch({ type: FAIL_CART, payload: error.response });
        
    }
};
export const current_cart = () => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      let result = await axios.get("/api/cart", config);
      dispatch({ type: CURRENT_CART, payload: result.data });
    } 
    catch (error) {
      dispatch({ type: FAIL_CART, payload: error.response});
   
    }
  };
  export const deleteCartItem =(user_id,product_id) =>async (dispatch) =>  {

    dispatch({ type: LOAD_CART });
    try {
     await axios.delete(`api/cart/${user_id}/${product_id}/`);
      dispatch(current_cart());
    } 
    catch (error) {
      dispatch({ type: FAIL_CART, payload: error.response });
    }
  };
  export const emptyCart=(user_id) =>async (dispatch) =>  {  dispatch({ type: LOAD_CART });
  try {
    await axios.delete(`api/cart/${user_id}/`);
    dispatch(current_cart());
  } 
  catch (error) {
    dispatch({ type: FAIL_CART, payload: error.response });
  }
};