import { CURRENT_ADMIN, FAIL_ADMIN, GET_USERS, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN} from '../ActionTypes/admin';


const InitialState = {
admin : null , 
load : false , 
errors: [] , 
isAdmin : false,
listusers : [],
}
const adminReducer = ( state = InitialState , {type,payload}) => {
    switch (type) {
        case LOAD_ADMIN:
            return {...state, load : true}
        case LOGIN_ADMIN :
            localStorage.setItem("token" , payload.token)
            return{...state , load : false , admin : payload.admin , isAdmin : true } 
        case CURRENT_ADMIN : 
             return {...state , admin:payload , isAdmin : true , load: false}  
         case GET_USERS : 
             return {...state , listusers:payload , isAdmin : true, load: false}       
        case LOGOUT_ADMIN :
            localStorage.removeItem("token")
            return { 
                admin : null , 
                load : false , 
                errors: [] , 
                isAdmin : false ,            
            }      
        case FAIL_ADMIN : 
            return {...state , load : false , errors : payload}            
        default:
            return state
    }
}

export default adminReducer ;