import axios from "axios";

const getNewUser = async (userid) => {
	console.log("calling api");
	const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
	const userData = await userResponse.data;
	console.log(userData);
	console.log("received userData");
	return userData || {};
};

const userReducer = (state = {}, action = {}) => {
	console.log("hit reducer");
	switch (action.type) {
		case "SET_NEW_USER":
			// const x = getNewUser(action.payload.userid);
			// console.log(x);
			// console.log("response in reducer");
			// return x;
			return {
				...action.payload,
			};
			break;
		case "SET_THUNK_NEW_USER":
			const x = getNewUser(action.payload.userid);
			console.log(x);
			console.log("response in reducer");
			return x;
			break;

		default:
			return state;
	}
};

export default userReducer;
