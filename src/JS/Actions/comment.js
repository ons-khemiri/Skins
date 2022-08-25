import axios from "axios";
import { FAIL_COMMENTS, GET_COMMENTS, LOAD_COMMENTS, ADD_COMMENT } from "../ActionTypes/comment";

export const getComments = () => async (dispatch) => {
    dispatch({ type: LOAD_COMMENTS });
    try {
      let result = await axios.get("/api/comment/allComments");
      dispatch({ type: GET_COMMENTS, payload: result.data });
    } 
    catch (error) {
      dispatch({ type: FAIL_COMMENTS, payload: error.response });
    }
  };
export const addComment = (newComment) => async (dispatch) => {
    dispatch({ type: LOAD_COMMENTS });
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      await axios.post("/api/comment/addComment", newComment,config);
      dispatch({type:ADD_COMMENT,payload:result.data});
    }
    catch (error) {
        dispatch({ type: FAIL_COMMENTS, payload: error.response });
      }
    };
export const editCommentt = (id, newComment) => async (dispatch) => {
        dispatch({ type: LOAD_COMMENTS });
        try {
          const config = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
          await axios.put(`/api/comment/editComment/${id}`, newComment,config);
          dispatch(getComments());
        } 
        catch (error) {
          dispatch({ type: FAIL_COMMENTS, payload: error.response });
        }
      };
export const deleteComment = (id) => async (dispatch) => {
        dispatch({ type: LOAD_COMMENTS });
        try {
          const config = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
          await axios.delete(`/api/comment/deleteComment/${id}`,config);
          dispatch(getComments());
        } 
        catch (error) {
          dispatch({ type: FAIL_COMMENTS, payload: error.response });
        }
      }; 