import { combineReducers } from "redux";
import userReducer from "./userReducer";

const reducer = combineReducers({
	userData: userReducer,
});

export default reducer;
