import React from "react";
// import {
// 	Button,
// 	Col,
// 	Card
// } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import styled from "styled-components";

function Categories({ className, data }) {
  const [user] = React.useState(JSON.parse(localStorage.getItem("InLogin")));
  const [quantity] = React.useState(1);

  function onSubmit(e, data_detail) {
    e.preventDefault();
    let data = {
      Customer_id: user._id,
      Book_id: data_detail,
      quantity: quantity,
    };
    Swal.fire("Added success!").then(() => {
      axios.post(`/add_cart`, data);
    });
  }

  return (
    <div className={className}>
      <div className="box">
        <img src={data.imageUrl} alt={data.name} className="imgBookk" />
        <Link to={`/BookDetail/${data._id}`}>
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
export default styled(Categories)`
  overflow: hidden;
  div.box {
    padding: 15px;
    text-align: center;
    width: 200px;
    height: 350px;
    border: 1px solid #d4caca;
    border-radius: 5px;
    .imgBookk {
      padding: 5px;
      width: 100px;
      box-shadow: 0px 0px 4px black;
    }
    h2 {
      padding-top: 15px;
      font-size: 16px;
      font-weight: bold;
    }
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    h3 {	
      padding-top: 25px;
      font-size: 14px;
    }
    button {
		display: flex;
		justify-content: flex-end;

      padding: 5px;
      border: 1px solid #005488;
      border-radius: 5px;
      background-color: white;
	  
    }
    button:hover {
      border: 1px solid white;
      background-color: #005488;
      color: white;
      transition: 0.5s;
    }
  }
`;
// <Col sm={5}>
// 	<Card
// 		border="gray"
// 		style={{
// 			width: "15rem",
// 			height: "345px",
// 			marginLeft: "20px",
// 			marginTop: "10px",
// 			WebkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
// 			MozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
// 			boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)",
// 		}}>
// 		<Card.Img
// 			variant="top"
// 			src={data.imageUrl}
// 			style={{
// 				width: "150px",
// 				height: "155px",
// 				marginTop: "10px",
// 				marginLeft: "45px",
// 			}}
// 		/>
// 		<Card.Body>
// 			<Link
// 				to={`/BookDetail/${data._id}`}
// 				style={{ textDecoration: "none" }}>
// 				<Card.Title
// 					style={{
// 						fontSize: "11px",
// 						fontFamily: "IBM Plex Sans Thai",
// 						color: "#000",
// 						fontWeight: "bold",
// 					}}>
// 					{data.name}
// 				</Card.Title>
// 			</Link>
// 		</Card.Body>
// 		<Card.Text
// 			style={{
// 				fontSize: "14px",
// 				fontFamily: "IBM Plex Sans Thai",
// 			}}>
// 			ราคา : {data.price} บาท
// 		</Card.Text>
// 		<Link to="/">
// 			<Button
// 				variant="primary"
// 				data-id={data._id}
// 				onClick={(e) => onSubmit(e, data._id)}
// 				style={{
// 					fontSize: "14px",
// 					fontFamily: "IBM Plex Sans Thai",
// 					borderRadius: "10px",
// 					paddingLeft: "45px",
// 					paddingRight: "45px",
// 					background: "none",
// 					marginBottom: "10px",
// 					color: "#000",
// 				}}>
// 				เพิ่มไปยังตระกร้า
// 			</Button>
// 		</Link>
// 	</Card>
// </Col>
