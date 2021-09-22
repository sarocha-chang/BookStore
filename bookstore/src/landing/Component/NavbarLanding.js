import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavbarLanding({className}) {
	function logOut() {
		localStorage.removeItem("username");
	}
	return (
		<header className={className}>
			<h3>
				<Link to="/">CHACHAX</Link>
			</h3>
			<nav>
				<Link
					to={localStorage.getItem("username") ? "/" : "/Registration"}
					className="login"
					style={{ padding: "10px 15px", fontSize: "16px" }}>
					{localStorage.getItem("username")
						? localStorage.getItem("username")
						: "เข้าสู่ระบบ"}
				</Link>
				{localStorage.getItem("username") ? (
					<Link
						onClick={logOut}
						to="/User/List"
						style={{ padding: "10px 15px", fontSize: "16px" }}>
						Logout
					</Link>
				) : null}
			</nav>
		</header>
	)
}

export default styled(NavbarLanding)`
	font-family: "IBM Plex Sans Thai", sans-serif;
	h3{
		margin-top: 0.7%;
		font-size: 26px;
		font-weight: normal;
	}

`
