import React from "react";
import {
	Button,
	Col,
	Card
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function Categories({data}) {
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
			axios.post(`/add_cart`, data)
		});
	}

	return (
		<Col sm={5}>
			<Card
				border="gray"
				style={{
					width: "15rem",
					height: "345px",
					marginLeft: "20px",
					marginTop: "10px",
					WebkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
					MozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
					boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)",
				}}>
				<Card.Img
					variant="top"
					src={data.imageUrl}
					style={{
						width: "150px",
						height: "155px",
						marginTop: "10px",
						marginLeft: "45px",
					}}
				/>
				<Card.Body>
					<Link
						to={`/BookDetail/${data._id}`}
						style={{ textDecoration: "none" }}>
						<Card.Title
							style={{
								fontSize: "11px",
								fontFamily: "IBM Plex Sans Thai",
								color: "#000",
								fontWeight: "bold",
							}}>
							{data.name}
						</Card.Title>
					</Link>
				</Card.Body>
				<Card.Text
					style={{
						fontSize: "14px",
						fontFamily: "IBM Plex Sans Thai",
					}}>
					ราคา : {data.price} บาท
				</Card.Text>
				<Link to="/">
					<Button
						variant="primary"
						data-id={data._id}
						onClick={(e) => onSubmit(e, data._id)}
						style={{
							fontSize: "14px",
							fontFamily: "IBM Plex Sans Thai",
							borderRadius: "10px",
							paddingLeft: "45px",
							paddingRight: "45px",
							background: "none",
							marginBottom: "10px",
							color: "#000",
						}}>
						เพิ่มไปยังตระกร้า
					</Button>
				</Link>
			</Card>
		</Col>
	);
}
