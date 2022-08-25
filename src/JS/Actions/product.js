import axios from "axios";
import { FAIL_PRODUCT, FAIL_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, LOAD_PRODUCT, LOAD_PRODUCTS } from "../ActionTypes/product";


export const getProducts = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCTS });
    try {
      let result = await axios.get("/api/product/allproducts");
      dispatch({ type: GET_PRODUCTS, payload: result.data });
    } 
    catch (error) {
      dispatch({ type: FAIL_PRODUCTS, payload: error.response });
    }
  };
  export const getOneProduct = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
      let result = await axios.get(`/api/product/${id}`);
      dispatch({ type: GET_PRODUCT, payload: result.data });
    }
     catch (error) {
      dispatch({ type: FAIL_PRODUCT, payload: error.response });
    }
  };
  export const addProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      await axios.post("/api/product/addProduct", newProduct,config);
      dispatch(getProducts());
    }
    catch (error) {
        dispatch({ type: FAIL_PRODUCTS, payload: error.response });
      }
    };
    export const editProduct = (id, newProduct) => async (dispatch) => {
        dispatch({ type: LOAD_PRODUCT });
        try {
          const config = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
          await axios.put(`/api/product/editProduct/${id}`, newProduct,config);
          dispatch(getProducts());
        } catch (error) {
          dispatch({ type: FAIL_PRODUCTS, payload: error.response });
        }
      };
      export const deleteProduct = (id) => async (dispatch) => {
        dispatch({ type: LOAD_PRODUCT });
        try {
          const config = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
          await axios.delete(`/api/product/deleteProduct/${id}`,config);
          dispatch(getProducts());
        } 
        catch (error) {
          dispatch({ type: FAIL_PRODUCT, payload: error.response });
        }
      }; 