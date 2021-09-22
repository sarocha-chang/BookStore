import { Button, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import NavbarLanding from "./Component/NavbarLanding";
import { sliderdata } from "./imgslide/imagedata";
import "./Component/navbar.css";

function Landing() {
	return (
		<div className="App">
			<NavbarLanding />

			<Container>
				<section className="slider">
					<Carousel>
						{sliderdata.map((slide, index) => {
							return (
								<Carousel.Item key={index}>
									<img
										className="d-block w-100"
										src={slide.image}
										alt="First slide"
									/>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</section>
				<Link to="/User">
					<Button variant="primary">Go to site</Button>
				</Link>
			</Container>
		</div>
	);
}
Landing.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Landing;
