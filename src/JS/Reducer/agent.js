import { CURRENT_AGENT, FAIL_AGENT, LOAD_AGENT, LOGIN_AGENT, LOGOUT_AGENT} from '../ActionTypes/agent';


const InitialState = {
agent : null , 
load : false , 
errors: [] , 
isAgent : false,
}
const agentReducer = ( state = InitialState , {type,payload}) => {
    switch (type) {
        case LOAD_AGENT:
            return {...state, load : true}
        case LOGIN_AGENT :
            localStorage.setItem("token" , payload.token)
            return{...state , load : false , agent : payload.agent , isAgent : true } 
        case CURRENT_AGENT : 
             return {...state , agent:payload , isAgent : true , load: false}        
        case LOGOUT_AGENT :
            localStorage.removeItem("token")
            return { 
                agent : null , 
                load : false , 
                errors: [] , 
                isAgent : false ,            
            }      
        case FAIL_AGENT : 
            return {...state , load : false , errors : payload}            
        default:
            return state
    }
}

export default agentReducer ;