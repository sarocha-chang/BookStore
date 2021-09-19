import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Getcart from "../cart/getCart";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchBooks } from "../../app/actions";

function Payment({ className }) {
  const cart = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("InLogin")));

  var run = () =>
    new Promise(function (resolve, reject) {
      setUser(JSON.parse(localStorage.getItem("InLogin")));
      resolve();
    });

  useEffect(() => {
    function get() {
      run().then(() => {
        axios.get(`/get_cart/${user._id}`).then((res) => {
          dispatch(fetchBooks(res.data));
        });
      });
    }
    get();
  }, [dispatch]);

  return (
    <div className={className}>
      <div className="row">
        <div className="col-70">
          <h1> เพิ่มข้อมูลการจัดส่ง </h1>
          <form className="form-horizontal">
            <div className="two">
              <div className="col-10">
                <label> ชื่อ-นามสกุล: </label>
              </div>
              <div className="col-90">
                <input
                  type="text"
                  placeholder="กรุณากรอกชื่อ ตัวอย่าง นางสาวแสนดี คำปู้จู้"
                  className="long"
                />
              </div>
            </div>
            <div className="two">
              <div className="col-10">
                <label> บ้านเลขที่: </label>
              </div>
              <div className="col-90">
                <input
                  type="text"
                  placeholder="กรุณากรอกบ้านเลขที่"
                  className="medium"
                />
              </div>
              <div className="col-10">
                <label> จังหวัด: </label>
              </div>
              <div className="col-90">
                <input
                  type="text"
                  placeholder="กรุณากรอกจังหวัด"
                  className="medium"
                />
              </div>
            </div>
            <div className="two">
              <div className="col-10">
                <label> อำเภอ: </label>
              </div>
              <div className="col-90">
                <input
                  type="text"
                  placeholder="กรุณากรอกอำเภอ"
                  className="medium"
                />
              </div>
              <div className="col-10">
                <label> ตำบล: </label>
              </div>
              <div className="col-90">
                <input
                  type="text"
                  placeholder="กรุณากรอกตำบล"
                  className="medium"
                />
              </div>
            </div>
            <div className="two">
              <div className="col-10">
                <label> รหัสไปรษณีย์: </label>
              </div>
              <div className="col-90">
                <input
                  type="text"
                  placeholder="กรุณากรอกรหัสไปรษณีย์"
                  className="medium"
                />
              </div>
              <div className="col-10">
                <label> เบอร์โทรศัพท์: </label>
              </div>
              <div className="col-90">
                <input
                  type="text"
                  placeholder="กรุณากรอกเบอร์โทรศ้พท์"
                  className="medium"
                />
              </div>
            </div>
          </form>
          <div className="payment">
            <h1>วิธีการชำระเงิน</h1>
            <div className="type">
              <button className="btn">
                <input type="radio" name="payment" value="card" checked />
                Promtpay
              </button>
              <button className="btn">
                <input type="radio" name="payment" value="cash" />
                เก็บเงินปลายทาง
              </button>
            </div>
          </div>
          <div className="back">
          <div className="confirm">

            <Link to="/List">
              <button className="btnBack">
                <span>ย้อนกลับ</span>
              </button>
            </Link>
          </div>
            <div className="confirm">
              <button className="btn-secondary">
                ยืนยันการชำระเงิน จำนวน 350 THB
              </button>
            </div>
          </div>
        </div>
        <div className="col-30">
          <div className="box">
            <h4>รายการสั่งซื้อ</h4>
            <div className="price">
              <h5>
                ยอดเงินรวม <span>{cart.Total - 50} THB</span>
              </h5>
              <h5>
                ค่าส่ง <span>50 THB</span>
              </h5>
            </div>
            <h5>
              ยอดรวมสุทธิ <span>{cart.Total}THB</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(Payment)`
    overflow: hidden;
    .row {
      width: 100%;
      display: flex;
    }
    h1 {
      font-size: 26px;
      font-weight: bold;
      margin-left: 20px;
      padding-top: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #cecccc;
    }
    .col-70 {
      width: 60%;
      margin: 2rem;
      form.form-horizontal {
        margin-bottom: 2rem;
        align-self: center;
      }
      .two {
        display: flex;
        padding-top: 1rem;
        margin-left: 5rem;
      }
      .col-10 {
        float: left;
        width: 15%;
        margin-top: 22px;
        display: flex;
        justify-content: flex-end;
        label {
          font-size: 20px;
          font-weight: bold;
          vertical-align: top;
          display: inline-block;
        }
      }
      .col-90 {
        width: 100%;
        margin-top: 16px;

        input {
          font-family: "IBM Plex Sans Thai", sans-serif;
          border-radius: 5px;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
        }
        input.long {
          width: 60%;
        }
      }
      .payment {
        .type {
          padding-top: 1rem;
          width: 28%;
          display: flex;
          justify-content: space-between;
          padding-bottom: 3rem;
        }
        button.btn {
          border: 1px solid black;
          border-radius: 5px;
          padding: 12px;
        }
      }
      div.bacK{
        padding-top: 15rem;
        display: flex;
        flex-direction: row;
      }
      button.btnBack{
        border: 1px solid black;
          border-radius: 5px;
          padding: 12px;    }      }
      .confirm{

      .btn-secondary{
        border: 1px solid black;
          border-radius: 5px;
          padding: 12px;    }
    }
    }
    .col-30 {
      height: 10%;
      margin-top: 4rem;
      margin-left: 14rem;
      border: 1px solid #cecccc;
      padding: 20px;
      padding: 14px;
      width: 400px;
      border-radius: 5px;
      h4 {
        text-align: center;
        font-weight: bold;
      }
      .list {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border-bottom: 1px solid #cecccc;
        margin-bottom: 2rem;
      }
      h5 {
        display: flex;
        margin-bottom: 1.5rem;
        justify-content: space-between;
      }
    }
  `;
