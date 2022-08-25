import axios from 'axios'
import { CURRENT_USER, FAIL_USER, LOAD_USER,  LOGIN_USER, LOGOUT_USER, REGISTER_USER ,EDIT_USER, GET_USERS } from "../ActionTypes/user"


export const register = (newUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      let result = await axios.post("api/user/register", newUser);
      dispatch({ type: REGISTER_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
  export const login = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      let result = await axios.post("/api/user/login", user);
      dispatch({ type: LOGIN_USER, payload: result.data });
      
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
  export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const config = {
        headers: {
        authorization: localStorage.getItem("token"),
        }
      }
      let result = await axios.get("/api/user/current", config);
      dispatch({ type: CURRENT_USER, payload: result.data });
      } 
    catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors});
  }
  };
  export const editUser = (id,newUser)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})
  try {
     let result = await axios.put(`/api/user/${id}`,newUser)
      dispatch (  { type : EDIT_USER , payload : result.data})
  } catch (error) {
    dispatch ({type : FAIL_USER , payload : error.response.data.errors})
  }
};
export const getUsers = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const config = {
        headers: {
        authorization: localStorage.getItem("token"),
        }
      }
      let result = await axios.get("/api/user/allUsers",config);
      dispatch({ type: GET_USERS, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload:error.response.data.errors });
    }
  };
  export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
   };