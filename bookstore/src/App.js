import { Switch, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Admin from "./admin/Admin";
import Landing from "./home/Landing";
import Login from "./resgister_and_login/Login";
import Container from "./resgister_and_login/components/containerforlogin";
import Register from "./resgister_and_login/Register";
import List from "./user/showBook/List";
import NavBarAll from "./user/Navbar_list";
import ContainerAll from "./user/Container";
import BookDetail from "./user/bookDetail/Bookdetail";
import Footer from "./user/Footer";
import Cart from "./user/cart/Cart";
import Payment from "./user/payment/Payment";
import "boxicons";

function App() {
	return (
		<>
			<GlobalStyle />

			<Switch>
				<Route path="/Login">
					<Container>
						<Login />
					</Container>
				</Route>

				<Route path="/Register">
					<Container>
						<Register />
					</Container>
				</Route>

				<Route path="/List">
					<NavBarAll />
					<ContainerAll>
						<List />
					</ContainerAll>
					<Footer />
				</Route>

				<Route path="/BookDetail/:id">
					<NavBarAll />
					<ContainerAll>
						<BookDetail />
					</ContainerAll>
				</Route>

				<Route path="/Cart">
					<NavBarAll />
					<ContainerAll>
						<Cart />
					</ContainerAll>
				</Route>

				<Route path="/Payment">
					<NavBarAll />
					<ContainerAll>
						<Payment />
					</ContainerAll>
				</Route>

				<Route path="/Admin">
					<Admin />
				</Route>

				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</>
	);
}

export default App;
