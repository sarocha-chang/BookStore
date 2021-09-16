import axios from "axios";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import Container from "./admin/Container";
import ShowBook from "./admin/ShowBook";
function App() {
	const [product, SetProduct] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3001/show").then((res) => {
			SetProduct(res.data);
		});
	}, []);
	console.log()

	return (
		<>
		<Sidebar/>
		<Switch>
			<Route path="/HomeAdmin"></Route>
		</Switch>
		<Container>
			<ShowBook/>
		</Container>

		{/* <div className="App">
			{product.map((data) => (
				<h1>{data.name}</h1>
			))}
		</div> */}
		</>
	);
}

export default App;
