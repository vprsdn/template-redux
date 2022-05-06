import { combineReducers } from "redux";
import userReducer from "./userReducer";
import counterReducer from "./counterReducer";


const reducer = combineReducers({
	userData: userReducer,
	counterData: counterReducer,
});

export default reducer;
