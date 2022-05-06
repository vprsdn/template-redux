import { combineReducers } from "redux";
import userReducer from "./userReducer";
import countReducer from "./countReducer";


const reducer = combineReducers({
	userData: userReducer,
	countData: countReducer,
});

export default reducer;
