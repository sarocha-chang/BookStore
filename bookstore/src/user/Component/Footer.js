import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
function navbar_list({ className }) {
	return (
		<>
			<footer style={{ background: "#e65100", marginTop: "20px" }}>
				<Row>
					<Col sm={5} style={{ marginTop: "22px" }}>
						<ul>
							<li
								style={{
									listStyleType: "none",
									color: "#fff",
									marginLeft: "38px",
								}}>
								<box-icon name="location-plus" color="#005488"></box-icon> ซอย
								สุโขทัย 5 สุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200
							</li>
							<li
								style={{
									listStyleType: "none",
									color: "#fff",
									marginLeft: "38px",
									marginTop: "10px",
								}}>
								<box-icon name="phone" color="#005488"></box-icon> 053-120-446
							</li>
						</ul>
					</Col>
					<Col sm={3}>
						<ul>
							<li
								style={{
									listStyleType: "none",
									marginTop: "40px",
									marginLeft: "55px",
								}}>
								<box-icon
									name="copyright"
									type="solid"
									color="#005488"></box-icon>
							</li>
						</ul>
					</Col>
					<Col sm={4} style={{ marginTop: "8px" }}>
						<ul>
							<li
								style={{
									listStyleType: "none",
									color: "#fff",
									marginLeft: "130px",
								}}>
								<box-icon
									type="logo"
									name="instagram"
									color="#005488"></box-icon>
								chachax_bookstore
							</li>
							<li
								style={{
									listStyleType: "none",
									color: "#fff",
									marginLeft: "130px",
								}}>
								<box-icon type='logo' name='twitter' color='#005488' ></box-icon>
                chachax_bookstore
							</li>
							<li
								style={{
									listStyleType: "none",
									color: "#fff",
									marginLeft: "130px",
								}}>
								<box-icon type='logo' name='internet-explorer' color='#005488' ></box-icon>
                www.chachax.com
							</li>
						</ul>
					</Col>
				</Row>
			</footer>
		</>
	);
}
navbar_list.propTypes = {
	className: PropTypes.string.isRequired,
};
export default styled(navbar_list)`
	overflow: hidden;
	font-family: "IBM Plex Sans Thai", sans-serif;
	position: relative;
	.brand {
		font-size: 26px;
		font-weight: normal;
	}
	.nav-right {
		a.login {
			margin-bottom: 1rem;
			margin-right: 1rem;
		}
		.cart box-icon {
			margin-top: 1rem;
		}
		/*  li{
        list-style-type: none;
    } */
	}
`;
