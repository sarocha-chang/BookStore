import "./navbar.css";
import axios from "axios";
import { useState, useEffect } from "react";

import {Button,Carousel,Container}  from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


import { sliderdata } from "./imgslide/imagedata";




function App() {
	const [product, SetProduct] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/show").then((res) => {
			SetProduct(res.data);
		});
	}, []);
	console.log()

	return (
		
		<div className="App">
			<header>
            <h1>CHACHAX</h1>
			<nav>
				<ul class="nav-link">
					<li><a href="#">login</a></li>
					<li><a href="#">cart</a></li>
				</ul>
			</nav>
			</header>

			<Container>
                
			</Container>
		 	
	
		</div>
		

	);
	
}

export default App;
