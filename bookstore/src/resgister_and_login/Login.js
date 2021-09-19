import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link ,useHistory} from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Login({ className }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [InLogin, setInLogin] = useState("");


  function  onSubmit (event) {
    event.preventDefault();
    const data = {
      username: username,
      password: password
    }
    axios.post("http://localhost:3001/login",data)
    .then((response) => {
      setInLogin(response.data);
      console.log(response.data);
  
      
    }).catch((error) => {
      
    });
  }



  return (
    <div className={className}>
      <div className="parent">
        <div className="div1">
          <img src={require("./image1.png").default}></img>
        </div>

        <div className="div2">
          <div className="box">
            <h1>เข้าสู่ระบบ</h1>
            <form id="create-form" className="form">
              <div className="input-group">
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="ชื่อผู้ใช้"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="รหัสผ่าน"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="link">
                <Link to="/Register"><a href="#">ยังไม่มีบัญชีผู้ใช้ ?</a></Link>
              </div>

              <Link to="/Home">  <button type="submit" className="Back">
                กลับหน้าหลัก
              </button> </Link>
              <button type="submit" className="Login" onClick={onSubmit}>
                เข้าสู่ระบบ
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Login)`
  .parent {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 500px;
    border: 1px solid #005488;
  }

  .div1 {
    display: flex;
    overflow: hidden;
    grid-area: 1 / 2 / 2 / 3;
  }
  .div2 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .box {
    text-align: center;
    margin-top: 150px;
  }
  form input {
    padding: 0.3rem 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    width: 70%;
    font-family: "IBM Plex Sans Thai", sans-serif;
  }
  form .input-group {
    margin-bottom: 1.5rem;
    justify-content: center;
  }
  form .link{
    margin-bottom: 1.5rem;
    margin-left:8rem;
  }
  a {
    color: orange;
  }
  .Back {
    font-size: 1rem;
    line-height: 1.5;
    margin-right: 1.5rem;
    padding: 0.5rem 1.7rem;
    cursor: pointer;
    color: #ffffff;
    background-color: #f8414c;
    border-radius: 0.25rem;
    border: none;
    font-family: "IBM Plex Sans Thai", sans-serif;
  }
  .Login {
    font-size: 1rem;
    line-height: 1.5;
    margin-right: 1.5rem;
    padding: 0.5rem 1.7rem;
    cursor: pointer;
    color: #ffffff;
    background-color: #5e5e5e;
    border-radius: 0.25rem;
    border: none;
    font-family: "IBM Plex Sans Thai", sans-serif;
  }
  .div1 img {
    width: 120%;
    height: auto;
  }
`;
