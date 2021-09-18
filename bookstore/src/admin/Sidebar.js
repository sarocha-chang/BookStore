import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Sidebar ({className}){
    return (
      <>
        <nav className={className}>
          <Link to="/HomeAdmin" className="brand">CHACHAX</Link>
          <Link to="/HomeAdmin" className="menu"> ข้อมูลหนังสือ </Link>
          <Link to="/AddBookAdmin" className="menu"> เพิ่มหนังสือใหม่ </Link>
          <Link to="/" className="end"> ออกจากระบบ </Link>
        </nav>
      </>
    );
}
Sidebar.propTypes = {
    className: PropTypes.string.isRequired
}; 



export default styled(Sidebar)`
  margin: 0;
  background-color: #005488;
  width: 225px;
  height: 100%;
  position:fixed;
  font-family: 'IBM Plex Sans Thai', sans-serif;

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
  }
  .menu:hover {
    font-weight: bold;
    transition: 0.5s;
  }
  .end {
    display: block;
    border-top: 1px solid #ffffff;
    margin-top: 265%;
    font-size: 20px;
    color: #ffffff;
    padding: 20px;
    text-decoration: none;
    text-align: center;
  }
`;
