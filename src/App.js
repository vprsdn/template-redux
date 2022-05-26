import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser, setUserId } from "./state/actions/userActions";

import Profile from "./components/user/Profile";
import Counter from "./components/counter/Counter";

const App = () => {
	const userData = useSelector((state) => state.userData);
	const userId = userData.userId;
	const [showLoader, setShowLoader] = useState(false);
	const dispatch = useDispatch();

	const getUserInfo = () => {
		setShowLoader(true);
		dispatch(getUser(userId))
			.then((res) => {
				//	If required, do something with the returned data..
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setShowLoader(false);
			});
	};

	const updateUserId = (ev) => {
		dispatch(setUserId(ev.target.value));
	};

	return (
		<div>
			<input type="text" value={userId} onChange={updateUserId} />
			<h3>User id is {userId}</h3>
			<button onClick={getUserInfo}>Get user info</button>
			<br />
			{showLoader ? "loading..." : <Profile></Profile>}

			<hr />

			<Counter></Counter>
		</div>
	);
};

export default App;
