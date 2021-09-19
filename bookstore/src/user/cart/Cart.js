import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import Getcart from "./getCart";
function ShowCart({ className }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("InLogin")));

  var run = () =>
    new Promise(function (resolve, reject) {
      setUser(JSON.parse(localStorage.getItem("InLogin")));
      resolve();
    });

  useEffect(() => {
    async function get() {
      run().then(() => {
        axios.get(`http://localhost:3001/get_cart/${user._id}`).then((res) => {
          setCart(res.data);
        });
      });
    }
    get();
  }, []);

  return (
    <div className={className}>
      <div className="row">
        <div className="col-70">
          <h1> ตะกร้าสินค้า </h1>
          <table className="ShowBook">
            <thead>
              <tr>
                <th>ภาพหนังสือ</th>
                <th>ชื่อหนังสือ</th>
                <th>ราคา</th>
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
                  <td>Loading . . .</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-30">
          <div className="box">
            <h4>รวมทั้งหมด</h4>
            <div className="price">
              <h5>
                ยอดเงินรวม <span>300 THB</span>
              </h5>
              <h5>
                ค่าส่ง <span>50 THB</span>
              </h5>
            </div>
            <h5>
                ยอดรวมสุทธิ <span> 350 THB</span>
              </h5>
              <div className="btnsub">
              <button className="btn btn-secondary" >ดำเนินการชำระเงิน</button>
              </div>
          </div>
        </div>
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
  .row {
    margin-left: 2rem;
    h1 {
      font-family: "IBM Plex Sans Thai", sans-serif;
      padding-top: 50px;
      margin-left: 6rem;
      font-weight: bold;
      font-size: 28px;
      text-align: left;
      margin-bottom: 2.5rem;
    }
    .col-70 {
      width: 70%;
      .ShowBook {
        border: 1px solid #cecccc;
        border-collapse: collapse;
        width: 80%;
        margin: 2rem;
        table-layout: fixed;
        thead tr th {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          padding: 20px;
          border-bottom: 1px solid #cecccc;
        }
        td {
          color: black;
          font-size: 18px;
          text-align: center;
          border-bottom: 1px solid #e5e5e5;
          padding: 25px 10px 20px 10px;
        }
      }
    }
    .col-30 {
      width: 30%;
      margin-top: 8rem;
      .box {
        border: 1px solid #cecccc;
        padding: 14px;
        width: 400px;
        border-radius: 5px;
        h4 {
          text-align: center;
          font-weight: bold;
        }
        .price {
            margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          border-bottom: 1px solid #cecccc;
          margin-bottom: 2rem;
        }
        h5{
              display: flex;
              margin-bottom: 1.5rem;
              justify-content: space-between;
              
          }
          
        .btnsub{
            margin-top: 2rem;
            display: flex;
            justify-content:center;
        } 
        
      }
    }
  }
`;
