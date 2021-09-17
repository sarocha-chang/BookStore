import { Switch, Route, Link } from "react-router-dom";

import Sidebar from "./admin/Sidebar";
import Container from "./admin/Container";
import ShowBook from "./admin/ShowBook";

function App() {
	return (
		<>
			<Switch>

				<Route path="/HomeAdmin">
					<Sidebar />
					<Container>
						<ShowBook />
					</Container>
				</Route>

				<Route path="/">
					<Link to="/HomeAdmin">Admin</Link>
          
				</Route>

			</Switch>
		</>
	);
}

export default App;
