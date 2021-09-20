import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, ListGroup,Navbar,Nav, NavbarBrand } from "react-bootstrap";
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

      <Navbar bg="gray" variant="light" style={{background:'gray',height:'60px'}}>
        <Container>
         
          <Nav className="me-auto" style={{marginBottom:"20px",marginLeft:"400px",}}>
            <Nav.Link href="#" style={{marginRight:"80px",color:"#fff"}}>
                นวนิยาย
            </Nav.Link>
            <Nav.Link href="#"style={{marginRight:"80px",color:"#fff"}}>
                การ์ตูน
            </Nav.Link>
            <Nav.Link href="#"style={{marginRight:"80px",color:"#fff"}}>
                ศิลปะ
            </Nav.Link>
            <Nav.Link href="#"style={{marginRight:"80px",color:"#fff"}}>
                ความรู้
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col sm={6} className="newlist">
            <h3 style={{ marginRight: "70px" }}>หนังสือมาใหม่</h3>
            <Row>
              {product ? (
                product
                  .filter((x) => x.status === "มาใหม่")
                  .map((data) => {
                    return (

                      <Col sm={5}>


                        <Card border="gray"
                          style={{
                            width: "15rem", height: "330px", marginLeft: "20px", marginTop: "10px", webkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                            mozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                            boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)"
                          }}
                          key={data._id}
                        >
                          <Card.Img
                            variant="top"
                            src={data.imageUrl}
                            style={{ width: "200px", height: "150px", marginTop: "10px", marginLeft: "20px" }}
                          />
                          <Card.Body>
                            <Link to={`./BookDetail/${data._id}`}>
                              <Card.Title
                                style={{
                                  fontSize: "11px",
                                  fontFamily: "IBM Plex Sans Thai",
                                }}
                              >
                                {data.name}
                              </Card.Title>
                            </Link>


                          </Card.Body>
                          <Card.Text
                            style={{
                              fontSize: "14px",
                              fontFamily: "IBM Plex Sans Thai",
                            }}
                          >
                            ราคา : {data.price} บาท
                          </Card.Text>
                          <Link to="/">
                            <Button variant="primary" className="button" style={{
                              fontSize: "14px",
                              fontFamily: "IBM Plex Sans Thai",
                              borderRadius: '20px',
                              paddingLeft: '45px',
                              paddingRight: '45px',
                              background: '#fedc56',
                              color: '#000'


                            }}>เพิ่มไปยังตระกร้า</Button>
                          </Link>
                        </Card>
                      </Col>
                    );
                  })
              ) : (
                <div>Loading products....</div>
              )}
            </Row>
          </Col>
          <Col sm={6} className="popular">
            <h3 style={{ marginRight: "70px" }}>หนังสือยอดนิยม</h3>
            <Row>
              {product ? (
                product
                  .filter((x) => x.status === "ยอดนิยม")
                  .map((data) => {
                    return (
                      <Col sm={5}>
                        <Card border="gray" style={{
                          width: "15rem", height: "330px", marginLeft: "20px", marginTop: "10px", webkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                          mozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                          boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)"
                        }}>
                          <Card.Img
                            variant="top"
                            src={data.imageUrl}
                            style={{ width: "200px", height: "150px", marginTop: "10px", marginLeft: "20px" }}
                          />
                          <Card.Body>
                            <Link to={`./BookDetail/${data._id}`}>
                              <Card.Title
                                style={{
                                  fontSize: "11px",
                                  fontFamily: "IBM Plex Sans Thai",
                                }}
                              >
                                {data.name}
                              </Card.Title>
                            </Link>


                          </Card.Body>
                          <Card.Text
                            style={{
                              fontSize: "14px",
                              fontFamily: "IBM Plex Sans Thai",
                            }}
                          >
                            ราคา : {data.price} บาท
                          </Card.Text>
                          <Link to="./">
                            <Button variant="primary" style={{
                              fontSize: "14px",
                              fontFamily: "IBM Plex Sans Thai",
                              borderRadius: '20px',
                              paddingLeft: '45px',
                              paddingRight: '45px',
                              background: '#fedc56',
                              color: '#000'

                            }}>เพิ่มไปยังตระกร้า</Button>
                          </Link>
                        </Card>
                      </Col>
                    );
                  })
              ) : (
                <div>Loading products....</div>
              )}
            </Row>
          </Col>



        </Row>
      </Container>
      <hr
        style={{
          color: 'gray',
          backgroundColor: 'gray',
          height: '1px',
          marginTop: '60px'
        }}
      />
      <Row>
        {/*  <Col sm={3} style={{ marginLeft: "20px" }}>
          <ListGroup variant="flush" style={{ marginTop: "110px" }}>
            <ListGroup.Item>category</ListGroup.Item>
            <Link to="/" style={{ textDecoration: "none", marginLeft: "25px" }}>
              นวนิยาย
            </Link>
            <Link to="/" style={{ textDecoration: "none", marginLeft: "25px" }} >
              การ์ตูน
            </Link>
            <Link to="/" style={{ textDecoration: "none", marginLeft: "25px" }}>
              ศิลปะ
            </Link>
            <Link to="/" style={{ textDecoration: "none", marginLeft: "25px" }}>
              ความรู้
            </Link>
          </ListGroup>

        </Col> */}
        <Col sm={12} className="normallist" style={{ marginTop: "30px", marginLeft: "20px" }}>

          <Row>
            {product ? (
              product
                .filter((x) => x.status === "ปกติ")
                .map((data) => {
                  return (
                    <Card border="gray" style={{
                      width: "12rem", height: "350px", marginLeft: "20px", marginTop: "20px", webkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                      mozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                      boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)"
                    }}>
                      <Card.Img
                        variant="top"
                        src={data.imageUrl}
                        style={{ width: "170px", height: "150px", marginTop: "10px", marginRight: "10px" }}
                      />
                      <Card.Body>
                        <Link to={`./BookDetail/${data._id}`}>
                          <Card.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "IBM Plex Sans Thai",
                            }}
                          >
                            {data.name}
                          </Card.Title>
                        </Link>


                      </Card.Body>
                      <Card.Text
                        style={{
                          fontSize: "16px",
                          fontFamily: "IBM Plex Sans Thai",
                          marginLeft: "30px"
                        }}
                      >
                        ราคา : {data.price} บาท
                      </Card.Text>
                      <Link to="./">
                        <Button variant="primary" style={{
                          fontSize: "14px",
                          fontFamily: "IBM Plex Sans Thai",
                          marginLeft: "15px",
                          borderRadius: '20px',
                          paddingLeft: '20px',
                          paddingRight: '20px',
                          background: '#fedc56',
                          color: '#000'



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

    </div>
  );
}

export default styled(App)`
 .button:hover{
   background: yellow;
 }

`;
