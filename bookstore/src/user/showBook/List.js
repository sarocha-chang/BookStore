import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [product, SetProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/show").then((res) => {
      SetProduct(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={6} className="newlist">
            <h3>หนังสือมาใหม่</h3>
            <Row>
              {product ? (
                product
                  .filter((x) => x.status === "มาใหม่")
                  .map((data) => {
                    return (
                      <Card
                        style={{ width: "15rem", height: "370px" }}
                        key={data._id}
                      >
                        <Card.Img
                          variant="top"
                          src={data.imageUrl}
                          style={{ width: "175px", height: "175px" }}
                        />
                        <Card.Body>
                          <Link to={`./BookDetail/${data._id}`}>
                            <Card.Title
                              style={{
                                fontSize: "16px",
                                fontFamily: "IBM Plex Sans Thai",
                              }}
                            >
                              {data.name}
                            </Card.Title>
                          </Link>
                          <Card.Text
                            style={{
                              fontSize: "16px",
                              fontFamily: "IBM Plex Sans Thai",
                            }}
                          >
                            ราคา : {data.price} บาท
                          </Card.Text>
                          <Link to="/">
                            <Button variant="primary">เพิ่มไปยังตระกร้า</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    );
                  })
              ) : (
                <div>Loading products....</div>
              )}
            </Row>
          </Col>
          <Col sm={6} className="popular">
            <h3>หนังสือยอดนิยม</h3>
            <Row>
              {product ? (
                product
                  .filter((x) => x.status === "ยอดนิยม")
                  .map((data) => {
                    return (
                      <Card style={{ width: "15rem", height: "370px" }}>
                        <Card.Img
                          variant="top"
                          src={data.imageUrl}
                          style={{ width: "175px", height: "175px" }}
                        />
                        <Card.Body>
                          <Link to={`./BookDetail/${data._id}`}>
                            <Card.Title
                              style={{
                                fontSize: "16px",
                                fontFamily: "IBM Plex Sans Thai",
                              }}
                            >
                              {data.name}
                            </Card.Title>
                          </Link>
                          <Card.Text
                            style={{
                              fontSize: "16px",
                              fontFamily: "IBM Plex Sans Thai",
                            }}
                          >
                            ราคา : {data.price} บาท
                          </Card.Text>
                          <Link to="./">
                            <Button variant="primary">เพิ่มไปยังตระกร้า</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    );
                  })
              ) : (
                <div>Loading products....</div>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default styled(App)`
  /* div.row {
    margin-top: 50px;
    align-items: center;
    text-align: center;
  }
  .row {
    align-items: center;
    text-align: center;
  }
  .card {
    margin-left: 60px;
    margin-top: 20px;
  } */
`;
