import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLanding() {
	function logOut() {
		localStorage.removeItem("username");
	}
	
	return (
		<>
			<header>
				<h3>
					<Link to="/">CHACHAX</Link>
				</h3>
				<nav>
					<Link
						to={localStorage.getItem("username") ? "#" : "/Registration"}
						className="login"
						style={{ marginRight: "5px", fontSize: "16px" }}>
						{localStorage.getItem("username")
							? localStorage.getItem("username")
							: "เข้าสู่ระบบ"}
					</Link>
					{localStorage.getItem("username") ? (
						<Link
							onClick={logOut}
							to="/User/List"
							style={{ marginLeft: "10px", fontSize: "16px" }
							}>
							Logout
						</Link>
					) : null}
				</nav>
			</header>
		</>
	);
}
