import actionTypes from "../actionTypes";

const userReducer = (state = { userId: 1, userData: {} }, action = {}) => {
	switch (action.type) {
		case actionTypes.user.SET_NEW_USER:
			return {
				...state,
				userData: { ...action.payload },
			};
		case actionTypes.user.SET_USER_ID:
			return {
				...state,
				userId: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
