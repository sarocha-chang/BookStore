import "./navbar.css";
import { Button, Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./Navbar1";
import { sliderdata } from "./imgslide/imagedata";
import { Link } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Navbar1 />

      <Container>
        <section className="slider">
          <Carousel>
            {sliderdata.map((slide, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={slide.image }
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </section>
        <Link to="/List">
        <Button variant="primary">Go to site</Button>
        </Link>
      </Container>
    </div>
  );
}

export default App;
