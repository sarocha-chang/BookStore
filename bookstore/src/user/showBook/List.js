import axios from "axios";
import { useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Categories from "./Categories";
import CategoriesAll from "./CategoriesAll";
import { fetchBooks } from "../../app/Book/actions";
import PropTypes from "prop-types";
function List({className}) {
	const book = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get("/show").then((res) => {
			dispatch(fetchBooks(res.data));
		});
	}, [dispatch]);

	return (
		<div className="App">
		<Navbar
			bg="gray"
			variant="light"
			style={{ background: "#e65100", height: "60px" }}>
			<Container>
				<Nav
					className="me-auto"
					style={{ marginBottom: "20px", marginLeft: "400px" }}>
					<Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
						นวนิยาย
					</Nav.Link>
					<Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
						การ์ตูน
					</Nav.Link>
					<Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
						ศิลปะ
					</Nav.Link>
					<Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
						ความรู้
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		<Container style={{ paddingLeft: "65px" }}>
			<Row>
				<Col sm={6} className="newlist">
					<h3 style={{ marginRight: "70px" }}>หนังสือมาใหม่</h3>
					<Row>
						{book ? (
							book
								.filter((x) => x.status === "มาใหม่")
								.map((data) => {
									return <Categories key={data._id} data={data} />;
								})
						) : (
							<div>Loading books....</div>
						)}
					</Row>
				</Col>
				<Col sm={6} className="popular">
					<h3 style={{ marginRight: "70px" }}>หนังสือยอดนิยม</h3>
					<Row>
						{book ? (
							book
								.filter((x) => x.status === "ยอดนิยม")
								.map((data) => {
									return <Categories key={data._id} data={data} />;
								})
						) : (
							<div>Loading books....</div>
						)}
					</Row>
				</Col>
			</Row>
		</Container>
		<hr
			style={{
				color: "gray",
				backgroundColor: "gray",
				height: "1px",
				marginTop: "60px",
			}}
		/>

		<Row style={{justifyContent: "center", display: "flex"}}>
			<h3 style={{ paddingLeft: "45%", marginTop: "20px" }}>
				รายการหนังสือ
			</h3>
			<Col
				sm={12}
				className="normallist"
				style={{
					paddingLeft: "15%",
					paddingRight: "25%",
					marginLeft: "5%"
				}}>
				<Row>
					{book ? (
						book
							.filter((x) => x.status === "ปกติ")
							.map((data) => {
								return <CategoriesAll key={data._id} data={data} />;
							})
					) : (
						<div>Loading books....</div>
					)}
				</Row>
			</Col>
		</Row>
	</div>
	);
}

List.propTypes = {
	className: PropTypes.string,
};
export default styled(List)`
	/* overflow: hidden;
	width: 100%;
	display: flex;
	.row{
		display: flex;
		flex-direction: row;
		padding-top: 2rem;
		h1{
		font-size: 30px;
	}
	}
	.hit,.new{
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
} */
`