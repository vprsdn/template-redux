import { useSelector, useDispatch } from "react-redux";
import { increaseCount } from "./../../state/actions/counterActions";

const Counter = () => {
	const counterData = useSelector((state) => state.counterData);
	const dispatch = useDispatch();

	const handleIncreaseCount = (count = 1) => {
		dispatch(increaseCount(count));
	};

	return (
		<div>
			<h2>Counter</h2>
			<h3>{counterData}</h3>
			<button
				onClick={() => {
					handleIncreaseCount(1);
				}}
				style={{ marginRight: "10px" }}
			>
				Increase count by 1
			</button>
			<button
				onClick={() => {
					handleIncreaseCount(5);
				}}
			>
				Increase count by 5
			</button>
		</div>
	);
};

export default Counter;
