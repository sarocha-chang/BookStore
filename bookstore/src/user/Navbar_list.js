import { Button, FormControl } from "react-bootstrap";
import "boxicons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function navbar_list({ className }) {
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
            style={{paddingRight:"140px"}}
          />
          <Button variant="outline-success" style={{color:"#fff",background:"#e65100",border:"none"}}>Search</Button>
        </form>
        <div className="nav-right" >
          <Link to={localStorage.getItem("username") ? '#':'/login' }    className="login" >
          {localStorage.getItem("username") ?localStorage.getItem("username"):'เข้าสู่ระบบ' }   
          </Link>
          <Link to="/Cart" className="cart">
            <box-icon name="shopping-bag" color="#fff" ></box-icon>
          </Link>
        </div>
      </header>
    </>
  );
}
export default styled(navbar_list)`
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
`;
