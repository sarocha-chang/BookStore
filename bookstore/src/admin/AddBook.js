import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

function AddBook({className}) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      author: author,
      description: description,
      type: type,
      price: parseInt(price),
      quantity: parseInt(quantity),
      imageUrl: imageUrl,
      status: status,
    };
    axios
      .post("http://localhost:3001/add_book", data)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={className}>
      <h1 className="top"> เพิ่มหนังสือใหม่ </h1>{" "}
      <form className="add">
        <div className="form-group">
          <label> ชื่อหนังสือ: </label>{" "}
          <input
            type="text"
            placeholder="กรุณากรอกชื่อหนังสือ"
            onChange={(event) => setName(event.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label> ชื่อผู้แต่ง: </label>{" "}
          <input
            type="text"
            placeholder="กรุณากรอกชื่อผู้เขียน"
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label> คำอธิบาย: </label>{" "}
          <input
            type="text"
            placeholder="กรุณากรอกคำอธิบาย"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label> ประเภท: </label>{" "}
          <select onChange={(event) => setType(event.target.value)}>
            <option> นวนิยาย </option> <option> ภาษา </option>{" "}
            <option> ความรู้ทั่วไป </option> <option> พัฒนาตนเอง </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="form-group">
          <label> ราคา: </label>{" "}
          <input
            type="text"
            placeholder="กรุณากรอกราคา"
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label> จำนวน: </label>{" "}
          <input
            type="text"
            placeholder="กรุณากรอกจำนวนหนังสือ"
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label> ลิงค์รูปภาพ: </label>{" "}
          <input
            type="text"
            placeholder="กรุณากรอกลิงค์รูปภาพ"
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <label> สถานะ: </label>{" "}
          <select onChange={(event) => setStatus(event.target.value)}>
            <option> ปกติ </option> <option> มาใหม่ </option>{" "}
            <option> ยอดนิยม </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="form-group">
          <button type="cancel"> ยกเลิก </button>{" "}
          <button type="submit" onClick={onSubmit}>
            {" "}
            ยืนยัน{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
export default styled(AddBook)`
  font-family: "IBM Plex Sans Thai", sans-serif;
  margin: 0px;
  h1.top {
    font-family: "IBM Plex Sans Thai", sans-serif;
    font-size: 26px;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  div.form-group {
    label {
      font-size: 20px;
      font-weight: bold;
    }
    input {
      width: 80%;
      border-radius: 5px;
    }
  }
`;
