import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import cartReducer from "./cart";
import orderReducer from "./order";
import commentReducer from "./comment";
import adminReducer from "./admin";
import agentReducer from "./agent";

const rootReducer = combineReducers({ userReducer,productReducer,cartReducer,orderReducer,commentReducer,adminReducer,agentReducer });
export default rootReducer;