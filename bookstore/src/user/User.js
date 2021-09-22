import React from "react";
import { Switch, Route } from "react-router-dom";

import List from "./showBook/List";
import NavBar from "./Component/Navbar";
import Container from "./Component/Container";
import BookDetail from "./bookDetail/Bookdetail";
import Footer from "./Component/Footer";
import Cart from "./cart/Cart";
import Payment from "./payment/Payment";

export default function User() {
	return (
		<Switch>
			<Route path="/User/BookDetail/:id">
				<NavBar />
				<Container>
					<BookDetail />
				</Container>
			</Route>

			<Route path="/User/Cart">
				<NavBar />
				<Container>
					<Cart />
				</Container>
			</Route>

			<Route path="/User/Payment">
				<NavBar />
				<Container>
					<Payment />
				</Container>
			</Route>

			<Route path="/User">
				<NavBar />
				<Container>
					<List />
				</Container>
				<Footer />
			</Route>
		</Switch>
	);
}
