import axios from "axios";
import actionTypes from "../actionTypes";

const getUser = (userId) => {
	return async (dispatchMethod, getState) => {
		// console.log(getState());
		// console.log("state");
		const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
		const userData = await userResponse.data;
		dispatchMethod({ type: actionTypes.user.SET_NEW_USER, payload: userData });
		return userData;
	};
};

export { getUser };
