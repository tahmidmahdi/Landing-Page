import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom"
import './NavBar.css'
const NavBar = () => {
    return (
        <div >
            <Navbar bg="" expand="lg" >
                <Container >
                    <Navbar.Brand href="#home">Fundo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link ><Link className="link-route" to ='/'>Home</Link></Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Furniture</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Contract Us</Nav.Link>
                            <Nav.Link > <Link className="link-route" to='/login'>Login</Link></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;