import axios from "axios";
import './List.css'
import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, ListGroup,Navbar,Nav, NavbarBrand } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchBook, fetchBooks } from "../../app/actions";
import Swal from "sweetalert2";

function App() {
  const [product, SetProduct] = useState([]);
  useEffect(() => {
    axios.get("/show").then((res) => {
      SetProduct(res.data);
    });
  }, []);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("InLogin")));
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();

  var run = () =>
    new Promise((resolve, reject) => {
      setUser(JSON.parse(localStorage.getItem("InLogin")));
      resolve();
    });

  useEffect(() => {
    axios.get(`http://localhost:3001/show_detail/${id}`).then((res) => {
      dispatch(searchBook(res.data));
      
    });
  }, [dispatch, id]);
  console.log(book);

  function onSubmit(e,data_) {
    e.preventDefault();
    
    run()
      .then(() => {
        let data = {
          Customer_id: user._id,
          Book_id: data_,
          quantity: quantity,
        };
        return data;
      })
      .then((data) => {
        Swal.fire("Added succes!").then(() => {
          axios
            .post(`http://localhost:3001/add_cart`, data)
            .then((response) => {
              axios.get(`/get_cart/${user._id}`).then((res) => {
                dispatch(fetchBooks(res.data));
              }).then(() => {
                history.push("/List");
              })
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }


  return (
    <div className="App">

      <Navbar bg="gray" variant="light" style={{background:'#e65100',height:'60px'}}>
        <Container>
          <Nav
            className="me-auto"
            style={{ marginBottom: "20px", marginLeft: "400px" }}
          >
            <Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
              นวนิยาย
            </Nav.Link>
            <Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
              การ์ตูน
            </Nav.Link>
            <Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
              ศิลปะ
            </Nav.Link>
            <Nav.Link href="#" style={{ marginRight: "80px", color: "#fff" }}>
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
                        <Card
                          border="gray"
                          style={{
                            width: "15rem",
                            height: "345px",
                            marginLeft: "20px",
                            marginTop: "10px",
                            webkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                            mozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                            boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)",
                          }}
                          key={data._id}
                        >
                          <Card.Img
                            variant="top"
                            src={data.imageUrl}
                            style={{
                              width: "150px",
                              height: "155px",
                              marginTop: "10px",
                              marginLeft: "45px",
                            }}
                          />
                          <Card.Body>
                            <Link to={`./BookDetail/${data._id}`} style={{textDecoration:"none"}}>
                              <Card.Title
                                style={{
                                  fontSize: "11px",
                                  fontFamily: "IBM Plex Sans Thai",
                                  color:"#000",
                                  
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
                            <Button variant="primary" data-id={data._id} onClick={(e)=>onSubmit(e,data._id)} className="button"  style={{
                              fontSize: "14px",
                              fontFamily: "IBM Plex Sans Thai",
                              borderRadius: '10px ',
                              paddingLeft: '45px',
                              paddingRight: '45px',
                              background: 'none',
                              color: '#000',
                              marginBottom:'10px'


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
                        <Card
                          border="gray"
                          style={{
                            width: "15rem",
                            height: "345px",
                            marginLeft: "20px",
                            marginTop: "10px",
                            webkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                            mozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                            boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)",
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={data.imageUrl}
                            style={{
                              width: "150px",
                              height: "155px",
                              marginTop: "10px",
                              marginLeft: "45px",
                            }}
                          />
                          <Card.Body>
                            <Link to={`./BookDetail/${data._id}`} style={{textDecoration:"none"}}  >
                              <Card.Title
                                style={{
                                  fontSize: "11px",
                                  fontFamily: "IBM Plex Sans Thai",
                                  color:"#000",
                                  textDecoration:'none'

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
                            <Button variant="primary" data-id={data._id} onClick={(e)=>onSubmit(e,data._id)} style={{
                              fontSize: "14px",
                              fontFamily: "IBM Plex Sans Thai",
                              borderRadius: '10px',
                              paddingLeft: '45px',
                              paddingRight: '45px',
                              background: 'none',
                              marginBottom:"10px",
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
          color: "gray",
          backgroundColor: "gray",
          height: "1px",
          marginTop: "60px",
        }}
      />
      <Row>
        
        <Col sm={12} className="normallist" style={{ marginTop: "30px", marginLeft: "20px" }}>

          <Row>
            {product ? (
              product
                .filter((x) => x.status === "ปกติ")
                .map((data) => {
                  return (
                    <Col sm={3}>
                    <Card
                      border="gray"
                      style={{
                        width: "12rem",
                        height: "350px",
                        marginLeft: "55px",
                        marginTop: "20px",
                        webkitBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                        mozBoxShadow: "0 12px 34px rgba(0, 0, 0, 0.12)",
                        boxShadow: " 0 12px 34px rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={data.imageUrl}
                        style={{
                          width: "135px",
                          height: "150px",
                          marginTop: "10px",
                          marginLeft: "25px",
                        }}
                      />
                      <Card.Body>
                        <Link to={`./BookDetail/${data._id}`} style={{textDecoration:"none"}}>
                          <Card.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "IBM Plex Sans Thai",
                              color:"#000",
                              textDecoration:"none",
                              marginLeft:"15px"
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
                          marginLeft: "40px",
                        }}
                      >
                        ราคา : {data.price} บาท
                      </Card.Text>
                      <Link to="/">
                        <Button variant="primary" data-id={data._id} onClick={(e)=>onSubmit(e,data._id)} className="btn"style={{
                          fontSize: "14px",
                          fontFamily: "IBM Plex Sans Thai",
                          marginLeft: "25px",
                          marginBottom:"10px",
                          borderRadius: '10px',
                          paddingLeft: '20px',
                          paddingRight: '20px',
                          background: 'none',
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
    </div>
  );
}
export default styled(App)`
  overflow: hidden;

  .Card
  {

  .button:hover {
    background: yellow;
  }
}
`;
