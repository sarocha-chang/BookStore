import "./css/list.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar_list from "./Navbar_list";
import { Button, Carousel, Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
    const [product, SetProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/show").then((res) => {
            SetProduct(res.data);
        });
    }, []);

    return (

        <div className="App">
            <Navbar_list />
            <Container>
                <Row>
                 
                    <Col sm={6} className="newlist">
                        
                        <h3>
                            หนังสือมาใหม่
                        </h3>
                        <Row>
                            {product ? (
                                product.filter((x => x.status == "มาใหม่")).map((data) => {
                                    return (
                                        <Card style={{ width: '15rem',height:'370px' }}>
                                            <Card.Img variant="top" src={data.imageUrl} style={{width:"175px",height:"175px"}} />
                                            <Card.Body>
                                                <Card.Title style={{fontSize:"16px",fontFamily:"IBM Plex Sans Thai"}}>{data.name}</Card.Title>
                                                <Card.Text style={{fontSize:"16px",fontFamily:"IBM Plex Sans Thai"}}>
                                                    ราคา : {data.price} บาท
                                                </Card.Text>
                                              <Link to ="./">  <Button variant="primary">เพิ่มไปยังตระกร้า</Button></Link>
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
                                product.filter((x => x.status == "ยอดนิยม")).map((data) => {
                                    return (
                                        <Card style={{ width: '15rem',height:'370px' }}>
                                            <Card.Img variant="top" src={data.imageUrl} style={{width:"175px",height:"175px"}} />
                                            <Card.Body>
                                                <Card.Title style={{fontSize:"16px",fontFamily:"IBM Plex Sans Thai"}}>{data.name}</Card.Title>
                                                <Card.Text style={{fontSize:"16px",fontFamily:"IBM Plex Sans Thai"}}>
                                                    ราคา : {data.price} บาท
                                                </Card.Text>
                                                <Link to ="./">  <Button variant="primary">เพิ่มไปยังตระกร้า</Button></Link>
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

export default App;
