import axios from 'axios';
import { CURRENT_AGENT, FAIL_AGENT, LOAD_AGENT, LOGIN_AGENT, LOGOUT_AGENT} from '../ActionTypes/agent';


export const loginAgent = (agent) => async (dispatch) => {
    dispatch ({type : LOAD_AGENT})
    try {
        let result = await axios.post("/api/agent/loginAgent" , agent)
        dispatch ( { type : LOGIN_AGENT , payload : result.data})
        } 
    catch (error) {
        dispatch({ type: FAIL_AGENT, payload: error.response });
    }
}
export const currentAgent = () => async (dispatch) => {
dispatch ({ type : LOAD_AGENT})
try {
 const config = {
     headers : {
         authorization : localStorage.getItem("token")
     }
 }
 let result = await axios.get("/api/agent/currentAgent" , config)
 dispatch ({ type : CURRENT_AGENT , payload : result.data})
} 
catch (error) {
    dispatch({ type: FAIL_AGENT, payload: error.response });
    }
}
export const logoutAgent = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_AGENT})
}