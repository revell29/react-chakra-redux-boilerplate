import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "../pages/auth/store/reducer";

const createRootReducer = (history) =>
  combineReducers({
    authReducer,
    router: connectRouter(history),
  });
export default createRootReducer;
