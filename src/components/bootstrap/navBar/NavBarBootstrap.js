import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";
import 'boxicons'

export default function NavBarBootstrap(props) {
    return <Navbar bg="white" expand="lg">
        <Container>
            <h5><Link to="/" className="text-muted text-decoration-none p-3">Abono</Link></h5>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink to="/categories" className="text-muted text-decoration-none p-3">Categorías</NavLink>
                <NavLink to="/login" className="text-muted text-decoration-none p-3">Ingresar</NavLink>
                <NavLink to="/cart" className="text-muted text-decoration-none p-3">
                    <box-icon name="cart"></box-icon>
                </NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}