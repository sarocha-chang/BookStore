import PropTypes from "prop-types";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { fetchBooks } from "../app/Book/actions";

import DetailTable from "./DetailTable";
function Books({ className }) {
	const books = useSelector((state) => state.books);
	const dispatch = useDispatch();
	const [keyword, setKeyword] = useState("");

	useEffect(() => {
		function get() {
			axios.get("/show").then((res) => {
				dispatch(fetchBooks(res.data));
			})
		}
		get();
	}, [dispatch]);

	function useSearch(event) {
		setKeyword(event.target.value);
		axios.get(`/search/${keyword}`).then((res) => {
			dispatch(fetchBooks(res.data))
		}).catch((err) =>{
			console.log(err);
		})
	}

	return (
		<div className={className}>
			<h1 className="top">ข้อมูลหนังสือ</h1>
			<form className="form-inline">
				<input
					type="text"
					className="search"
					placeholder="Search by book's name"
					onChange={useSearch}
					value={keyword}
				/>
			</form>
			<table className="ShowBook">
				<thead>
					<tr>
						<th>รูป</th>
						<th>ชื่อหนังสือ</th>
						<th>ชื่อผู้แต่ง</th>
						<th>คำอธิบาย</th>
						<th>ประเภท</th>
						<th> ราคา</th>
						<th>จำนวน</th>
						<th>สถานะ</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{books ? (
						books.map((data) => {
							return <DetailTable data={data} key={data._id}/>;
						})
					) : (
						<div>Loading products....</div>
					)}
				</tbody>
			</table>
		</div>
	);
}

Books.propTypes = {
	className: PropTypes.string.isRequired,
	books: PropTypes.node,
};

export default styled(Books)`
	margin-bottom: 50px;
	width: 98%;
	h1.top {
		font-family: "IBM Plex Sans Thai", sans-serif;
		padding-top: 40px;
		margin-top: 0px;
		font-weight: bold;
		font-size: 26px;
		text-align: center;
		margin-bottom: 2.5rem;
	}
	.ShowBook {
		border-collapse: collapse;
		border-radius: 15px;
		width: 100%;
		table-layout: fixed;
		thead tr th {
			text-align: center;
			font-size: 20px;
			font-weight: bold;
			padding-bottom: 30px;
			border-bottom: 1px solid #e5e5e5;
		}

		td {
			color: black;
			font-size: 18px;
			text-align: center;
			padding: 25px 10px 10px 10px;
		}
	}
	form.form-inline {
		text-align: center;
		margin-bottom: 2rem;
	}
	input.search {
		font-family: "IBM Plex Sans Thai", sans-serif;
		padding: 5px;
		border-radius: 12px;
		font-size: 16px;
		width: 40%;
		justify-content: center;
		transition: border 0.3s;
	}
	input.search:focus {
		outline: none;
		border-radius: 12px;
		border: 2px solid #ffc531;
		transition: border 0.3s;
		font-family: "IBM Plex Sans Thai", sans-serif;
		padding: 5px;
		font-size: 16px;
		width: 40%;
		justify-content: center;
	}
`;
