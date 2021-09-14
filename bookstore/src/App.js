import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [product, SetProduct] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/").then((res) => {
			SetProduct(res.data);
		});
	}, []);
	console.log()

	return (
		<div className="App">
			{product.map((data) => (
				<h1>{data.name}</h1>
			))}
		</div>
	);
}

export default App;
