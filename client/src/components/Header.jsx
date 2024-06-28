import UserAvatar from "../assets/random_Avatar.jpg";
import { useNavigate } from "react-router-dom";

export const Header = ({ userDetails }) => {

    const navigate = useNavigate();

	return (
		<div>
			<h1>Jobfinder</h1>
			{userDetails && (
				<div>
					<img src={UserAvatar} alt="" />
				</div>
			)}
			{!userDetails && (
				<div>
                <button
						onClick={() => {
							// setPath("/login");
							navigate("/login");
						}}
					>
						Login
					</button>
					<button
						onClick={() => {
							navigate("/register");
						}}
					>
						Register
					</button>
				</div>
			)}
		</div>
	);
};