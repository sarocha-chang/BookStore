import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { updateBook } from "../app/actions"

function EditBook({ className }) {
	const { id } = useParams();

	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");
	const [price, setPrice] = useState("");
	const [quantity, setQuantity] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [status, setStatus] = useState("");

	const history = useHistory();
  const dispatch = useDispatch()

	useEffect(() => {
		axios.get(`http://localhost:3001/show_detail/${id}`).then((res) => {
			let {
				name,
				author,
				description,
				type,
				price,
				quantity,
				imageUrl,
				status,
			} = res.data;
			setName(name);
			setAuthor(author);
			setDescription(description);
			setType(type);
			setPrice(price);
			setQuantity(quantity);
			setImageUrl(imageUrl);
			setStatus(status);
		});
	}, [id]);

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
			.put(`http://localhost:3001/update_book/${id}`, data)
			.then((response) => {
				dispatch(updateBook(response.data));
				alertSubmit(imageUrl);
				history.push("/HomeAdmin");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className={className}>
			<h1 className="top"> แก้ไขข้อมูลหนังสือ </h1>
			<form className="add">
				<div className="row">
					<div className="col-10">
						<label> ชื่อหนังสือ: </label>
					</div>
					<div className="col-90">
						<input
							type="text"
							placeholder="กรุณากรอกชื่อหนังสือ"
							className="medium"
							onChange={(event) => setName(event.target.value)}
							value={name}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-10">
						<label> ชื่อผู้แต่ง: </label>
					</div>
					<div className="col-90">
						<input
							type="text"
							placeholder="กรุณากรอกชื่อผู้เขียน"
							className="medium"
							onChange={(event) => setAuthor(event.target.value)}
							value={author}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-10">
						<label> คำอธิบาย: </label>
					</div>
					<div className="col-90">
						<textarea
							type="text"
							placeholder="กรุณากรอกคำอธิบาย. . . . . . . . . ."
							className="long"
							onChange={(event) => setDescription(event.target.value)}
							value={description}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-10">
						<label> ประเภท: </label>
					</div>
					<div className="col-90">
						<select
							onChange={(event) => setType(event.target.value)}
							value={type}>
							<option> นวนิยาย </option> <option> ภาษา </option>
							<option> ความรู้ทั่วไป </option> <option> พัฒนาตนเอง </option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-10">
						<label> ราคา: </label>
					</div>
					<div className="col-90">
						<input
							type="text"
							placeholder="กรุณากรอกราคา"
							className="short"
							onChange={(event) => setPrice(event.target.value)}
							value={price}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-10">
						<label> จำนวน: </label>
					</div>
					<div className="col-90">
						<input
							type="text"
							placeholder="กรุณากรอกจำนวนหนังสือ"
							className="short"
							onChange={(event) => setQuantity(event.target.value)}
							value={quantity}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-10">
						<label> ลิงค์รูปภาพ: </label>
					</div>
					<div className="col-90">
						<input
							type="text"
							placeholder="กรุณากรอกลิงค์รูปภาพ"
							className="medium"
							onChange={(event) => setImageUrl(event.target.value)}
							value={imageUrl}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-10">
						<label> สถานะ: </label>
					</div>
					<div className="col-90">
						<select
							onChange={(event) => setStatus(event.target.value)}
							value={status}>
							<option> ปกติ </option> <option> มาใหม่ </option>
							<option> ยอดนิยม </option>
						</select>
					</div>
				</div>
				<div className="butt">
					<button type="submit" className="submit" onClick={onSubmit}>
						ยืนยัน
					</button>
					<Link to="../HomeAdmin">
						<button type="cancel" className="cancel">
							ยกเลิก
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
}

function alertSubmit(imageUrl) {
	Swal.fire({
		title: "Success!",
		text: "Your book has been updated.",
		confirmButtonColor: "#005488",
		imageUrl: imageUrl,
		imageHeight: 200,
		imageAlt: "Custom image",
	});
}

export default styled(EditBook)`
	font-family: "IBM Plex Sans Thai", sans-serif;
	h1.top {
		font-family: "IBM Plex Sans Thai", sans-serif;
		font-size: 26px;
		font-weight: bold;
		text-align: center;
		margin-top: 0;
		padding-top: 45px;
		margin-bottom: 2rem;
	}

	form.add {
		border: 1px solid #ccc;
		width: 80%;
		border-radius: 5px;
		padding: 1rem;
		margin-left: 8rem;
		margin-bottom: 4rem;
	}
	div.row {
		padding: 15px 10px 15px 10px;
		.col-10 {
			float: left;
			width: 15%;
			margin-top: 16px;
		}
		.col-90 {
			float: left;
			width: 85%;
			margin-top: 16px;
		}
		label {
			font-size: 20px;
			font-weight: bold;
			vertical-align: top;
			display: inline-block;
		}
		input,
		textarea {
			font-family: "IBM Plex Sans Thai", sans-serif;
			border-radius: 5px;
			padding: 8px;
			font-size: 16px;
			border: 1px solid #ccc;
		}
		input.short {
			width: 25%;
		}
		input.medium {
			width: 55%;
		}
		textarea.long {
			width: 65%;
			padding-bottom: 8rem;
		}
		select {
			font-family: "IBM Plex Sans Thai", sans-serif;
			width: 12%;
			border-radius: 5px;
			padding: 8px;
			font-size: 16px;
			border: 1px solid #ccc;
		}
	}
	div.butt {
		text-align: center;
	}
	div.butt button {
		margin-top: 3rem;
		text-align: center;
		font-family: "IBM Plex Sans Thai", sans-serif;
		font-size: 18px;
		padding: 5px;
		width: 8%;
		color: #fff;
		border-radius: 10px;
		margin-bottom: 1rem;
	}
	button.cancel {
		border: 1px solid #ec5858;
		background-color: #ec5858;
		margin-left: 3rem;
	}
	button.submit {
		border: 1px solid #5e5e5e;
		background-color: #5e5e5e;
		margin-left: 3rem;
		margin-right: 3rem;
	}
	button.submit:hover {
		background-color: #1db02c;
		border: 1px solid #1db02c;
		transition: all 0.3s;
	}
	button.cancel:hover {
		background-color: #ffc531;
		border: 1px solid #ffc531;
		transition: all 0.3s;
	}
`;
