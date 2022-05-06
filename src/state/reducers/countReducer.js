import actionTypes from "../actionTypes";

const countReducer = (state = 0, action = {}) => {
	switch (action.type) {
		case actionTypes.counter.INCREASE_COUNT:
			return state + action.payload.count;

		default:
			return state;
	}
};

export default countReducer;
