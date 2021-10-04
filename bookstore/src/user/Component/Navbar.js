import React from "react";
import {Button, FormControl} from "react-bootstrap";
import "boxicons";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

import {removeCustomer, setCustomer} from "../../app/Customer/actions";

function Navbar_list({className}) {
	const dispatch = useDispatch();
	const customer = useSelector((state) => state.customers);

	function logOut() {
		localStorage.removeItem("InLogin");
		dispatch(removeCustomer());
	}

	React.useEffect(() => {
		dispatch(setCustomer(JSON.parse(localStorage.getItem("InLogin"))));
	}, [dispatch]);

	return (
		<>
			<header className={className}>
				<Link to="/" className="brand">
					CHACHAX
				</Link>
				<form className="d-flex">
					<FormControl
						type="search"
						placeholder="Search"
						className="search"
						aria-label="Search"
						style={{paddingRight: "140px"}}
					/>
					<Button style={{color: "#fff", background: "#e65100", border: "none"}}>Search</Button>
				</form>
				<div className="nav-right">
					<Link
						to={customer ? "/" : "/login"}
						className="login"
						style={{fontSize: "16px", marginTop: "2%"}}>
						{customer ? customer.username : "เข้าสู่ระบบ"}
					</Link>
					{customer ? (
						<Link onClick={logOut} to="/" style={{fontSize: "16px", marginTop: "2%"}}>
							ออกจากระบบ
						</Link>
					) : null}
					<Link to="/cart" className="cart" style={{marginLeft: "8px"}}>
						<box-icon name="shopping-bag" color="#fff"></box-icon>
					</Link>
				</div>
			</header>
		</>
	);
}
Navbar_list.propTypes = {
	className: PropTypes.string.isRequired,
};
export default styled(Navbar_list)`
	font-family: "IBM Plex Sans Thai", sans-serif;
	position: relative;
	.brand {
		font-size: 26px;
		font-weight: normal;
	}
	.nav-right {
		display: flex;
		margin-top: 0;
		a {
			padding: 10px 15px;
		}
	}
`;
