import React from 'react'
import "./css/Navbar.css"
import { Button, Carousel, Container,Navbar,Nav,Form,FormControl } from 'react-bootstrap'
import 'boxicons'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function navbar_list() {
    return (
        <>
            <Navbar  expand="lg">
                <Navbar.Brand href="#" className="logo" style={{color:"#fff"}}>CHACHAX</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{color:"#fff"}}>เข้าสู่ระบบ</Nav.Link>
                        <Nav.Link href="#action2"><box-icon name='shopping-bag' color='#fff' ></box-icon></Nav.Link>
                      
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
