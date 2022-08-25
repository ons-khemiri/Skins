import { FAIL_COMMENTS, GET_COMMENTS, LOAD_COMMENTS,ADD_COMMENT } from "../ActionTypes/comment";

const initialState = {
    listComments:[],
    errors: null,
    load: false,
    commentToAdd :{}
};
const commentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COMMENTS:
            return { ...state, load: false, listComments: payload.listComments };
        case ADD_COMMENT:
            return { ...state, load: false, commentToAdd: payload };
        case LOAD_COMMENTS:
            return { ...state, load: true };
        case FAIL_COMMENTS:
            return { ...state,load: false, errors: payload };
        default:
            return state;
            }
          };
          
 export default commentReducer;