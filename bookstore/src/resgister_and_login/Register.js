import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";

function Register({ className }) {
  const [firstname, setFirstname] = useState([""]);
  const [lastname, setLastname] = useState([""]);
  const [username, setUsername] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [phone, setPhone] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [customers, setCustomer] = useState([]);


  useEffect(() => {
		axios.get("http://localhost:3001/showCustomer").then((res) => {
			setCustomer(res.data);
		});
	}, []);



  return (
    <div className={className}>
      <div className="parent">
        <div className="div1">
          <div className="box">
            <h1>สมัครสมาชิก</h1>
            <form id="create-form" className="form">
              <div className="input-group">
                <label htmlFor="firstname">ชื่อ:</label>
                <input
                  name="firstname"
                  type="text"
                  id="firstname"
                  placeholder="ชื่อ"
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">นามสกุล:</label>
                <input
                  name="lastname"
                  type="text"
                  id="lastname"
                  placeholder="นามสกุล"
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="username">ชื่อผู้ใช้:</label>
                <input
                  name="username"
                  type="text"
                  id="username"
                  placeholder="ชื่อผู้ใช้"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">รหัสผ่าน:</label>
                <input
                  name="password"
                  type="text"
                  id="password"
                  placeholder="รหัสผ่าน"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="tel">เบอร์โทร:</label>
                <input name="tel" type="text" id="tel" placeholder="เบอร์โทร" onChange={(event) => setPhone(event.target.value)}/>
                
              </div>
              <div className="input-group">
                <label htmlFor="email">อีเมลล์:</label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  placeholder="อีเมลล์"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <button type="submit" className="Back">
                กลับหน้าหลัก
              </button>
              <button type="submit" className="Login">
                ลงทะเบียน
              </button>
            </form>
          </div>
        </div>
        <div className="div2">
          <img src={require("./image2.png").default}></img>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Register)`
  .parent {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 500px;
    border: 1px solid #005488;
  }

  .div1 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div2 {
    display: flex;
    overflow: hidden;
    grid-area: 1 / 1 / 2 / 2;
  }
  .box {
    text-align: center;
    margin-bottom: 85px;
    margin-top: 55px;
  }
  form input {
    padding: 0.3rem 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    width: 60%;
    font-family: "IBM Plex Sans Thai", sans-serif;
  }
  form .input-group {
    margin-bottom: 1.5rem;
  }

  form {
    margin-right: 132px;
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
    margin-left: 151px;
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
  .div2 img {
    width: 120%;
    height: auto;
  }

  label {
    display: inline-block;
    width: 140px;
    padding-right: 20px;
    text-align: right;
  }
`;
