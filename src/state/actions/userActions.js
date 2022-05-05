import axios from "axios";

const getUser = (userId) => {
	return async (disp, getState) => {
		console.log(getState());
		console.log("state");
		console.log("before call");
		const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
		const userData = await userResponse.data;
		console.log(userData);
		disp({ type: "SET_NEW_USER", payload: userData });
		console.log("after call");
		return userData;
	};
};

export { getUser };
