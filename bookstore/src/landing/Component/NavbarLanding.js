import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux"
import PropTypes from "prop-types";
import { removeCustomer,setCustomer } from "../../app/Customer/actions"

function NavbarLanding({className}) {
	const dispatch = useDispatch()
	const customer = useSelector((state) => state.customers)

	function logOut() {
		localStorage.removeItem("InLogin")
		dispatch(removeCustomer())
	}

	React.useEffect(() =>{
		dispatch(setCustomer(JSON.parse(localStorage.getItem("InLogin"))))
	},[dispatch])


	return (
		<header className={className}>
			<h3>
				<Link to="/">CHACHAX</Link>
			</h3>
			<nav>
				<Link
					to={customer ? "/" : "/Registration"}
					className="login"
					style={{ padding: "10px 15px", fontSize: "16px" }}>
					{customer
						? customer.username
						: "เข้าสู่ระบบ"}
				</Link>
				{customer ? (
					<Link
						onClick={logOut}
						to="/User"
						style={{ padding: "10px 15px", fontSize: "16px" }}>
						Logout
					</Link>
				) : null}
			</nav>
		</header>
	)
}
NavbarLanding.propTypes = {
	className: PropTypes.string.isRequired,
	customer: PropTypes.object.isRequired,
};


export default styled(NavbarLanding)`
	font-family: "IBM Plex Sans Thai", sans-serif;
	h3{
		margin-top: 0.7%;
		font-size: 26px;
		font-weight: normal;
	}

`
