import { CartWidget } from "./CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return(
        <header>

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecomerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#iphone">Iphone</Nav.Link>
            <Nav.Link href="#samsung">Samsung</Nav.Link>
            <Nav.Link href="#otros">Otros</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
            
        </header>
    )
}