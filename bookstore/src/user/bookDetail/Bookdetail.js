import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchReceipts } from "../../app/Receipt/actions";

function BookDetail({ className }) {
	const [user] = useState(JSON.parse(localStorage.getItem("InLogin")));
	const [book, setBook] = useState();
	const { id } = useParams();
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		const getBookDetail = () => {
			axios.get(`/show_detail/${id}`).then((res) => {
				setBook(res.data);
			})
		};
		getBookDetail();
	}, [id]);

	function onSubmit(event) {
		
		event.preventDefault();
		if(user){
			let data = {
				Customer_id: user._id,
				Book_id: id,
				quantity: quantity,
			};
			axios.post(`/add_cart`, data)
			.then(() => {
				axios.get(`/get_cart/${user._id}`).then((res) => {
					dispatch(fetchReceipts(res.data));
				});	
			  Swal.fire("เพิ่มสินค้าเสร็จสิ้น").then(() => {
				history.push("/User");
			  });
	
			})
			.catch((error) => {
				Swal.fire("หนังสือในคลังไม่พอที่คุณต้องการซื้อ โปรดใส่จำนวนที่น้อยกว่านี้")
				console.log(error);
			});
		}else{
			Swal.fire({
				icon: 'error',
				text: 'กรุณาล็อคอินก่อนทำรายการ',
			  })
		}
	}

	return (
		<div className={className}>
			{book ? (
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
							<box-icon
								type="solid"
								name="star-half"
								color="#ffd058"></box-icon>
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
						<Link to="/User">
							<button className="btn btn-secondary">
								<span>
									<box-icon name="arrow-back" color="#fbf8f8"></box-icon>
									<span>ย้อนกลับ</span>
								</span>
							</button>
						</Link>
					</div>
				</div>
			) : (
				<div>Not found !!!</div>
			)}
		</div>
	);
}
BookDetail.propTypes = {
	className: PropTypes.string.isRequired,
	book: PropTypes.object,
	quantity: PropTypes.number,
	user: PropTypes.object,
	id: PropTypes.string,
};

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
