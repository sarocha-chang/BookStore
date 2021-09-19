import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchBook, fetchBooks } from "../../app/actions";
import Swal from "sweetalert2";

function BookDetail({ className }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("InLogin")));
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();

  var run = () =>
    new Promise((resolve, reject) => {
      setUser(JSON.parse(localStorage.getItem("InLogin")));
      resolve();
    });

  useEffect(() => {
    axios.get(`http://localhost:3001/show_detail/${id}`).then((res) => {
      dispatch(searchBook(res.data));
    });
  }, [dispatch, id]);
  console.log(book);

  function onSubmit(event) {
    event.preventDefault();
    run()
      .then(() => {
        let data = {
          Customer_id: user._id,
          Book_id: id,
          quantity: quantity,
        };
        return data;
      })
      .then((data) => {
        Swal.fire("Added succes!").then(() => {
          axios
            .post(`http://localhost:3001/add_cart`, data)
            .then((response) => {
              axios.get(`/get_cart/${user._id}`).then((res) => {
                dispatch(fetchBooks(res.data));
              }).then(() => {
                history.push("/List");
              })
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }

  return (
    <div className={className}>
      <div className="row">
        <div className="col-60">
          <img src={book.imageUrl} alt={book.name} className="imgBook" />
        </div>
        <div className="col-40">
          <h1>{book.name}</h1>
          <div className="author">
            <p>
              ผู้แต่ง: <span>{book.author} </span>ประเภท:
              <span>{book.type}</span>
            </p>
          </div>
          <div className="star">
            <box-icon name="star" type="solid" color="#ffd058"></box-icon>
            <box-icon name="star" type="solid" color="#ffd058"></box-icon>
            <box-icon name="star" type="solid" color="#ffd058"></box-icon>
            <box-icon name="star" type="solid" color="#ffd058"></box-icon>
            <box-icon name="star-half" type="solid" color="#ffd058"></box-icon>
          </div>
          <h2>{book.price} THB </h2>
          <h3>คำอธิบาย:</h3>
          <div className="book-des">
            <p>{book.description}</p>
          </div>
          <div className="book-quantity">
            <input
              type="number"
              className="quantity"
              min="1"
              max="100"
              onChange={(event) => setQuantity(event.target.value)}
              value={quantity}
            />
            <Link to="/">
              <button className="btn" onClick={onSubmit}>
                เพิ่มสินค้าลงตะกร้า
              </button>
            </Link>
          </div>
        </div>
        <div className="back">
          <Link to="/List">
            <button className="btn btn-secondary">
              <span>
                <box-icon name="arrow-back" color="#fbf8f8"></box-icon>
                <span>ย้อนกลับ</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default styled(BookDetail)`
  font-family: "IBM Plex Sans Thai", sans-serif;
  height: 700;
  margin: 6rem;
  .row {
    height: auto;
    width: 90%;
    border: 1px solid #d4caca;
    margin-left: 6rem;
    padding: 3rem;
    border-radius: 10px;
    position: relative;
  }
  .col-60 {
    width: 60%;
    text-align: center;
    .imgBook {
      height: 550px;
    }
  }
  .col-40 {
    width: 40%;
    padding-right: 4rem;
    h1 {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .author {
      p {
        font-size: 16px;
        font-weight: bold;
        span {
          font-weight: normal;
        }
      }
    }
    .star {
      margin-bottom: 2.5rem;
    }
    h2 {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 3rem;
    }
    h3 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }
    .book-des {
      border: 1px solid #d4caca;
      padding: 1rem;
      border-radius: 15px;
      margin-bottom: 1.5rem;
      p {
        font-size: 16px;
        font-weight: normal;
      }
    }
    .book-quantity {
      display: flex;
      input {
        border: 1px solid #d4caca;
        border-radius: 8px;
        text-align: center;
        font-size: 18px;
        padding: 12px;
        margin-right: 1rem;
      }
      .btn {
        border: 1px solid #d4caca;
        border-radius: 8px;
        font-size: 18px;
        font-weight: bold;
        padding: 15px;
      }
      .btn:hover {
        background-color: #3e3838;
        color: white;
      }
    }
  }
  .back {
    bottom: -10%;
    left: -1%;
    position: absolute;
    span {
      display: flex;
      justify-content: space-evenly;
      font-size: 1.1rem;
    }
  }
`;
