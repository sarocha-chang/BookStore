import styled from "styled-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {removeCustomer} from "../../app/Customer/actions";
function Sidebar({className}) {
	const dispatch = useDispatch();

	function logOut() {
		localStorage.removeItem("InLogin");
		dispatch(removeCustomer());
	}

	return (
		<>
			<nav className={className}>
				<Link to="/admin" className="brand">
					CHACHAX
				</Link>
				<Link to="/admin" className="menu">
					ข้อมูลหนังสือ
				</Link>
				<Link to="/admin/add-book" className="menu">
					เพิ่มหนังสือใหม่
				</Link>
				<Link to="/home" className="end" onClick={logOut}>
					ออกจากระบบ
				</Link>
			</nav>
		</>
	);
}
Sidebar.propTypes = {
	className: PropTypes.string.isRequired,
};

export default styled(Sidebar)`
	margin: 0;
	background-color: #005488;
	width: 225px;
	height: 100%;
	position: fixed;
	display: flex;
	flex-direction: column;
	font-family: "IBM Plex Sans Thai", sans-serif;
	border-radius: 2px;
	.brand {
		display: block;
		font-size: 30px;
		text-align: center;
		text-decoration: none;
		color: #ffffff;
		padding: 20px;
		border-bottom: 1px solid #ffffff;
	}
	.menu {
		margin-top: 1rem;
		display: block;
		font-size: 20px;
		color: #ffffff;
		padding: 20px;
		text-decoration: none;
		text-align: center;
		border: 1px solid #005488;
		border-radius: 10px;
	}
	.menu:hover,
	.end:hover {
		font-weight: bold;
		background-color: white;
		color: black;
		transition: 0.5s;
		border-radius: 10px;
	}

	.end {
		border: 1px solid #005488;
		border-top: 1px solid #ffffff;
		margin-top: 255%;
		font-size: 20px;
		color: #ffffff;
		padding: 20px;
		text-decoration: none;
		text-align: center;
	}
`;
