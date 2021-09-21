import React from "react";
import { Button, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import { useDispatch } from "react-redux";
import { fetchReceipts } from "../../app/Receipt/actions";

export default function CategoriesAll({ data, size }) {
	const [user] = React.useState(JSON.parse(localStorage.getItem("InLogin")));
	const [quantity] = React.useState(1);
	const dispatch = useDispatch();


	function onSubmit(e, data_detail) {
		e.preventDefault();
		let data = {
			Customer_id: user._id,
			Book_id: data_detail,
			quantity: quantity,
		};
		Swal.fire("Added success!").then(() => {
			axios.post(`/add_cart`, data).then(() =>{
				axios.get(`/get_cart/${user._id}`).then((res) => {
					dispatch(fetchReceipts(res.data));
				});
			})
		});
	}

	return (
		<Col sm={3} key={data._id}>
			<Card
				border="gray"
				style={{
					width: "15rem",
					height: "365px",
					marginLeft: "55px",
					marginTop: "20px",
					WebkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
					MozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
					boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)",
				}}>
				<Card.Img
					variant="top"
					src={data.imageUrl}
					style={{
						width: "160px",
						height: "180px",
						marginTop: "10px",
						marginLeft: "40px",
					}}
				/>
				<Card.Body>
					<Link
						to={`/User/BookDetail/${data._id}`}
						style={{ textDecoration: "none" }}>
						<Card.Title
							style={{
								fontSize: "13px",
								fontFamily: "IBM Plex Sans Thai",
								color: "#000",
								textDecoration: "none",
								marginLeft: "30px",
								fontWeight: "bold",
							}}>
							{data.name}
						</Card.Title>
					</Link>
				</Card.Body>
				<Card.Text
					style={{
						fontSize: "16px",
						fontFamily: "IBM Plex Sans Thai",
						marginLeft: "60px",
					}}>
					ราคา : {data.price} บาท
				</Card.Text>
				<Link to="/User">
					<Button
						variant="primary"
						data-id={data._id}
						onClick={(e) => onSubmit(e, data._id)}
						className="btn"
						style={{
							fontSize: "14px",
							fontFamily: "IBM Plex Sans Thai",
							marginLeft: "35px",
							marginBottom: "10px",
							borderRadius: "10px",
							paddingLeft: "35px",
							paddingRight: "35px",
							background: "none",
							color: "#000",
						}}>
						เพิ่มไปยังตระกร้า
					</Button>
				</Link>
			</Card>
		</Col>
	);
}
