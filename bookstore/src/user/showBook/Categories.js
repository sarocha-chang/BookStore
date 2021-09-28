import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

function Categories({ className, data }) {
  const [user] = React.useState(JSON.parse(localStorage.getItem("InLogin")));
  const [quantity] = React.useState(1);

  function onSubmit(e, data_detail) {
    e.preventDefault();
    if (user) {
      let data = {
        Customer_id: user._id,
        Book_id: data_detail,
        quantity: quantity,
      };
      Swal.fire("เพิ่มสินค้าเสร็จสิ้น").then(() => {
        axios.post(`/add_cart`, data);
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "กรุณาล็อคอินก่อนทำรายการ",
      });
    }
  }

  return (
    <div className={className}>
      <div className="box">
        <img src={data.imageUrl} alt={data.name} className="imgBookk" />
        <Link to={`/User/BookDetail/${data._id}`}>
          <h2>{data.name}</h2>{" "}
        </Link>
        <h3>{data.price} บาท </h3>
        <button onClick={(e) => onSubmit(e, data._id)}>
          เพิ่มไปยังตระกร้า
        </button>
      </div>
    </div>
  );
}

Categories.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default styled(Categories)`
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 15px;
  div.box {
    margin-left: 10px;
    padding-top: 15px;
    text-align: center;
    width: 16rem;
    border: 1px solid #d4caca;
    border-radius: 3px;
    .imgBookk {
      padding: 5px;
      width: 100px;
      height: 140px;
      box-shadow: 0px 0px 4px black;
      transition: 0.5s;
    }
    .imgBookk:hover {
      width: 140px;
      height: 200px;
      box-shadow: 0px 0px 6px black;
      transition: 0.7s;
    }
    h2 {
      padding: 15px 3px 0px 3px;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
    }
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    h3 {
      font-size: 15px;
    }
    button {
      font-size: 14px;
      padding: 5px;
      border: 1px solid #005488;
      border-radius: 5px;
      background-color: white;
      margin-bottom: 10px;
    }
    button:hover {
      border: 1px solid white;
      background-color: #005488;
      color: white;
      transition: 0.5s;
    }
  }
`;
