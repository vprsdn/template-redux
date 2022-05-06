import actionTypes from "../actionTypes";

const increaseCount = (countToIncrease) => {
	return {
		type: actionTypes.counter.INCREASE_COUNT,
		payload: { count: countToIncrease },
	};
};

export { increaseCount };
