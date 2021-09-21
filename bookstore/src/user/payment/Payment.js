import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Getitem from "./getItem";
import axios from "axios";
import { Link , useHistory} from "react-router-dom";
import Swal from "sweetalert2";

import { fetchReceipts,searchReceipt } from "../../app/Receipt/actions";

function Payment({ className }) {
  const cart = useSelector((state) => state.receipts);
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [homeNo, setHomeNo] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [typePay, setTypePay] = useState("");
  const [data, setData] = useState();
  const history = useHistory();
	const [user] = useState(JSON.parse(localStorage.getItem("InLogin")));

	
	useEffect(() => {
		axios.get(`/get_cart/${user._id}`).then((res) => {
      console.log(user._id);
			dispatch(fetchReceipts(res.data));
			// dispatch(searchReceipt());
		});
	}, [dispatch, user._id]);


  function onSubmit() {
    if (typePay === "promt") {
      Swal.fire({
        title: "กรุณาสแกน QR CODE",
        text: `ยอดรวมสุทธิ: ${cart.Total} THB`,
        imageUrl: "https://sv1.picz.in.th/images/2021/09/20/C2Umiy.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "QR",
      }).then(() => {
        history.push("/List");
      })
    } else {
      Swal.fire({
        title: "กรุณาชำระเงินเมื่อได้รับสินค้า",
        text: `ยอดรวมสุทธิ: ${cart.Total} THB`,
      }).then(() => {
        let address = {
          fullname,
          homeNo,
          province,
          district,
          subDistrict,
          zip,
          phone
        }
        setData({cart,address})
        axios.post("/payment",data).then(() =>{
          // history.push("/List");
        }).catch((err) =>{
          console.log(err);
        })
      })
    }
  }

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
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
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
                  value={homeNo}
                  onChange={(event) => setHomeNo(event.target.value)}
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
                  value={province}
                  onChange={(event) => setProvince(event.target.value)}
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
                  value={district}
                  onChange={(event) => setDistrict(event.target.value)}
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
                  value={subDistrict}
                  onChange={(event) => setSubDistrict(event.target.value)}
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
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
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
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="payment">
            <h1>วิธีการชำระเงิน</h1>
            <div className="type">
              <button className="btn">
                <input
                  type="radio"
                  name="payment"
                  value="promt"
                  onChange={(event) => setTypePay(event.target.value)}
                />
                Promtpay
              </button>
              <button className="btn">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={(event) => setTypePay(event.target.value)}
                />
                เก็บเงินปลายทาง
              </button>
            </div>
          </div>
        </div>
        <div className="col-30">
          <div className="box">
            <h4>รายการสั่งซื้อ</h4>
            <h4 className="name">
              สินค้า <span>ราคารวม</span>
            </h4>
            {cart.Order ? (
              cart.Order.map((data) => {
                return <Getitem key={data.Book.Buy_id} data={data} />;
              })
            ) : (
              <h5>
                <span>Loading</span>
              </h5>
            )}
            <div className="price">
              <h5>
                ยอดเงินรวม <span>{cart.Total - 50} THB</span>
              </h5>
              <h5>
                ค่าส่ง <span>50 THB</span>
              </h5>
            </div>
            <h5 className="total">
              ยอดรวมสุทธิ <span>{cart.Total}THB</span>
            </h5>
          </div>
          <div className="back">
            <div className="confirm">
              <Link to="/List">
                <button className="btnBack">
                  <span>ย้อนกลับ</span>
                </button>
              </Link>
              <button className="btn-secondary" onClick={onSubmit}>
                ยืนยันการชำระเงิน จำนวน {cart.Total} THB
              </button>
            </div>
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
    margin: 5rem 2rem 2rem 4rem;
    border: 1px solid #cecccc;
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
        margin-left: 3rem;
      }
      button.btn {
        border: 1px solid black;
        border-radius: 5px;
        padding: 12px;
      }
    }
  }
  .col-30 {
    margin: 5rem 2rem 2rem 2rem;
    width: 25%;
    .box {
      border: 1px solid #cecccc;
      padding: 20px;
      width: 600px;
      margin-bottom: 2rem;
      border-radius: 5px;
    }
    h4 {
      text-align: center;
      font-weight: bold;
    }
    .price {
      border-top: 1px solid #cecccc;
      border-bottom: 1px solid #cecccc;
      padding-top: 1rem;
    }
    .list {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border-bottom: 1px solid #cecccc;
      margin-bottom: 2rem;
    }

    h4.name {
      padding-top: 0.5rem;
      display: flex;
      margin-bottom: 1.5rem;
      justify-content: space-between;
      font-size: 20px;
    }
    h5 {
      padding-top: 0.5rem;
      display: flex;
      margin-bottom: 1.5rem;
      justify-content: space-between;
      font-size: 18px;
    }
    h5.total {
      padding-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
    }
    div.bacK {
      padding-top: 15rem;
    }
    button.btnBack {
      background-color: #f35a5a;
      border: 1px solid #cecccc;
      border-radius: 5px;
      padding: 12px;
      color: white;
    }

    .confirm {
      width: 600px;
      display: flex;
      justify-content: space-around;
      .btnBack:hover {
        border: 1px solid #ec5858;
        background-color: #ec5858;
      }
      .btn-secondary {
        border: 1px solid #cecccc;
        border-radius: 5px;
        padding: 12px;
        width: 80%;
      }
    }
  }
`;
