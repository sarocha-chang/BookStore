import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function BookDetail({ className }) {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/show_detail/${id}`).then((res) => {
      setBook(res.data);
      console.log(book);
    });
  }, []);

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={className}>
      <h1 className="top"> แก้ไขข้อมูลหนังสือ </h1>
      <div className="row">
        <div className="col-10">
          <label> ชื่อหนังสือ: </label>
        </div>
        <div className="col-90">
          <input
            type="text"
            placeholder="กรุณากรอกชื่อหนังสือ"
            className="medium"
            value={book.name}
          />
        </div>
      </div>
    </div>
  );
}

export default styled(BookDetail)`
  font-family: "IBM Plex Sans Thai", sans-serif;
`;
