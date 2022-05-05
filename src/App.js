import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { getUser } from "./state/actions/userActions";

import Profile from "./Profile";

const App = () => {
	const [userid, setUserid] = useState(1);
	const [showLoader, setShowLoader] = useState(false);
	const dispatch = useDispatch();

	// // PROMISE
	// const getUserInfo = () => {
	// 	console.log("before dispatch");
	// 	setShowLoader(true);
	// 	setTimeout(() => {
	// 		axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`).then((userResponse) => {
	// 			dispatch({ type: "SET_NEW_USER", payload: { ...userResponse.data } });
	// 		});
	// 		setShowLoader(false);
	// 		console.log("after dispatch");
	// 	}, 3000);
	// };

	// // ASYNC AWAIT
	// const getUserInfo = async () => {
	// 	console.log("before dispatch");
	// 	setShowLoader(true);
	// 	setTimeout(async () => {
	// 		const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
	// 		const userData = await userResponse.data;
	// 		dispatch({ type: "SET_NEW_USER", payload: { ...userData } });
	// 		setShowLoader(false);
	// 		console.log("after dispatch");
	// 	}, 3000);
	// };

	//	calling action creator.
	const getUserInfo = () => {
		setShowLoader(true);
		dispatch(getUser(userid))
			.then((res) => {
				setShowLoader(false);
			})
			.catch((err) => {
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
			<button onClick={getUserInfo}>Get info</button>
			<br />
			{showLoader ? "loading..." : <Profile></Profile>}
		</div>
	);
};

export default App;
