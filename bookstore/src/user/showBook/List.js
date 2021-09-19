import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [product, SetProduct] = useState([]);
  useEffect(() => {
    axios.get("/show").then((res) => {
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
                      <Card border="info"
                        style={{ width: "12rem", height: "370px", marginLeft: "20px", marginTop: "10px" }}
                        key={data._id}
                      >
                        <Card.Img
                          variant="top"
                          src={data.imageUrl}
                          style={{ width: "160px", height: "150px", marginTop: "10px", marginLeft: "3px" }}
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

                        </Card.Body>
                        <Link to="/">
                          <Button variant="primary" style={{
                            fontSize: "14px",
                            fontFamily: "IBM Plex Sans Thai",
                          }}>เพิ่มไปยังตระกร้า</Button>
                        </Link>
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
                      <Card border="info" style={{ width: "12rem", height: "370px", marginLeft: "20px", marginTop: "10px" }}>
                        <Card.Img
                          variant="top"
                          src={data.imageUrl}
                          style={{ width: "160px", height: "150px", marginTop: "10px", marginLeft: "3px" }}
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

                        </Card.Body>
                        <Link to="./">
                          <Button variant="primary" style={{
                            fontSize: "14px",
                            fontFamily: "IBM Plex Sans Thai",
                          }}>เพิ่มไปยังตระกร้า</Button>
                        </Link>
                      </Card>
                    );
                  })
              ) : (
                <div>Loading products....</div>
              )}
            </Row>
          </Col>
          <Col sm={3} style={{ marginLeft: "20px" }}>
            <ListGroup variant="flush" style={{ marginTop: "110px", border: "0.5px solid black" }}>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <Link to="/" style={{textDecoration:"none"}}>
                นวนิยาย
              </Link>
              <Link to="/" style={{textDecoration:"none"}} >
                การ์ตูน
              </Link>
              <Link to="/" style={{textDecoration:"none"}}>
                ศิลปะ
              </Link>
              <Link to="/" style={{textDecoration:"none"}}>
                ความรู้
              </Link>
            </ListGroup>

          </Col>

          <Col sm={8} className="normallist" style={{ marginTop: "50px" }}>
            <h3>รายการหนังสือ</h3>
            <Row>
              {product ? (
                product
                  .filter((x) => x.status === "ปกติ")
                  .map((data) => {
                    return (
                      <Card border="info" style={{ width: "12rem", height: "370px", marginLeft: "20px", marginTop: "20px" }}>
                        <Card.Img
                          variant="top"
                          src={data.imageUrl}
                          style={{ width: "165px", height: "150px", marginTop: "10px", marginRight: "10px" }}
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

                        </Card.Body>
                        <Link to="./">
                          <Button variant="primary" style={{
                            fontSize: "14px",
                            fontFamily: "IBM Plex Sans Thai",
                          }}>เพิ่มไปยังตระกร้า</Button>
                        </Link>
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
