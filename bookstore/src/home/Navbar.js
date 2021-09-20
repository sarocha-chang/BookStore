import "./navbar.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./Navbar1";
import { sliderdata } from "./imgslide/imagedata";

function App() {
  const [product, SetProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/show").then((res) => {
      SetProduct(res.data);
    });
  }, []);
  console.log();

  return (
    <div className="App">
      <Navbar1 />

      <Container>
        <section className="slider">
          <Carousel>
            {sliderdata.map((slide, index) => {
              return (
                <Carousel.Item>
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
        
        <Button variant="primary">Go to site</Button>
      </Container>
    </div>
  );
}

export default App;
