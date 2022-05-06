import actionTypes from "../actionTypes";

const userReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case actionTypes.user.SET_NEW_USER:
			return {
				...action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
