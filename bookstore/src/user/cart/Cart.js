import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import Getcart from "./getCart";


function ShowCart({ className }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("InLogin")));

  var run = () => new Promise(function (resolve, reject) {
    setUser(JSON.parse(localStorage.getItem("InLogin")));
    resolve();
    }); 

  useEffect(() => {
    async function get() {
        run().then(() => {
            axios.get(`http://localhost:3001/get_cart/${user._id}`).then((res) => {
                setCart(res.data);
              })
        });
    }
    get();
  }, []);

  return (
    <div className={className}>
      <div className="cart">
        <h1> ตะกร้าสินค้า </h1>
        <table className="ShowBook">
          <thead>
            <tr>
              <th>รูป</th>
              <th>ชื่อหนังสือ</th>
              <th> ราคา</th>
              <th>จำนวน</th>
              <th>รวม</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.Order ? (
              cart.Order.map((data) => {
                return <Getcart key={data.Buy.Buy_id} data={data} />;
              })
            ) : (
              <tr>
                <td>sss</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

ShowCart.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
};

export default styled(ShowCart)`
  margin-bottom: 50px;
  width: 98%;
  h1.top {
    font-family: "IBM Plex Sans Thai", sans-serif;
    padding-top: 40px;
    margin-top: 0px;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .ShowBook {
    border-collapse: collapse;
    border-radius: 15px;
    width: 100%;
    table-layout: fixed;
    thead tr th {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 30px;
      border-bottom: 1px solid #e5e5e5;
    }

    td {
      color: black;
      font-size: 18px;
      text-align: center;
      padding: 25px 10px 10px 10px;
    }
  }
  form.form-inline {
    text-align: center;
    margin-bottom: 2rem;
  }
  input.search {
    font-family: "IBM Plex Sans Thai", sans-serif;
    padding: 5px;
    border-radius: 12px;
    font-size: 16px;
    width: 40%;
    justify-content: center;
    transition: border 0.3s;
  }
  input.search:focus {
    outline: none;
    border-radius: 12px;
    border: 2px solid #ffc531;
    transition: border 0.3s;
    font-family: "IBM Plex Sans Thai", sans-serif;
    padding: 5px;
    font-size: 16px;
    width: 40%;
    justify-content: center;
  }
`;
