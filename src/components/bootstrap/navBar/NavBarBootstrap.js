import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";

export default function NavBarBootstrap(props) {
    return <Navbar bg="white" expand="lg">
        <Container>
            <div href="#home">
                <Link to="/">Abono</Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <div href="#saved">
                    <NavLink to="/category">Category</NavLink>
                </div>
                <div>
                    <NavLink to="/login">Ingresar</NavLink>
                </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}