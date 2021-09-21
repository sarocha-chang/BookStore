import { Switch, Route } from "react-router-dom";
import "boxicons";

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
				<Route path="/User">
					<User />
				</Route>

				<Route path="/Registration">
					<Registration />
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
