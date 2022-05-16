import { useSelector } from "react-redux";

const User = ({ userData }) => {
	return (
		<div>
			<h3>{userData.name}</h3>
			<h3>{userData.id}</h3>
			<h3>{userData.username}</h3>
		</div>
	);
};

const Profile = () => {
	const userData = useSelector((state) => state.userData)
	return (
		<div>
			<h3>Profile</h3>
			{userData.userData?.id ? <User userData={userData.userData}></User> : "No data"}
		</div>
	);
};

export default Profile;
