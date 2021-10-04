import {Switch, Route} from "react-router-dom";
import "boxicons";
import Footer from "./user/Component/Footer";
import GlobalStyle from "./GlobalStyle";
import Admin from "./admin/Admin";
import Landing from "./landing/Landing";
import Registration from "./registration/Registration";
import User from "./user/User";

function App() {
	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/admin">
					<Admin />
				</Route>

				<Route path="/" exact>
					<Landing />
					<Footer />
				</Route>

				<Route path="">
					<User />
					<Registration />
				</Route>
			</Switch>
		</>
	);
}

export default App;
