import axios from "axios";

// const getNewUser = async (userid) => {
// 	console.log("calling api");
// 	const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
// 	const userData = await userResponse.data;
// 	console.log(userData);
// 	console.log("received userData");
// 	return userData || {};
// };

const userReducer = (state = {}, action = {}) => {
	console.log("hit reducer");
	switch (action.type) {
		case "SET_NEW_USER":
			return {
				...action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
