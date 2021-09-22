import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
function navbar_list({ className }) {
  return (
    <>
      <footer style={{ background: "#005488", marginTop: "20px" , fontFamily:"'IBM Plex Sans Thai', sans-serif" }} className={className}>
        <Row>
          <Col sm={5} style={{ marginTop: "22px" }}>
            <ul>
              <li
                style={{
                  listStyleType: "none",
                  color: "#fff",
                  marginLeft: "38px",
                }}
              >
                <box-icon name="location-plus" color="#fff"></box-icon> ซอย
                สุโขทัย 5 สุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200
              </li>
            </ul>
          </Col>
          <Col sm={3}></Col>
          <Col sm={4} style={{ marginTop: "8px" }}>
            <ul>
              <li
                className="social"
                style={{
                  listStyleType: "none",
                  color: "#fff",
                  marginLeft: "260px",
				  marginTop: "10px"
                }}
              >
				  <div><box-icon type="logo" name="instagram" color="#fff"></box-icon>
                <box-icon type="logo" name="twitter" color="#fff"></box-icon>
                <box-icon
                  type="logo"
                  name="internet-explorer"
                  color="#fff"
                ></box-icon>
				</div>
				<span style={{
					fontSize: "20px",
				}}> :chachax_bookstore</span>

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
  }
  .social {
	  li{
		  div{
			  margin-top: 5px;
		  }
	  }
  }
`;
