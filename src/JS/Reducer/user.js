import {CURRENT_USER,EDIT_USER,FAIL_USER,GET_USERS,LOAD_USER,LOGIN_USER,LOGOUT_USER,REGISTER_USER} from "../ActionTypes/user";


const initialState = {
    users:[],
    user: null,
    loadUser: false,
    errors: null,
    isAuth: false,
    isAdmin: false,
    isAgent: false,
    edit:null
  };
  const userReducer = ( state = initialState , {type,payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state, loadUser : true}
        case REGISTER_USER:
            localStorage.setItem("token" , payload.token)  
            return{...state , loadUser : false , user : payload.user , isAuth : true , isAdmin: payload.user.isAdmin, isAgent: payload.user.isAgent } 
        case LOGIN_USER :
            localStorage.setItem("token" , payload.token )
            return{...state , loadUser : false , user : payload.user , isAuth : true , isAdmin: payload.user.isAdmin, isAgent: payload.user.isAgent } 
        case CURRENT_USER : 
             return {...state , user:payload , isAuth : true , loadUser : false}  
        case EDIT_USER:    
            return {...state , loadUser : false , user : payload.user, isAuth : true ,isAdmin: payload.user.isAdmin, isAgent: payload.user.isAgent }
        case GET_USERS:
            return { ...state, loadUser: false,users:payload }
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {
             user: null,
             loadUser: false,
             errors: null,
             isAuth: false,
             isAdmin: false,
             isAgent: false
         }
        case FAIL_USER:
            return { ...state, errors:payload, loadUser: false }
            default:
                return state;
        }
    }
    export default userReducer;