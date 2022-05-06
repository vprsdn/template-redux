import { useState } from "react";
import { useDispatch } from "react-redux";

import { getUser } from "./state/actions/userActions";

import Profile from "./components/user/Profile";
import Counter from "./components/counter/Counter";

const App = () => {
	const [userid, setUserid] = useState(1);
	const [showLoader, setShowLoader] = useState(false);
	const dispatch = useDispatch();
	
	const getUserInfo = () => {
		setShowLoader(true);
		dispatch(getUser(userid))
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

	return (
		<div>
			<input
				type="text"
				value={userid}
				onChange={(e) => {
					setUserid(e.target.value);
				}}
			/>
			<h3>User id is {userid}</h3>
			<button onClick={getUserInfo}>Get user info</button>
			<br />
			{showLoader ? "loading..." : <Profile></Profile>}

			<hr />

			<Counter></Counter>
		</div>
	);
};

export default App;
