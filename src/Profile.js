import { useSelector } from "react-redux";
import store from "./state/store";

const User = ({ userData }) => {
	return (
		<div className="userdata_container">
			<h3>{userData.name}</h3>
			<h3>{userData.id}</h3>
			<h3>{userData.username}</h3>
		</div>
	);
};

const Profile = () => {
	const userData = useSelector((state) => state.userData);

	console.log(userData);
	console.log("userData in profile");

	return (
		<div>
			<h3>Profile</h3>
			{userData.id ? <User userData={userData}></User> : "No data"}
		</div>
	);
};

export default Profile;
